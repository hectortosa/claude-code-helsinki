"use client";

import { cn } from "@/lib/utils";

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
      {/* Aurora gradient layers */}
      <div
        className={cn(
          "absolute inset-0 aurora-gradient",
          intensityClasses[intensity]
        )}
        aria-hidden="true"
      />

      {/* Additional aurora shimmer */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-aurora-cyan/10 to-transparent animate-pulse"
        style={{ animationDuration: "8s" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
