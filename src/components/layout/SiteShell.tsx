"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSlides = pathname.startsWith("/slides");

  useEffect(() => {
    if (isSlides) {
      document.documentElement.classList.add("dark");
    }
  }, [isSlides]);

  if (isSlides) {
    return (
      <body className="font-sans overflow-hidden bg-claude-dark">
        {children}
      </body>
    );
  }

  return (
    <body className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </body>
  );
}
