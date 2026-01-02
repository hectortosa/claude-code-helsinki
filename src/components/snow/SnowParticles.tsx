"use client";

interface Snowflake {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

// Generate snowflakes with varied properties
function generateSnowflakes(count: number): Snowflake[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100, // percentage across viewport
    size: 2 + Math.random() * 3, // 2-5px
    duration: 12 + Math.random() * 10, // 12-22s fall time
    delay: Math.random() * 10, // staggered start
    opacity: 0.4 + Math.random() * 0.4, // 0.4-0.8 opacity
  }));
}

const snowflakes = generateSnowflakes(35);

export function SnowParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none dark:hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white animate-snowfall"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            boxShadow: `0 0 ${flake.size * 2}px rgba(255, 255, 255, 0.8)`,
          }}
        />
      ))}
    </div>
  );
}
