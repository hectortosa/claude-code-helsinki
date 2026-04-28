"use client";

import { useState, useEffect, useCallback, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AuroraBackground } from "@/components/aurora/AuroraBackground";
import { ForestDivider } from "@/components/forest/ForestDivider";
import { SummerBackground } from "@/components/summer/SummerBackground";
import { SummerForestDivider } from "@/components/summer/SummerForestDivider";

interface PresentationProps {
  slides: ReactNode[];
  /** Visual theme. Defaults to "winter" so existing decks (meetup #2) stay
   * on the original aurora + snow look. */
  season?: "winter" | "summer";
}

export function Presentation({ slides, season = "winter" }: PresentationProps) {
  const Background = season === "summer" ? SummerBackground : AuroraBackground;
  const Divider = season === "summer" ? SummerForestDivider : ForestDivider;
  // Always start at slide 0 to keep server and client renders identical.
  // The URL hash is applied after hydration via the effect below.
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const n = parseInt(hash, 10);
    if (!isNaN(n) && n >= 1 && n <= total) {
      setCurrent(n - 1);
    }
  }, [total]);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, total - 1));
      setCurrent(clamped);
      window.history.replaceState(null, "", `#${clamped + 1}`);
    },
    [total]
  );

  const next = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Persistent themed background */}
      <Background intensity="medium" className="absolute inset-0">
        <div className="h-screen" />
      </Background>

      {/* Slide content layer - only this transitions */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 z-10 flex items-center justify-center px-12 pb-24 transition-opacity duration-500 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            pointerEvents: i === current ? "auto" : "none",
          }}
        >
          {slide}
        </div>
      ))}

      {/* Persistent forest at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <Divider />
      </div>

      {/* Navigation arrows */}
      {current > 0 && (
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/60 hover:text-white"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>
      )}
      {current < total - 1 && (
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/60 hover:text-white"
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Slide counter */}
      <div className="absolute bottom-4 right-6 z-50 text-white/40 text-sm font-mono">
        {current + 1} / {total}
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-claude-coral w-6"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
