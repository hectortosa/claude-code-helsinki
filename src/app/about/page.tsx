import Link from "next/link";
import { SITE_CONFIG } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the Claude Code Community Helsinki - an official Anthropic initiative",
};

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-claude-text dark:text-white mb-4">
            About the Community
          </h1>
          <p className="text-claude-text/60 dark:text-white/60 text-lg">
            An official Anthropic initiative for the Nordic AI community
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10 mb-8">
            <h2 className="text-2xl font-bold text-claude-text dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed">
              The Claude Code Community Helsinki brings together creators,
              builders, and professionals to facilitate the exchange of
              knowledge, tips, and ways of working with AI-assisted development.
              We share findings, demonstrate projects, network, and learn from
              each other.
            </p>
          </div>

          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10 mb-8">
            <h2 className="text-2xl font-bold text-claude-text dark:text-white mb-4">
              Supported by Anthropic
            </h2>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed mb-4">
              This community is an official initiative supported by{" "}
              <a
                href={SITE_CONFIG.links.anthropic}
                target="_blank"
                rel="noopener noreferrer"
                className="text-claude-coral hover:text-claude-coral-dark"
              >
                Anthropic
              </a>
              , the AI safety company behind Claude. We work closely with
              Anthropic to bring the latest updates, best practices, and
              resources to our community members.
            </p>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed">
              As part of the global Claude Code community network, we connect
              developers in Helsinki and the Nordic region with the broader
              ecosystem of Claude users and builders worldwide. Discover other
              communities and leaders at{" "}
              <a
                href="https://clauders.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-claude-coral hover:text-claude-coral-dark"
              >
                clauders.com
              </a>
              .
            </p>
          </div>

          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10 mb-8">
            <h2 className="text-2xl font-bold text-claude-text dark:text-white mb-4">
              Part of a Global Network
            </h2>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed mb-4">
              Helsinki is one of 39+ cities worldwide with active Claude Code
              communities. We&apos;re connected through{" "}
              <a
                href="https://clauders.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-claude-coral hover:text-claude-coral-dark"
              >
                Clauders
              </a>
              , a global directory of community leaders and events.
            </p>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed">
              Whether you&apos;re traveling or looking to connect with other
              communities, you can find Claude Code meetups and organizers
              around the world.
            </p>
          </div>

          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10 mb-8">
            <h2 className="text-2xl font-bold text-claude-text dark:text-white mb-4">
              What We Do
            </h2>
            <ul className="space-y-4 text-claude-text/70 dark:text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-claude-coral mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  <strong>Host meetups and events</strong> - Regular gatherings
                  with presentations, demos, and discussions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-claude-coral mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  <strong>Share knowledge</strong> - Tips, workflows, and best
                  practices for AI-assisted development
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-claude-coral mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  <strong>Showcase demos</strong> - See what community members
                  are building with Claude
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-claude-coral mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  <strong>Facilitate networking</strong> - Connect with fellow
                  developers, designers, and AI enthusiasts
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <h2 className="text-2xl font-bold text-claude-text dark:text-white mb-4">
              Location
            </h2>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed mb-4">
              We&apos;re based in Helsinki, Finland 🇫🇮 and welcome members from
              across the Nordic region. Our events are typically held in
              Helsinki, with some virtual options available.
            </p>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed">
              Whether you&apos;re a seasoned developer, a curious beginner, or
              someone interested in the future of AI-assisted development,
              you&apos;re welcome to join our community.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/join" className="btn-primary text-lg px-8 py-4">
            Join the Community
          </Link>
        </div>
      </div>
    </section>
  );
}
