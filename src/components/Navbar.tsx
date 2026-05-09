import { motion } from "framer-motion";
import { Music, Music2, Sparkles } from "lucide-react";
import { useState } from "react";
import bgMusic from "@/assets/bg-music.mp3";


const links = [
  { href: "#home", label: "Home" },
  { href: "#gallery", label: "Gallery" },
  { href: "#memories", label: "Memories" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
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
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-1/2 top-4 z-50 w-[min(96%,1100px)] -translate-x-1/2"
    >
      <div className="glass flex items-center justify-between rounded-2xl px-5 py-3">
        <a href="#home" className="flex items-center gap-2 font-display text-xl text-gradient">
          <Sparkles className="h-5 w-5 text-primary" />
          Little Star
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm text-foreground/80 transition hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggle}
          aria-label="Toggle music"
          className="glass rounded-full p-2.5 text-foreground transition hover:scale-110 hover:text-primary"
        >
          {music ? <Music2 className="h-4 w-4" /> : <Music className="h-4 w-4" />}
        </button>
      </div>
    </motion.nav>
  );
}
