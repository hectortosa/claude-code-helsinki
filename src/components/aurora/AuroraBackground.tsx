"use client";

import { cn } from "@/lib/utils";
import { PetalParticles } from "@/components/petals/PetalParticles";

interface AuroraBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  intensity?: "subtle" | "medium" | "strong";
}

export function AuroraBackground({
  className,
  children,
  intensity = "subtle",
}: AuroraBackgroundProps) {
  const intensityClasses = {
    subtle: "opacity-40",
    medium: "opacity-60",
    strong: "opacity-80",
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Summer sky background - light mode only */}
      <div
        className="absolute inset-0 summer-sky dark:hidden"
        aria-hidden="true"
      />

      {/* Floating petals / fireflies - both modes */}
      <PetalParticles />

      {/* Midnight sun gradient - dark mode only */}
      <div
        className={cn(
          "absolute inset-0 midnight-sun-gradient hidden dark:block",
          intensityClasses[intensity]
        )}
        aria-hidden="true"
      />

      {/* Soft horizon shimmer - dark mode only */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-midnight-amber/15 via-transparent to-transparent animate-pulse hidden dark:block"
        style={{ animationDuration: "10s" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
