import { LumaCalendar } from "@/components/luma/LumaCalendar";
import { LUMA_CONFIG } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming and past events from the Claude Code Community Helsinki",
};

export default function EventsPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-claude-text dark:text-white mb-4">Events</h1>
          <p className="text-claude-text/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
            Join us at our meetups, workshops, and community gatherings. Register
            on Luma to save your spot.
          </p>
        </div>

        {/* Luma Calendar */}
        <div className="mb-16">
          <LumaCalendar />
        </div>

        {/* Event Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-terminal-bg p-6 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <h3 className="text-xl font-semibold text-claude-text dark:text-white mb-3">
              Meetups
            </h3>
            <p className="text-claude-text/60 dark:text-white/60">
              Regular community gatherings with presentations, demos, and
              networking. Usually held monthly in Helsinki.
            </p>
          </div>
          <div className="bg-white dark:bg-terminal-bg p-6 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <h3 className="text-xl font-semibold text-claude-text dark:text-white mb-3">
              Workshops
            </h3>
            <p className="text-claude-text/60 dark:text-white/60">
              Hands-on sessions diving deep into specific topics like prompt
              engineering, Claude Code workflows, and AI development.
            </p>
          </div>
        </div>

        {/* Past Events Note */}
        <div className="bg-claude-cream/50 dark:bg-terminal-bg p-8 rounded-xl text-center dark:border dark:border-white/10">
          <h3 className="text-xl font-semibold text-claude-text dark:text-white mb-2">
            Looking for Past Events?
          </h3>
          <p className="text-claude-text/60 dark:text-white/60 mb-4">
            Check out recordings, presentations, and resources from our previous
            meetups.
          </p>
          <a
            href={`${LUMA_CONFIG.calendarUrl}?k=c&period=past`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-claude-coral hover:text-claude-coral-dark font-medium transition-colors"
          >
            View past events on Luma →
          </a>
        </div>
      </div>
    </section>
  );
}
