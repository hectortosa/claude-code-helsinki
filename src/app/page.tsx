import Link from "next/link";
import { Terminal } from "@/components/terminal/Terminal";
import { AuroraBackground } from "@/components/aurora/AuroraBackground";
import { LumaCalendar } from "@/components/luma/LumaCalendar";
import { ForestDivider } from "@/components/forest/ForestDivider";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <AuroraBackground intensity="subtle" className="wave-divider">
        <section className="container mx-auto px-4 py-20 md:py-32 pb-40">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-claude-coral/10 text-claude-coral text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-claude-coral animate-pulse" />
              Official Anthropic Community
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-claude-text dark:text-white mb-6 text-balance">
              Claude Code
              <span className="block text-claude-coral">Helsinki</span>
            </h1>

            {/* Value Proposition */}
            <p className="text-xl md:text-2xl text-claude-text/70 dark:text-white/70 mb-4 font-medium">
              Connect. Build. Share.
            </p>
            <p className="text-lg text-claude-text/60 dark:text-white/60 max-w-2xl mx-auto mb-12">
              Bringing together creators, builders, and professionals to
              exchange knowledge, share discoveries, and push the boundaries of
              AI-assisted development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join" className="btn-primary text-lg px-8 py-4">
                Join the Community
              </Link>
              <Link href="/events" className="btn-secondary text-lg px-8 py-4">
                View Events
              </Link>
            </div>
          </div>
        </section>
        <ForestDivider />
      </AuroraBackground>

      {/* Terminal Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-claude-text dark:text-white mb-4">
              Terminal
            </h2>
            <p className="text-claude-text/60 dark:text-white/60">
              Join the community the Claude Code way - type{" "}
              <code className="px-2 py-1 bg-terminal-bg text-terminal-green rounded text-sm font-mono">
                join
              </code>{" "}
              to request access to the community or{" "}
              <code className="px-2 py-1 bg-terminal-bg text-terminal-green rounded text-sm font-mono">
                help
              </code>{" "}
              for other commands
            </p>
          </div>
          <Terminal />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white/50 dark:bg-transparent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-claude-text dark:text-white text-center mb-12">
              What We Do
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Knowledge Exchange */}
              <div className="bg-white dark:bg-terminal-bg p-6 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
                <div className="w-12 h-12 bg-claude-coral/10 rounded-lg flex items-center justify-center mb-4">
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-claude-text dark:text-white mb-2">
                  Knowledge Exchange
                </h3>
                <p className="text-claude-text/60 dark:text-white/60">
                  Share tips, workflows, and best practices for AI-assisted
                  development with Claude Code.
                </p>
              </div>

              {/* Demos & Presentations */}
              <div className="bg-white dark:bg-terminal-bg p-6 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
                <div className="w-12 h-12 bg-claude-coral/10 rounded-lg flex items-center justify-center mb-4">
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
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-claude-text dark:text-white mb-2">
                  Demos & Talks
                </h3>
                <p className="text-claude-text/60 dark:text-white/60">
                  Watch live demos, presentations, and learn from community
                  members building amazing things.
                </p>
              </div>

              {/* Networking */}
              <div className="bg-white dark:bg-terminal-bg p-6 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
                <div className="w-12 h-12 bg-claude-coral/10 rounded-lg flex items-center justify-center mb-4">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-claude-text dark:text-white mb-2">
                  Networking
                </h3>
                <p className="text-claude-text/60 dark:text-white/60">
                  Connect with fellow developers, designers, and AI enthusiasts
                  in Helsinki and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-claude-text dark:text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-claude-text/60 dark:text-white/60">
              Join us at our next meetup - register on Luma to save your spot
            </p>
          </div>
          <LumaCalendar />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-claude-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Get notified about upcoming events, receive community updates, and
            connect with fellow Claude enthusiasts in Helsinki.
          </p>
          <Link
            href="/join"
            className="inline-flex items-center justify-center px-8 py-4 bg-claude-coral text-white font-medium rounded-lg hover:bg-claude-coral-dark transition-colors text-lg"
          >
            Join the Community
          </Link>
        </div>
      </section>
    </>
  );
}
