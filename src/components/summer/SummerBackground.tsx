"use client";

import { cn } from "@/lib/utils";
import { PollenParticles } from "@/components/summer/PollenParticles";

interface SummerBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  intensity?: "subtle" | "medium" | "strong";
}

/**
 * Day: Finnish midsummer afternoon sky (blue fading to a warm horizon).
 * Night: nightless-night gradient (deep navy through steel blue to amber).
 * Pollen / fireflies float in the lower band in both modes.
 */
export function SummerBackground({
  className,
  children,
  intensity = "subtle",
}: SummerBackgroundProps) {
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

      {/* Drifting pollen by day, hovering fireflies by night */}
      <PollenParticles />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
