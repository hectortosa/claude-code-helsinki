"use client";

import { CSSProperties, useState, useEffect } from "react";

interface Particle {
  id: number;
  top: number;
  left: number;
  size: number;
  dayDuration: number;
  nightDuration: number;
  delay: number;
}

function generateParticles(count: number): Particle[] {
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

/**
 * Daytime: drifting birch pollen carried by a soft summer breeze.
 * Night: stationary fireflies blinking just above the tree line.
 * One component, two animations switched by the .dark class.
 */
export function PollenParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(generateParticles(45));
  }, []);

  if (particles.length === 0) {
    return null;
  }

  return (
    <div
      className="absolute inset-x-0 top-1/2 bottom-16 dark:top-[72%] dark:bottom-12 overflow-hidden pointer-events-none [--pollen-color:#fff5dc] [--pollen-glow:rgba(255,232,196,0.6)] dark:[--pollen-color:#ffd49a] dark:[--pollen-glow:rgba(255,196,140,0.85)]"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-petaldrift"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            backgroundColor: "var(--pollen-color)",
            boxShadow: `0 0 ${p.size * 3}px var(--pollen-glow)`,
            "--day-dur": `${p.dayDuration}s`,
            "--night-dur": `${p.nightDuration}s`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
