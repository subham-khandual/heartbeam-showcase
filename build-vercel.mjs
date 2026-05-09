// build-vercel.mjs
// Custom build script that:
// 1. Runs `vite build` (produces dist/client + dist/server for Cloudflare worker format)
// 2. Copies output into .vercel/output following the Vercel Build Output API
//    so that static assets are served directly and a serverless edge function
//    handles SSR.

import { execSync } from "node:child_process";
import { cpSync, mkdirSync, writeFileSync, readdirSync, existsSync } from "node:fs";
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
    // Everything else goes to the edge function
    { src: "/(.*)", dest: "/ssr" },
  ]}, null, 2)
);

// Step 3: Copy static assets (dist/client -> .vercel/output/static)
const staticDir = join(OUT, "static");
mkdirSync(staticDir, { recursive: true });
cpSync(join(ROOT, "dist", "client"), staticDir, { recursive: true });

// Step 4: Create an edge function that wraps the Cloudflare-format server
const fnDir = join(OUT, "functions", "ssr.func");
mkdirSync(fnDir, { recursive: true });

// Copy the server build into the function directory
cpSync(join(ROOT, "dist", "server"), join(fnDir, "server"), { recursive: true });

// Also copy client assets into function dir so SSR can inline references
cpSync(join(ROOT, "dist", "client"), join(fnDir, "client"), { recursive: true });

// Function config
writeFileSync(
  join(fnDir, ".vc-config.json"),
  JSON.stringify({
    runtime: "edge",
    entrypoint: "index.js",
  }, null, 2)
);

// Edge function entry point — adapts Cloudflare worker format to Vercel edge
writeFileSync(
  join(fnDir, "index.js"),
  `
import handler from "./server/server.js";

export default async function (request, context) {
  try {
    const response = await handler.fetch(request, {}, context);
    return response;
  } catch (e) {
    console.error("SSR Error:", e);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export const config = { runtime: "edge" };
`
);

console.log("✅ Vercel Build Output API structure created at .vercel/output");
