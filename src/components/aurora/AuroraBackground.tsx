"use client";

import { cn } from "@/lib/utils";
import { SnowParticles } from "@/components/snow/SnowParticles";

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
    subtle: "opacity-30",
    medium: "opacity-50",
    strong: "opacity-70",
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Winter sky background - light mode only */}
      <div
        className="absolute inset-0 winter-sky dark:hidden"
        aria-hidden="true"
      />

      {/* Snow particles - light mode only */}
      <SnowParticles />

      {/* Aurora gradient layers - dark mode only */}
      <div
        className={cn(
          "absolute inset-0 aurora-gradient hidden dark:block",
          intensityClasses[intensity]
        )}
        aria-hidden="true"
      />

      {/* Additional aurora shimmer - dark mode only */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-aurora-cyan/10 to-transparent animate-pulse hidden dark:block"
        style={{ animationDuration: "8s" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
