import Link from "next/link";
import { SITE_CONFIG, LUMA_CONFIG } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-claude-text/10 dark:border-white/10 bg-claude-cream dark:bg-claude-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-claude-coral">/</span>
              <span className="font-semibold text-claude-text dark:text-white">
                Claude Code
                <span className="text-claude-text/60 dark:text-white/60 ml-1">Helsinki</span>
              </span>
            </Link>
            <p className="text-claude-text/70 dark:text-white/70 max-w-md">
              Connect. Build. Share. An official Anthropic initiative bringing
              together creators, builders, and professionals in Helsinki.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-claude-text dark:text-white mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/events"
                  className="text-claude-text/70 dark:text-white/70 hover:text-claude-coral transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-claude-text/70 dark:text-white/70 hover:text-claude-coral transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-claude-text/70 dark:text-white/70 hover:text-claude-coral transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/join"
                  className="text-claude-text/70 dark:text-white/70 hover:text-claude-coral transition-colors"
                >
                  Join
                </Link>
              </li>
              <li>
                <Link
                  href="/guidelines"
                  className="text-claude-text/70 dark:text-white/70 hover:text-claude-coral transition-colors"
                >
                  Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* External */}
          <div>
            <h3 className="font-semibold text-claude-text dark:text-white mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={LUMA_CONFIG.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-claude-text/70 dark:text-white/70 hover:text-claude-coral transition-colors"
                >
                  Luma Calendar
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.links.anthropic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-claude-text/70 dark:text-white/70 hover:text-claude-coral transition-colors"
                >
                  Anthropic
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.links.claude}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-claude-text/70 dark:text-white/70 hover:text-claude-coral transition-colors"
                >
                  Claude.ai
                </a>
              </li>
              <li>
                <a
                  href="https://clauders.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-claude-text/70 dark:text-white/70 hover:text-claude-coral transition-colors"
                >
                  Global Communities
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-claude-text/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-claude-text/60 dark:text-white/60 text-sm">
            {currentYear} Claude Code Community Helsinki. Supported by
            Anthropic.
          </p>
          <div className="flex items-center gap-2 text-sm text-claude-text/60 dark:text-white/60">
            <span>Made with</span>
            <span className="text-claude-coral">Claude Code</span>
            <span>in Helsinki</span>
            <span className="text-finnish-blue">🇫🇮</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
