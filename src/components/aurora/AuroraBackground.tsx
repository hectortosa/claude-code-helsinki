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
    subtle: "opacity-80",
    medium: "opacity-90",
    strong: "opacity-100",
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Summer sky - light mode only */}
      <div
        className="absolute inset-0 summer-sky dark:hidden"
        aria-hidden="true"
      />

      {/* Finnish summer night sky - dark mode only */}
      <div
        className={cn(
          "absolute inset-0 midnight-sun-gradient hidden dark:block",
          intensityClasses[intensity]
        )}
        aria-hidden="true"
      />

      {/* Drifting pollen / fireflies - rendered above the sky in both modes */}
      <PetalParticles />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
