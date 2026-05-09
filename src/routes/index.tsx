import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Particles } from "@/components/Particles";
import { FloatingHearts } from "@/components/FloatingHearts";
import { Hero } from "@/components/Hero";
import { Carousel3D } from "@/components/Carousel3D";
import { Milestones } from "@/components/Milestones";
import { Contact } from "@/components/Contact";
import { Modal } from "@/components/Modal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Little Star — A Baby Photo Journey" },
      { name: "description", content: "A magical 3D photo gallery of our little star — every smile, giggle, and tiny milestone captured in light." },
      { property: "og:title", content: "My Little Star — A Baby Photo Journey" },
      { property: "og:description", content: "A cinematic 3D gallery of precious baby moments." },
    ],
  }),
  component: Index,
});

function Index() {
  const [preview, setPreview] = useState<string | null>(null);
  return (
    <>
      <Loader />
      <Particles />
      <FloatingHearts />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <section id="gallery" className="relative px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">Tiny Moments, Forever Memories</p>
            <h2 className="text-gradient text-5xl font-light sm:text-6xl">A Universe of Smiles</h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
              Hover to pause · Click any photo for a closer look
            </p>
          </motion.div>
          <Carousel3D onSelect={setPreview} />
        </section>
        <Milestones />
        <Contact />
      </main>
      <Modal src={preview} onClose={() => setPreview(null)} />
    </>
  );
}
