import { motion } from "framer-motion";
import { Mail, Instagram, Heart } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass neon-border rounded-3xl p-10 text-center sm:p-16"
        >
          <Heart className="mx-auto mb-6 h-10 w-10 text-primary" fill="currentColor" style={{ filter: "drop-shadow(0 0 20px oklch(0.72 0.25 310 / 0.9))" }} />
          <h2 className="text-gradient mb-4 text-4xl font-light sm:text-5xl">Share The Joy</h2>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            Send a little love, a memory, or a wish for our little star.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:hello@littlestar.love" className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm transition hover:scale-105 hover:text-primary">
              <Mail className="h-4 w-4" /> hello@littlestar.love
            </a>
            <a href="#" className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm transition hover:scale-105 hover:text-primary">
              <Instagram className="h-4 w-4" /> @little.star
            </a>
          </div>
        </motion.div>
        <p className="mt-12 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} My Little Star · Made with love
        </p>
      </div>
    </section>
  );
}
