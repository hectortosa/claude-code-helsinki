import Link from "next/link";
import { LUMA_CONFIG, SITE_CONFIG } from "@/lib/utils";
import { Presentation, Users, ExternalLink, Linkedin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "Videos, presentations, and resources from Claude Code Helsinki",
};

interface MeetupSpeaker {
  name: string;
  role: string;
  talk: string;
  slidesUrl?: string;
  linkedin?: string;
}

interface MeetupPresentation {
  date: string;
  title: string;
  slidesUrl: string;
  speakers: MeetupSpeaker[];
}

const MEETUP_PRESENTATIONS: MeetupPresentation[] = [
  {
    date: "April 27, 2026",
    title: "Meetup #3",
    slidesUrl: "/slides/20260427",
    speakers: [
      {
        name: "Alejandra Soni",
        role: "CCO, Groweo",
        talk: "Asking Business Questions of Your Own Data",
        linkedin: "https://www.linkedin.com/in/alejandra-soni/",
      },
      {
        name: "Anna Ursin",
        role: "Fractional GTM lead, B2B SaaS/tech",
        talk: "Building a Business Operating System",
        linkedin: "https://www.linkedin.com/in/ursinanna/",
      },
      {
        name: "Sohvi Silius",
        role: "User Insights Lead, Yousician",
        talk: "How Claude Cowork Turned Me from a Casual AI User into a Workflow Creator",
        linkedin: "https://www.linkedin.com/in/sohvisilius/",
      },
      {
        name: "Tapio Haaja",
        role: "CCO, Intentface",
        talk: "My Sales Team Is Me and Claude",
        linkedin: "https://www.linkedin.com/in/tapiohaaja/",
      },
    ],
  },
  {
    date: "March 5, 2026",
    title: "Meetup #2",
    slidesUrl: "/slides/20260305",
    speakers: [
      {
        name: "Vijay Kodam",
        role: "Principal Engineer, Nokia",
        talk: "skill-up: How to Make Claude Work Your Way",
        slidesUrl: "/presentations/20260305/skill-up-presentation.pdf",
        linkedin: "https://www.linkedin.com/in/vijaykodam/",
      },
      {
        name: "Luke Otwell",
        role: "Software Engineer, Softlandia",
        talk: "OpenClaw vs. Claude Code: The Wrong Tool for the Right Job",
        slidesUrl: "/presentations/20260305/claw-vs-claude.pdf",
        linkedin: "https://www.linkedin.com/in/luke-otwell/",
      },
      {
        name: "Arsalan Shakil",
        role: "AI Research Engineer, F-Secure",
        talk: "Solving Context Rot: Spec-Driven Development with GSD",
        slidesUrl: "/presentations/20260305/solving-context-rot-gsd.html",
        linkedin: "https://www.linkedin.com/in/arsalan-shakil/",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-claude-text dark:text-white mb-4">Resources</h1>
          <p className="text-claude-text/60 dark:text-white/60 text-lg">
            Videos, presentations, and resources from our community events
          </p>
        </div>

        {/* Meetup Presentations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-claude-text dark:text-white mb-8 flex items-center gap-3">
            <Presentation className="w-6 h-6 text-claude-coral" />
            Presentations
          </h2>
          <div className="space-y-6">
            {MEETUP_PRESENTATIONS.map((meetup) => (
              <div
                key={meetup.date}
                className="bg-white dark:bg-terminal-bg rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10 overflow-hidden"
              >
                {/* Meetup header */}
                <div className="px-6 py-5 border-b border-claude-text/5 dark:border-white/10 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-claude-text dark:text-white">
                      {meetup.title}
                    </h3>
                    <p className="text-sm text-claude-text/50 dark:text-white/50 font-mono mt-1">
                      {meetup.date}
                    </p>
                  </div>
                  <Link
                    href={meetup.slidesUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-claude-coral border border-claude-coral/30 rounded-lg hover:bg-claude-coral hover:text-white transition-colors"
                  >
                    <Presentation className="w-4 h-4" />
                    View slides
                  </Link>
                </div>

                {/* Speaker talks */}
                <div className="divide-y divide-claude-text/5 dark:divide-white/5">
                  {meetup.speakers.map((speaker) => (
                    <div
                      key={speaker.name}
                      className="px-6 py-4 flex items-start justify-between gap-4 group"
                    >
                      <div className="min-w-0">
                        <p className="text-claude-text dark:text-white font-medium">
                          {speaker.talk}
                        </p>
                        <p className="text-sm text-claude-text/50 dark:text-white/50 mt-1 flex items-center gap-1.5">
                          {speaker.linkedin ? (
                            <a
                              href={speaker.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 hover:text-[#0A66C2] transition-colors"
                            >
                              <Linkedin className="w-3 h-3 shrink-0" />
                              {speaker.name}
                            </a>
                          ) : (
                            <span>{speaker.name}</span>
                          )}
                          <span className="text-claude-text/30 dark:text-white/30">
                            &mdash; {speaker.role}
                          </span>
                        </p>
                      </div>
                      {speaker.slidesUrl && (
                        <a
                          href={speaker.slidesUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 text-claude-text/30 dark:text-white/30 hover:text-claude-coral transition-colors mt-1"
                          title={`Download ${speaker.name}'s slides`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Luma Events */}
          <a
            href={`${LUMA_CONFIG.calendarUrl}?k=c&period=past`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-terminal-bg p-6 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10 hover:border-claude-coral/30 transition-colors group"
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
              <h3 className="text-xl font-semibold text-claude-text dark:text-white group-hover:text-claude-coral transition-colors">
                Past Events on Luma
              </h3>
            </div>
            <p className="text-claude-text/60 dark:text-white/60">
              View details and recaps from our previous meetups and workshops.
            </p>
          </a>

          {/* Claude Docs */}
          <a
            href="https://docs.anthropic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-terminal-bg p-6 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10 hover:border-claude-coral/30 transition-colors group"
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
              <h3 className="text-xl font-semibold text-claude-text dark:text-white group-hover:text-claude-coral transition-colors">
                Claude Documentation
              </h3>
            </div>
            <p className="text-claude-text/60 dark:text-white/60">
              Official Anthropic documentation for Claude and the API.
            </p>
          </a>

          {/* Claude Code */}
          <a
            href="https://claude.ai/code"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-terminal-bg p-6 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10 hover:border-claude-coral/30 transition-colors group"
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
              <h3 className="text-xl font-semibold text-claude-text dark:text-white group-hover:text-claude-coral transition-colors">
                Claude Code
              </h3>
            </div>
            <p className="text-claude-text/60 dark:text-white/60">
              Learn more about Claude Code and AI-assisted development.
            </p>
          </a>

          {/* Anthropic */}
          <a
            href={SITE_CONFIG.links.anthropic}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-terminal-bg p-6 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10 hover:border-claude-coral/30 transition-colors group"
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
              <h3 className="text-xl font-semibold text-claude-text dark:text-white group-hover:text-claude-coral transition-colors">
                Anthropic
              </h3>
            </div>
            <p className="text-claude-text/60 dark:text-white/60">
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
            Join the Community
          </Link>
        </div>
      </div>
    </section>
  );
}
