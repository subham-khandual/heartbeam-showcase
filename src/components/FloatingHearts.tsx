import { Heart } from "lucide-react";
import { useMemo } from "react";

export function FloatingHearts() {
  const hearts = useMemo(
    () => Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 12 + Math.random() * 10,
      size: 14 + Math.random() * 18,
    })),
    []
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {hearts.map((h) => (
        <Heart
          key={h.id}
          className="absolute bottom-[-30px] text-pink-400/70"
          style={{
            left: `${h.left}%`,
            width: h.size,
            height: h.size,
            filter: "drop-shadow(0 0 8px oklch(0.75 0.2 350 / 0.8))",
            animation: `float-up ${h.duration}s ease-in ${h.delay}s infinite`,
          }}
          fill="currentColor"
        />
      ))}
    </div>
  );
}
