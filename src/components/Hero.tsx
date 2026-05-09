import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Music, Music2 } from "lucide-react";
import bgMusic from "@/assets/bg-music.mp3";

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [music, setMusic] = useState(false);
  const [audio] = useState(() => {
    if (typeof window === "undefined") return null;
    const a = new Audio(bgMusic);
    a.loop = true;
    a.volume = 0.35;
    return a;
  });

  const toggle = () => {
    if (!audio) return;
    if (music) audio.pause();
    else audio.play().catch(() => {});
    setMusic(!music);
  };
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-6 pt-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${50 + mouse.x}% ${40 + mouse.y}%, oklch(0.4 0.2 300 / 0.45), transparent 60%)`,
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-sm uppercase tracking-[0.4em] text-primary"
        >
          A magical journey
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          style={{ transform: `translate(${mouse.x * 0.4}px, ${mouse.y * 0.4}px)` }}
          className="text-gradient text-6xl font-light leading-[0.95] sm:text-7xl md:text-8xl lg:text-9xl"
        >
          My Little
          <br />
          <span className="italic">Star</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mx-auto mt-8 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          Every smile, every giggle, every tiny moment — a galaxy of memories captured in light.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#gallery"
            className="glass neon-border rounded-full px-7 py-3 text-sm font-medium tracking-wide transition hover:scale-105"
          >
            Explore Gallery
          </a>
          <a
            href="#memories"
            className="rounded-full border border-border px-7 py-3 text-sm tracking-wide text-foreground/80 transition hover:border-primary hover:text-foreground"
          >
            Our Memories →
          </a>
          <button
            onClick={toggle}
            aria-label="Toggle music"
            className="rounded-full border border-border px-7 py-3 text-sm tracking-wide text-foreground/80 transition hover:border-primary hover:text-foreground flex items-center gap-2"
          >
            {music ? <Music2 className="h-4 w-4" /> : <Music className="h-4 w-4" />}
            {music ? "Pause Music" : "Play Music"}
          </button>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll
      </motion.div>
    </section>
  );
}
