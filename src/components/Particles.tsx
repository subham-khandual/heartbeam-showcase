import { useMemo } from "react";

export function Particles() {
  const dots = useMemo(
    () => Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 12,
      hue: Math.random() > 0.5 ? "310" : "220",
    })),
    []
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute bottom-[-20px] rounded-full"
          style={{
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            background: `oklch(0.85 0.2 ${d.hue})`,
            boxShadow: `0 0 ${d.size * 4}px oklch(0.75 0.25 ${d.hue} / 0.9)`,
            animation: `float-up ${d.duration}s linear ${d.delay}s infinite`,
          }}
        />
      ))}
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={`tw-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: 2,
            height: 2,
            animation: `twinkle ${2 + Math.random() * 4}s ease-in-out ${Math.random() * 5}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
