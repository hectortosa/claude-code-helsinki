import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility for merging Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Luma calendar configuration
 */
export const LUMA_CONFIG = {
  calendarUrl: "https://lu.ma/ClaudeCommunityHelsinki",
  embedUrl: "https://lu.ma/embed/calendar/cal-9FcoJqdJCGyefXC/events",
  calendarId: "cal-9FcoJqdJCGyefXC",
};

/**
 * Site metadata configuration
 */
export const SITE_CONFIG = {
  name: "Claude Code Helsinki",
  description:
    "Connect. Build. Share. The official Anthropic community for creators, builders, and professionals in Helsinki.",
  url: "https://claude-code-helsinki.codesharegrow.net",
  ogImage: "/og-image.png",
  links: {
    luma: LUMA_CONFIG.calendarUrl,
    anthropic: "https://anthropic.com",
    claude: "https://claude.ai",
  },
};

/**
 * Navigation items
 */
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
] as const;
