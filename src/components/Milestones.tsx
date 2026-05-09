import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import baby11 from "@/assets/baby11.jpg";
import baby12 from "@/assets/baby12.jpg";
import baby13 from "@/assets/baby13.jpg";
import baby14 from "@/assets/baby14.jpg";


const items = [
  { image: baby12, date: "1st Month", title: "Tiny Wonders", desc: "Our first month together." },
  { image: baby11, date: "2nd Month", title: "Growing Fast", desc: "Every day is a new discovery." },
  { image: baby14, date: "3rd Month", title: "Sweet Moments", desc: "Capturing the little things." },
  { image: baby13, date: "4th Month", title: "Pure Joy", desc: "Four months of infinite love." },
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
          <h2 className="text-gradient text-5xl font-light sm:text-6xl">Tiny Moments, Forever Memories</h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
              {m.image && (
                <div className="mb-5 h-48 w-full overflow-hidden rounded-xl">
                  <img src={m.image} alt={m.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              )}
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
