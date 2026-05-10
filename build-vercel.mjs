// build-vercel.mjs
// Custom build script that:
// 1. Runs `vite build` (produces dist/client + dist/server)
// 2. Copies output into .vercel/output following the Vercel Build Output API
//    so that static assets are served directly and a Node.js serverless function
//    handles SSR.

import { execSync } from "node:child_process";
import { cpSync, mkdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();

// Step 1: Run the normal vite build
console.log("▶ Running vite build...");
execSync("npx vite build", { stdio: "inherit", cwd: ROOT });

// Step 2: Prepare .vercel/output structure
const OUT = join(ROOT, ".vercel", "output");

// Clean previous output
if (existsSync(OUT)) {
  execSync(process.platform === "win32" ? `rmdir /s /q "${OUT}"` : `rm -rf "${OUT}"`, {
    stdio: "inherit",
    cwd: ROOT,
  });
}

// config.json — top-level Vercel Build Output API config
mkdirSync(OUT, { recursive: true });
writeFileSync(
  join(OUT, "config.json"),
  JSON.stringify({ version: 3, routes: [
    // Serve static assets from dist/client
    { handle: "filesystem" },
    // Everything else goes to the serverless function
    { src: "/(.*)", dest: "/ssr" },
  ]}, null, 2)
);

// Step 3: Copy static assets (dist/client -> .vercel/output/static)
const staticDir = join(OUT, "static");
mkdirSync(staticDir, { recursive: true });
cpSync(join(ROOT, "dist", "client"), staticDir, { recursive: true });

// Step 4: Create a Node.js serverless function (NOT edge) that wraps the server
const fnDir = join(OUT, "functions", "ssr.func");
mkdirSync(fnDir, { recursive: true });

// Copy the server build into the function directory
cpSync(join(ROOT, "dist", "server"), join(fnDir, "server"), { recursive: true });

// Also copy client assets into function dir so SSR can inline references
cpSync(join(ROOT, "dist", "client"), join(fnDir, "client"), { recursive: true });

// Function config — using Node.js runtime (NOT edge) to support all npm modules
writeFileSync(
  join(fnDir, ".vc-config.json"),
  JSON.stringify({
    runtime: "nodejs22.x",
    handler: "index.mjs",
    launcherType: "Nodejs",
  }, null, 2)
);

// Copy over package.json so the function can resolve dependencies
const pkgJson = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf-8"));
writeFileSync(
  join(fnDir, "package.json"),
  JSON.stringify({
    type: "module",
    dependencies: pkgJson.dependencies,
  }, null, 2)
);

// Node.js serverless function entry point
writeFileSync(
  join(fnDir, "index.mjs"),
  `
import handler from "./server/server.js";

export default async function (req, res) {
  try {
    const protocol = req.headers["x-forwarded-proto"] || "https";
    const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
    const url = new URL(req.url, \`\${protocol}://\${host}\`);

    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value) headers.set(key, Array.isArray(value) ? value.join(", ") : value);
    }

    const hasBody = req.method !== "GET" && req.method !== "HEAD";
    let body = null;
    if (hasBody) {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      body = Buffer.concat(chunks);
    }

    const request = new Request(url.toString(), {
      method: req.method,
      headers,
      body,
      duplex: hasBody ? "half" : undefined,
    });

    const response = await handler.fetch(request, {}, {});

    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (response.body) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }
    res.end();
  } catch (e) {
    console.error("SSR Error:", e);
    res.statusCode = 500;
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.end(\`
      <div style="padding: 20px; font-family: sans-serif;">
        <h1 style="color: #e11d48;">Deployment SSR Error</h1>
        <p>The server encountered an error while rendering this page.</p>
        <pre style="background: #f4f4f5; padding: 15px; border-radius: 8px; overflow: auto; border: 1px solid #e4e4e7;">\${e.stack || e.message}</pre>
        <p style="color: #71717a; font-size: 14px;">Check Vercel logs for more details.</p>
      </div>
    \`);
  }
}
`
);

console.log("✅ Vercel Build Output API structure created at .vercel/output");
console.log("   - Static assets: .vercel/output/static");
console.log("   - SSR function:  .vercel/output/functions/ssr.func (Node.js runtime)");
