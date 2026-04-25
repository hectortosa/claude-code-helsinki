"use client";

import { useState, useEffect } from "react";

interface Petal {
  id: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function generatePetals(count: number): Petal[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    size: 1.5 + Math.random() * 1.8,
    duration: 28 + Math.random() * 22,
    delay: -Math.random() * 30,
    opacity: 0.4 + Math.random() * 0.4,
  }));
}

export function PetalParticles() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPetals(generatePetals(40));
  }, []);

  if (petals.length === 0) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none [--petal-color:#fff5dc] [--petal-glow:rgba(255,232,196,0.6)] dark:[--petal-color:#ffd49a] dark:[--petal-glow:rgba(255,196,140,0.7)]"
    >
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute rounded-full animate-petaldrift"
          style={{
            top: `${petal.top}%`,
            left: 0,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            opacity: petal.opacity,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            backgroundColor: "var(--petal-color)",
            boxShadow: `0 0 ${petal.size * 3}px var(--petal-glow)`,
          }}
        />
      ))}
    </div>
  );
}
