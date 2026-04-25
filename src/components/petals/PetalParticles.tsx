"use client";

import { useState, useEffect } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function generatePetals(count: number): Petal[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 3 + Math.random() * 4,
    duration: 16 + Math.random() * 14,
    delay: Math.random() * 12,
    opacity: 0.45 + Math.random() * 0.4,
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
      className="absolute inset-0 overflow-hidden pointer-events-none [--petal-color:#fff5dc] [--petal-glow:rgba(255,232,196,0.7)] dark:[--petal-color:#ffc890] dark:[--petal-glow:rgba(255,180,120,0.8)]"
    >
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute rounded-full animate-petalfall"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            opacity: petal.opacity,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            backgroundColor: "var(--petal-color)",
            boxShadow: `0 0 ${petal.size * 2.5}px var(--petal-glow)`,
          }}
        />
      ))}
    </div>
  );
}
