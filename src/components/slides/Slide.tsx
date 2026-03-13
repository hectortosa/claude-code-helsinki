"use client";

import { cn } from "@/lib/utils";

interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

export function Slide({ children, className }: SlideProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center max-w-5xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
