"use client";

import { LUMA_CONFIG } from "@/lib/utils";

interface LumaCalendarProps {
  className?: string;
}

export function LumaCalendar({ className }: LumaCalendarProps) {
  return (
    <div className={className}>
      <div className="luma-embed-container bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
          src={LUMA_CONFIG.embedUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: "1px solid #bfcbda88", borderRadius: "8px" }}
          allowFullScreen
          aria-label="Claude Code Helsinki Events Calendar"
          title="Luma Events Calendar"
        />
      </div>
      <div className="mt-4 text-center">
        <a
          href={LUMA_CONFIG.calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-claude-coral hover:text-claude-coral-dark transition-colors font-medium"
        >
          View full calendar on Luma →
        </a>
      </div>
    </div>
  );
}
