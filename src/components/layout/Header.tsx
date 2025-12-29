"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-claude-text/10 dark:border-white/10 bg-claude-cream/80 dark:bg-claude-dark/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold text-claude-coral">/</span>
            <span className="font-semibold text-claude-text dark:text-white group-hover:text-claude-coral transition-colors">
              Claude Code
              <span className="text-claude-text/60 dark:text-white/60 ml-1">Helsinki</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-claude-text/80 dark:text-white/80 hover:text-claude-coral transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/join" className="btn-primary text-sm">
              Join Community
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-claude-text dark:text-white hover:text-claude-coral transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col space-y-4 pt-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-claude-text/80 dark:text-white/80 hover:text-claude-coral transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/join"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary text-sm text-center"
            >
              Join Community
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
