import { motion } from "framer-motion";
import { Cake, Footprints, Smile, Star, Moon, Heart } from "lucide-react";

const items = [
  { icon: Smile, date: "Day 1", title: "First Smile", desc: "The moment time stood still." },
  { icon: Moon, date: "Month 2", title: "Sweet Dreams", desc: "Tiny breaths, infinite love." },
  { icon: Heart, date: "Month 4", title: "First Giggle", desc: "Laughter that lit up the room." },
  { icon: Footprints, date: "Month 7", title: "First Crawl", desc: "Adventures begin on tiny knees." },
  { icon: Star, date: "Month 10", title: "First Word", desc: "A sound we'll never forget." },
  { icon: Cake, date: "Year 1", title: "First Birthday", desc: "A whole year of pure magic." },
];

export function Milestones() {
  return (
    <section id="memories" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">Milestones</p>
          <h2 className="text-gradient text-5xl font-light sm:text-6xl">Tiny Moments, Forever Memories</h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass group relative overflow-hidden rounded-3xl p-8 transition-shadow hover:shadow-[0_20px_60px_oklch(0.72_0.25_310/0.3)]"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition group-hover:bg-primary/40" />
              <m.icon className="mb-5 h-8 w-8 text-primary" style={{ filter: "drop-shadow(0 0 10px oklch(0.72 0.25 310 / 0.8))" }} />
              <p className="mb-1 text-xs uppercase tracking-widest text-accent">{m.date}</p>
              <h3 className="mb-2 text-2xl">{m.title}</h3>
              <p className="text-sm text-muted-foreground">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
