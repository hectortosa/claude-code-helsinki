import Link from "next/link";
import { LUMA_CONFIG, SITE_CONFIG } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "Videos, presentations, and resources from the Claude Code Community Helsinki",
};

export default function ResourcesPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-claude-text mb-4">Resources</h1>
          <p className="text-claude-text/60 text-lg">
            Videos, presentations, and resources from our community events
          </p>
        </div>

        {/* Coming Soon */}
        <div className="bg-white p-12 rounded-xl shadow-sm border border-claude-text/5 text-center mb-12">
          <div className="w-20 h-20 bg-claude-coral/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-claude-coral"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-claude-text mb-4">
            Coming Soon
          </h2>
          <p className="text-claude-text/60 max-w-lg mx-auto">
            We&apos;re working on adding videos, presentations, and
            transcriptions from our past community meetups. Check back soon!
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Luma Events */}
          <a
            href={`${LUMA_CONFIG.calendarUrl}?k=c&period=past`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow-sm border border-claude-text/5 hover:border-claude-coral/30 transition-colors group"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-claude-coral/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-claude-coral"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-claude-text group-hover:text-claude-coral transition-colors">
                Past Events on Luma
              </h3>
            </div>
            <p className="text-claude-text/60">
              View details and recaps from our previous meetups and workshops.
            </p>
          </a>

          {/* Claude Docs */}
          <a
            href="https://docs.anthropic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow-sm border border-claude-text/5 hover:border-claude-coral/30 transition-colors group"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-claude-coral/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-claude-coral"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-claude-text group-hover:text-claude-coral transition-colors">
                Claude Documentation
              </h3>
            </div>
            <p className="text-claude-text/60">
              Official Anthropic documentation for Claude and the API.
            </p>
          </a>

          {/* Claude Code */}
          <a
            href="https://claude.ai/code"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow-sm border border-claude-text/5 hover:border-claude-coral/30 transition-colors group"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-claude-coral/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-claude-coral"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-claude-text group-hover:text-claude-coral transition-colors">
                Claude Code
              </h3>
            </div>
            <p className="text-claude-text/60">
              Learn more about Claude Code and AI-assisted development.
            </p>
          </a>

          {/* Anthropic */}
          <a
            href={SITE_CONFIG.links.anthropic}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow-sm border border-claude-text/5 hover:border-claude-coral/30 transition-colors group"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-claude-coral/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-claude-coral"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-claude-text group-hover:text-claude-coral transition-colors">
                Anthropic
              </h3>
            </div>
            <p className="text-claude-text/60">
              Visit Anthropic&apos;s website to learn about Claude and AI safety.
            </p>
          </a>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-claude-text/60 mb-4">
            Want to contribute a presentation or demo?
          </p>
          <Link href="/join" className="btn-secondary">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
