"use client";

import { CSSProperties, useState, useEffect } from "react";

interface Petal {
  id: number;
  top: number;
  left: number;
  size: number;
  dayDuration: number;
  nightDuration: number;
  delay: number;
}

function generatePetals(count: number): Petal[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 1.5 + Math.random() * 1.8,
    dayDuration: 28 + Math.random() * 22,
    nightDuration: 4 + Math.random() * 5,
    delay: -Math.random() * 30,
  }));
}

export function PetalParticles() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPetals(generatePetals(45));
  }, []);

  if (petals.length === 0) {
    return null;
  }

  return (
    <div
      className="absolute inset-x-0 top-1/2 bottom-16 dark:top-[72%] dark:bottom-12 overflow-hidden pointer-events-none [--petal-color:#fff5dc] [--petal-glow:rgba(255,232,196,0.6)] dark:[--petal-color:#ffd49a] dark:[--petal-glow:rgba(255,196,140,0.85)]"
    >
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute rounded-full animate-petaldrift"
          style={{
            top: `${petal.top}%`,
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDelay: `${petal.delay}s`,
            backgroundColor: "var(--petal-color)",
            boxShadow: `0 0 ${petal.size * 3}px var(--petal-glow)`,
            "--day-dur": `${petal.dayDuration}s`,
            "--night-dur": `${petal.nightDuration}s`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
