import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description:
    "Community guidelines for the Claude Code Community Helsinki - creating a welcoming space for everyone",
};

export default function GuidelinesPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-claude-text dark:text-white mb-4">
            Community Guidelines
          </h1>
          <p className="text-claude-text/60 dark:text-white/60 text-lg">
            Creating a welcoming space where everyone can learn, share, and grow
            together
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-claude-coral/5 dark:bg-claude-coral/10 border border-claude-coral/20 p-8 rounded-xl mb-12">
          <p className="text-claude-text/80 dark:text-white/80 leading-relaxed">
            The Claude Code Community Helsinki is built on mutual respect,
            curiosity, and a shared passion for AI-assisted development. These
            guidelines help us maintain a space where everyone feels welcome to
            participate, ask questions, and share their knowledge - regardless
            of their experience level.
          </p>
        </div>

        {/* Guidelines Sections */}
        <div className="space-y-8">
          {/* Be Welcoming */}
          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-claude-coral/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-xl">👋</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-claude-text dark:text-white mb-3">
                  Be Welcoming & Inclusive
                </h2>
                <p className="text-claude-text/70 dark:text-white/70 leading-relaxed mb-4">
                  We&apos;re a community of diverse backgrounds, skill levels,
                  and perspectives. Whether you&apos;re a seasoned developer or
                  just getting started with AI tools, you belong here.
                </p>
                <ul className="space-y-2 text-claude-text/70 dark:text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Welcome newcomers and help them feel comfortable
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Be patient with questions - we all started somewhere
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Respect different learning styles and paces
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Celebrate diversity in ideas, approaches, and backgrounds
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Be Respectful */}
          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-claude-coral/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-xl">🤝</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-claude-text dark:text-white mb-3">
                  Be Respectful & Kind
                </h2>
                <p className="text-claude-text/70 dark:text-white/70 leading-relaxed mb-4">
                  Treat everyone with respect. Disagreements are fine -
                  disrespect is not. We can discuss ideas critically while still
                  being kind to each other.
                </p>
                <ul className="space-y-2 text-claude-text/70 dark:text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Critique ideas, not people
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      No harassment, discrimination, or personal attacks
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Listen actively and give others space to speak
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Assume good intentions - most misunderstandings aren&apos;t
                      intentional
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Share & Learn */}
          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-claude-coral/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-xl">💡</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-claude-text dark:text-white mb-3">
                  Share Knowledge Generously
                </h2>
                <p className="text-claude-text/70 dark:text-white/70 leading-relaxed mb-4">
                  This community thrives when members share their discoveries,
                  tips, and learnings. Don&apos;t be shy about presenting or
                  asking questions!
                </p>
                <ul className="space-y-2 text-claude-text/70 dark:text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Share your workflows, prompts, and findings
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Credit others when building on their work
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Ask questions openly - others probably have the same ones
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Give constructive feedback that helps others improve
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Responsible AI Use */}
          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-claude-coral/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-claude-text dark:text-white mb-3">
                  Use AI Responsibly
                </h2>
                <p className="text-claude-text/70 dark:text-white/70 leading-relaxed mb-4">
                  As a community focused on AI development, we have a
                  responsibility to promote ethical and thoughtful use of AI
                  tools.
                </p>
                <ul className="space-y-2 text-claude-text/70 dark:text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Follow{" "}
                      <a
                        href="https://www.anthropic.com/policies/aup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-claude-coral hover:text-claude-coral-dark"
                      >
                        Anthropic&apos;s Acceptable Use Policy
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Don&apos;t share prompts designed to bypass safety measures or
                      generate harmful content
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Be transparent about AI-generated content when relevant
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Discuss AI limitations and risks openly and honestly
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Consider the broader impact of the tools and applications
                      we build
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Events */}
          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-claude-coral/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-xl">📅</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-claude-text dark:text-white mb-3">
                  At Events
                </h2>
                <p className="text-claude-text/70 dark:text-white/70 leading-relaxed mb-4">
                  Our meetups are spaces for learning and connection. Help us
                  make them great for everyone.
                </p>
                <ul className="space-y-2 text-claude-text/70 dark:text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      RSVP accurately so we can plan accordingly
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Be present - minimize distractions during presentations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Respect speakers&apos; time and save detailed questions for
                      Q&A or after
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Ask before photographing or recording others
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Help clean up after events - leave spaces better than you
                      found them
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-claude-coral/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-xl">🔒</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-claude-text dark:text-white mb-3">
                  Respect Privacy
                </h2>
                <p className="text-claude-text/70 dark:text-white/70 leading-relaxed mb-4">
                  Protect your own privacy and respect others&apos; boundaries.
                </p>
                <ul className="space-y-2 text-claude-text/70 dark:text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Don&apos;t share others&apos; contact info without permission
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Keep confidential work discussions confidential
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-claude-coral mt-1">•</span>
                    <span>
                      Be mindful of what you share in photos and posts
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Handling Issues */}
        <div className="mt-12 bg-finnish-blue/5 dark:bg-finnish-blue/10 border border-finnish-blue/20 p-8 rounded-xl">
          <h2 className="text-xl font-bold text-claude-text dark:text-white mb-4">
            If Something Goes Wrong
          </h2>
          <p className="text-claude-text/70 dark:text-white/70 leading-relaxed mb-4">
            If you experience or witness behavior that violates these
            guidelines, please reach out to the community organizers. We handle
            all concerns privately and with care.
          </p>
          <p className="text-claude-text/70 dark:text-white/70 leading-relaxed mb-4">
            We address issues on a case-by-case basis, always prioritizing the
            safety and comfort of our community members. Our goal is to resolve
            concerns fairly and help everyone learn and grow.
          </p>
          <p className="text-claude-text/70 dark:text-white/70 leading-relaxed">
            Contact us through the{" "}
            <Link
              href="/join"
              className="text-claude-coral hover:text-claude-coral-dark"
            >
              contact form
            </Link>{" "}
            or speak directly with an organizer at events.
          </p>
        </div>

        {/* Closing */}
        <div className="mt-12 text-center">
          <p className="text-claude-text/60 dark:text-white/60 mb-8">
            By participating in our community, you agree to follow these
            guidelines and help us create a positive environment for everyone.
          </p>
          <Link href="/join" className="btn-primary text-lg px-8 py-4">
            Join the Community
          </Link>
        </div>
      </div>
    </section>
  );
}
