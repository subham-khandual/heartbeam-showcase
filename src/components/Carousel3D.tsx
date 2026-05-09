import { useEffect, useRef, useState } from "react";
import baby1 from "@/assets/baby1.jpg";
import baby2 from "@/assets/baby2.jpg";
import baby3 from "@/assets/baby3.jpg";
import baby4 from "@/assets/baby4.jpg";
import baby5 from "@/assets/baby5.jpg";
import baby6 from "@/assets/baby6.jpg";
import baby7 from "@/assets/baby7.jpg";
import baby8 from "@/assets/baby8.jpg";
import baby9 from "@/assets/baby9.jpg";
import baby10 from "@/assets/baby10.jpg";
import baby11 from "@/assets/baby11.jpg";
import baby12 from "@/assets/baby12.jpg";
import baby13 from "@/assets/baby13.jpg";
import baby14 from "@/assets/baby14.jpg";

const images = [baby1, baby2, baby3, baby4, baby5, baby6, baby7, baby8, baby9, baby10, baby11, baby12, baby13, baby14];

type Props = { onSelect: (src: string) => void };

export function Carousel3D({ onSelect }: Props) {
  const [angle, setAngle] = useState(0);
  const [paused, setPaused] = useState(false);
  const raf = useRef<number | null>(null);
  const last = useRef<number>(0);

  useEffect(() => {
    const tick = (t: number) => {
      if (last.current === 0) last.current = t;
      const dt = t - last.current;
      last.current = t;
      if (!paused) setAngle((a) => a + dt * 0.012);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      last.current = 0;
    };
  }, [paused]);

  const count = images.length;
  const step = 360 / count;
  // responsive radius
  const [radius, setRadius] = useState(340);
  useEffect(() => {
    const update = () => setRadius(window.innerWidth < 640 ? 200 : window.innerWidth < 1024 ? 280 : 360);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      className="perspective-1200 relative mx-auto flex h-[420px] w-full items-center justify-center sm:h-[520px] lg:h-[620px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="preserve-3d relative h-full w-full"
        style={{ transform: `rotateX(-8deg) rotateY(${angle}deg)`, transition: "transform 0.05s linear" }}
      >
        {images.map((src, i) => {
          const rot = i * step;
          return (
            <button
              key={i}
              onClick={() => onSelect(src)}
              className="preserve-3d group absolute left-1/2 top-1/2 h-56 w-40 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-2xl sm:h-72 sm:w-52 lg:h-80 lg:w-60"
              style={{ transform: `rotateY(${rot}deg) translateZ(${radius}px)` }}
            >
              <div className="neon-border relative h-full w-full overflow-hidden rounded-2xl bg-card transition-all duration-500 group-hover:scale-110">
                <img
                  src={src}
                  alt={`Baby moment ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-60 transition group-hover:opacity-30" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ boxShadow: "inset 0 0 60px oklch(0.72 0.25 310 / 0.6)" }} />
              </div>
              {/* reflection */}
              <div
                className="absolute left-0 top-full h-16 w-full overflow-hidden rounded-2xl opacity-30"
                style={{
                  transform: "scaleY(-1)",
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { images as galleryImages };
