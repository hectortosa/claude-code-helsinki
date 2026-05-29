"use client";

import { Presentation } from "@/components/slides/Presentation";
import { Slide } from "@/components/slides/Slide";
import {
  Users,
  Calendar,
  Building2,
  Sparkles,
  Newspaper,
  Mic,
  Heart,
  Shield,
  GitBranch,
  Workflow,
  ExternalLink,
  CreditCard,
  LayoutDashboard,
  Cpu,
  Briefcase,
  Rocket,
  Target,
  Terminal,
  TrendingUp,
  Linkedin,
} from "lucide-react";

const speakers = [
  {
    name: "Ivana Pesic",
    title: "Skills, Both Kinds",
    bio: "CPO at Headai",
    image: "/speakers/ivana-pesic.jpg",
    slidesUrl: "https://house11.ai/skills-both-kinds-deck.html#1",
  },
  {
    name: "Christian Möller",
    title: "From Ticket to Production: A Claude-Native Team Workflow",
    bio: "Founding AI Engineer at Nomain",
    image: "/speakers/christian-moller.jpg",
    slidesUrl: "/presentations/20260527/christian-moller.html",
  },
  {
    name: "Markus Hjort",
    title: "AI-native tech startup",
    bio: "CTO, Co-Founder at Bitmagic",
    image: "/speakers/markus-hjort.jpg",
    slidesUrl: "/presentations/20260527/markus-hjort.pdf",
  },
  {
    name: "Nimer Singh",
    title: "How Claude Made Me a 10x Researcher",
    bio: "Researcher at F-Secure",
    image: "/speakers/nimer-singh.jpg",
    slidesUrl: "/presentations/20260527/nimer-singh.html",
  },
];

const memberRoles = [
  { label: "Software Developer", value: 65 },
  { label: "Founder / Entrepreneur", value: 58 },
  { label: "Other", value: 49 },
  { label: "Designer", value: 22 },
  { label: "Product Manager", value: 19 },
  { label: "Researcher", value: 11 },
  { label: "Student", value: 6 },
];

const totalMembers = memberRoles.reduce((sum, r) => sum + r.value, 0);

export default function Meetup20260527() {
  const slides = [
    // 1. Title
    <Slide key="title">
      <div className="text-center max-w-4xl">
        <p className="text-aurora-cyan font-mono text-lg mb-4 tracking-widest uppercase">
          Meetup #4
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          Claude Code
          <span className="block gradient-text-summer">Helsinki</span>
        </h1>
        <p className="text-2xl text-white/60 font-light">May 27, 2026</p>
      </div>
    </Slide>,

    // 2. Built by all of us
    <Slide key="community">
      <div className="text-center max-w-3xl">
        <Users className="w-16 h-16 text-aurora-cyan mx-auto mb-8 opacity-80" />
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Built by <span className="gradient-text-summer">all of us</span>
        </h2>
        <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
          A community of builders, creators, and developers exploring
          AI-assisted work together in the Nordics.
        </p>
      </div>
    </Slide>,

    // 3. Hosts
    <Slide key="hosts">
      <div className="text-center max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Your <span className="gradient-text-summer">hosts</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/speakers/hector-tortosa.jpg"
              alt="Hector Tortosa"
              className="w-20 h-20 rounded-full border-2 border-white/20 mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-white mb-2">Hector Tortosa</h3>
            <p className="text-claude-coral text-sm mb-3">Organizer</p>
            <p className="text-white/60 text-sm mb-3">
              CTO &amp; Co-founder at Nomain. Builder and Claude Community
              Ambassador.
            </p>
            <a
              href="https://www.linkedin.com/in/htortosa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/40 hover:text-claude-coral transition-colors text-xs"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/speakers/glafira-privalova.jpg"
              alt="Glafira Privalova"
              className="w-20 h-20 rounded-full border-2 border-white/20 mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-white mb-2">
              Glafira Privalova
            </h3>
            <p className="text-claude-coral text-sm mb-3">Co-organizer</p>
            <p className="text-white/60 text-sm mb-3">
              iOS Software Engineer at F-Secure. Previously BeeHealthy.
              Metropolia &amp; MSU alumni.
            </p>
            <a
              href="https://www.linkedin.com/in/glaphi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/40 hover:text-claude-coral transition-colors text-xs"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/speakers/bambi-dang.png"
              alt="Bambi Dang"
              className="w-20 h-20 rounded-full border-2 border-white/20 mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-white mb-2">Bambi Dang</h3>
            <p className="text-claude-coral text-sm mb-3">Co-organizer</p>
            <p className="text-white/60 text-sm mb-3">
              Founder at FunFox. Chapter Lead Finland at The AI Collective.
            </p>
            <a
              href="https://www.linkedin.com/in/bambidang/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/40 hover:text-claude-coral transition-colors text-xs"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Slide>,

    // 4. F-Secure venue thank you
    <Slide key="fsecure">
      <div className="text-center max-w-3xl">
        <Building2 className="w-16 h-16 text-claude-coral mx-auto mb-8 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Thank you, <span className="gradient-text-summer">F-Secure</span>
        </h2>
        <p className="text-xl text-white/70 leading-relaxed">
          For hosting us tonight. Big thanks to the team for opening their
          doors to the community.
        </p>
      </div>
    </Slide>,

    // 5. Community stats
    <Slide key="stats">
      <div className="text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Community <span className="gradient-text-summer">in numbers</span>
        </h2>
        <p className="text-white/50 text-base mb-10">
          {totalMembers} members and counting
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {memberRoles.map((role) => (
            <div
              key={role.label}
              className="bg-white/5 rounded-xl px-4 py-4 border border-white/10"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text-summer mb-1">
                {role.value}
              </div>
              <div className="text-white/50 text-xs uppercase tracking-wider">
                {role.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>,

    // 6. Tonight's lineup
    <Slide key="lineup">
      <div className="text-center max-w-4xl">
        <Calendar className="w-16 h-16 text-aurora-cyan mx-auto mb-8 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
          Tonight&apos;s <span className="gradient-text-summer">lineup</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-4 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <p className="text-aurora-cyan font-mono text-xs uppercase tracking-widest mb-2">
              Part 1
            </p>
            <h3 className="text-xl font-bold text-white mb-2">Claude News</h3>
            <p className="text-white/60 text-sm">
              What shipped, what is worth your attention.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <p className="text-aurora-cyan font-mono text-xs uppercase tracking-widest mb-2">
              Part 2
            </p>
            <h3 className="text-xl font-bold text-white mb-2">Speakers</h3>
            <p className="text-white/60 text-sm">
              Four talks on Claude Code across teams.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <p className="text-aurora-cyan font-mono text-xs uppercase tracking-widest mb-2">
              Part 3
            </p>
            <h3 className="text-xl font-bold text-white mb-2">
              Q&amp;A and Panel
            </h3>
            <p className="text-white/60 text-sm">
              Joint discussion with the speakers. Bring your challenges.
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    // 7. Framing — Claude Code for Dev Teams
    <Slide key="framing">
      <div className="text-center max-w-4xl">
        <Sparkles className="w-16 h-16 text-aurora-purple mx-auto mb-8 opacity-80" />
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-10">
          Claude Code for{" "}
          <span className="gradient-text-summer">Dev Teams</span>
        </h2>
        <div className="space-y-5 text-center text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
          <p>
            Using Claude Code on your own is one thing. Using it well across
            a team is another.
          </p>
          <p>
            What changes when you are not coding solo: shared context, team
            workflows, custom org skills, code quality, and the security and
            privacy questions that come with all of it.
          </p>
          <p>
            Some people are calling this{" "}
            <span className="text-aurora-cyan">vibe engineering</span>. Doing
            it properly has nothing to do with vibe.
          </p>
        </div>
      </div>
    </Slide>,

    // 8. What the night is about — three pillars
    <Slide key="pillars">
      <div className="text-center max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          The questions <span className="gradient-text-summer">tonight</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <Workflow className="w-10 h-10 text-aurora-cyan mb-4 opacity-80" />
            <h3 className="text-lg font-bold text-white mb-3">Team workflows</h3>
            <p className="text-white/65 text-sm leading-relaxed">
              Shared context, custom org skills, how a team adopts Claude
              Code without each person reinventing the wheel.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <GitBranch className="w-10 h-10 text-summer-meadow mb-4 opacity-80" />
            <h3 className="text-lg font-bold text-white mb-3">Code quality</h3>
            <p className="text-white/65 text-sm leading-relaxed">
              Reviews, standards, and what stays the same when the volume
              of code a small team can ship goes up.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <Shield className="w-10 h-10 text-claude-coral mb-4 opacity-80" />
            <h3 className="text-lg font-bold text-white mb-3">
              Security &amp; privacy
            </h3>
            <p className="text-white/65 text-sm leading-relaxed">
              Where the data goes, what the model sees, and how to keep a
              team moving without giving up the basics.
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    // ─── Claude News intro ──────────────────────────────────────────
    <Slide key="news-intro">
      <div className="text-center max-w-3xl">
        <Newspaper className="w-16 h-16 text-midnight-amber mx-auto mb-8 opacity-80" />
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Claude <span className="gradient-text-summer">News</span>
        </h2>
        <p className="text-xl text-white/70 leading-relaxed">
          What shipped since last meetup.
        </p>
      </div>
    </Slide>,

    // ─── 1. Agent SDK billing split ─────────────────────────────────
    <Slide key="news-1-title">
      <div className="text-center max-w-4xl">
        <CreditCard className="w-16 h-16 text-claude-coral mx-auto mb-8 opacity-80" />
        <p className="text-aurora-cyan font-mono text-sm tracking-widest uppercase mb-4">
          News &middot; 1 of 8
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Agent SDK <span className="gradient-text-summer">billing split</span>
        </h2>
      </div>
    </Slide>,

    <Slide key="news-1-what">
      <div className="text-center max-w-4xl">
        <CreditCard className="w-16 h-16 text-claude-coral mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          What is <span className="gradient-text-summer">changing</span>
        </h2>
        <p className="text-midnight-amber font-mono text-sm mb-8">
          Announced May 13, 2026 &middot; effective June 15
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              Programmatic
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>SDK / API usage gets its own credit pool</li>
              <li>Billed and metered separately</li>
              <li>Effective June 15, 2026</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              Interactive
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Pro / Max subscription stays as-is</li>
              <li>Same limits, same caps</li>
              <li>No change to how you use Claude.ai or Claude Code</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    <Slide key="news-1-why">
      <div className="text-center max-w-4xl">
        <TrendingUp className="w-16 h-16 text-aurora-purple mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Why <span className="gradient-text-summer">now</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              Compute pressure
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Opus 4.7 demand has been intense. Agent workloads burn far
              more tokens per session than chat, and the subscription pool
              was carrying both.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              Subscription arbitrage
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Tools like{" "}
              <span className="font-mono text-midnight-amber">OpenClaw</span>{" "}
              were routing programmatic agent traffic through personal
              subscriptions. Splitting the pools closes that loophole.
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    <Slide key="news-1-impact">
      <div className="text-center max-w-4xl">
        <Workflow className="w-16 h-16 text-aurora-cyan mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          What it means <span className="gradient-text-summer">for builders</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              If you build on the SDK
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Budget the agent pool separately from your team plan</li>
              <li>Watch June 15 for the cutover</li>
              <li>Long-running agents should plan around it</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              If you only use the apps
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Nothing to do</li>
              <li>Your subscription quota is no longer shared with agents</li>
              <li>Headroom should feel a bit better</li>
            </ul>
          </div>
        </div>
        <a
          href="https://support.anthropic.com/en/articles/11145838-using-claude-code-with-your-pro-or-max-plan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read the support article
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // ─── 2. Agent view in Claude Code ───────────────────────────────
    <Slide key="news-2-title">
      <div className="text-center max-w-4xl">
        <LayoutDashboard className="w-16 h-16 text-aurora-cyan mx-auto mb-8 opacity-80" />
        <p className="text-aurora-cyan font-mono text-sm tracking-widest uppercase mb-4">
          News &middot; 2 of 8
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Agent view in{" "}
          <span className="gradient-text-summer">Claude Code</span>
        </h2>
      </div>
    </Slide>,

    <Slide key="news-2-what">
      <div className="text-center max-w-4xl">
        <LayoutDashboard className="w-16 h-16 text-aurora-cyan mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          One dashboard,{" "}
          <span className="gradient-text-summer">every session</span>
        </h2>
        <p className="text-midnight-amber font-mono text-sm mb-8">
          v2.1.139 &middot; May 11, 2026
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              What you see
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>All active and recent sessions in one place</li>
              <li>Across worktrees, projects, and Cowork tasks</li>
              <li>Status, progress, last activity, current step</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <p className="text-white/60 text-sm italic mb-3">
              &ldquo;tmux built for Claude Code.&rdquo;
            </p>
            <p className="text-white/50 text-xs">&mdash; Thariq Shihipar</p>
            <p className="text-white/70 text-sm mt-4 leading-relaxed">
              Less time hunting the terminal that owns the session you
              wanted, more time supervising work.
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    <Slide key="news-2-cmd">
      <div className="text-center max-w-4xl">
        <Terminal className="w-16 h-16 text-terminal-green mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          <span className="font-mono text-terminal-green">claude agents</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              From the CLI
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Run{" "}
              <span className="font-mono text-terminal-green">
                claude agents
              </span>{" "}
              to open the dashboard. Works from any directory; the view is
              global, not per-repo.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              What you can do
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <span className="font-mono text-midnight-amber">Space</span>{" "}
                to peek,{" "}
                <span className="font-mono text-midnight-amber">Enter</span>{" "}
                to attach
              </li>
              <li>Pinned sessions and ones needing attention float to the top</li>
              <li>Pro, Max, Team, Enterprise, and API plans</li>
            </ul>
          </div>
        </div>
        <a
          href="https://code.claude.com/docs/en/agent-view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read the docs
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // ─── 3. Bun rewrite in Rust ─────────────────────────────────────
    <Slide key="news-3-title">
      <div className="text-center max-w-4xl">
        <Cpu className="w-16 h-16 text-midnight-amber mx-auto mb-8 opacity-80" />
        <p className="text-aurora-cyan font-mono text-sm tracking-widest uppercase mb-4">
          News &middot; 3 of 8
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Bun rewrite <span className="gradient-text-summer">in Rust</span>
        </h2>
      </div>
    </Slide>,

    <Slide key="news-3-what">
      <div className="text-center max-w-4xl">
        <Cpu className="w-16 h-16 text-midnight-amber mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          6 days, 6,755 commits,{" "}
          <span className="gradient-text-summer">written by Claude</span>
        </h2>
        <p className="text-midnight-amber font-mono text-sm mb-8">
          PR #30412 merged May 14, 2026 &middot; Jarred Sumner
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              Where it stands
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <span className="text-summer-meadow font-medium">99.8%</span>{" "}
                test compatibility on Linux x64
              </li>
              <li>Almost entirely generated by Claude agents</li>
              <li>macOS, Windows, ARM later</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              Same Bun, different engine
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              From the user side, nothing changes:{" "}
              <span className="font-mono text-midnight-amber">bun run</span>,
              the bundler, the test runner all stay. The language under
              the hood is what is shifting.
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    <Slide key="news-3-why">
      <div className="text-center max-w-4xl">
        <Sparkles className="w-16 h-16 text-aurora-purple mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Why this <span className="gradient-text-summer">matters to us</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              Bun is now part of Anthropic
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Acquired in December 2025. Claude Code ships as a Bun
              executable to millions, and Bun powers the Agent SDK. At
              that scale, stability and contributor base matter more than
              Zig&apos;s iteration-speed advantage that got it this far.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              Two stories in one
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              A maturation decision for the runtime, and a public proof
              point for what Claude can do on a runtime-scale codebase in
              a week. Same team, same product, bigger surface to defend.
            </p>
          </div>
        </div>
        <a
          href="https://bun.com/bun-unsafe-audit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read the unsafe-blocks audit
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    <Slide key="news-3-take">
      <div className="text-center max-w-4xl">
        <Sparkles className="w-14 h-14 text-aurora-cyan mx-auto mb-4 opacity-80" />
        <p className="text-aurora-cyan font-mono text-sm tracking-widest uppercase mb-6">
          My take
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 leading-tight">
          AI agents just removed one of the biggest barriers to{" "}
          <span className="gradient-text-summer">tech-debt projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              The barrier that fell
            </h3>
            <p className="text-white/75 text-sm leading-relaxed">
              Total rewrites into a different language used to be a
              multi-year, career-defining bet. The cost was prohibitive,
              the timeline indefinite. Six days of agent time is a
              different conversation.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              Why it worked here
            </h3>
            <p className="text-white/75 text-sm leading-relaxed">
              Bun had a serious test suite already. That is the
              self-validation loop a coding agent needs to know if it is
              actually making progress. No tests, no shortcut.
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    // ─── 4. Claude for Small Business ───────────────────────────────
    <Slide key="news-4-title">
      <div className="text-center max-w-4xl">
        <Briefcase className="w-16 h-16 text-summer-meadow mx-auto mb-8 opacity-80" />
        <p className="text-aurora-cyan font-mono text-sm tracking-widest uppercase mb-4">
          News &middot; 4 of 8
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Claude for{" "}
          <span className="gradient-text-summer">Small Business</span>
        </h2>
      </div>
    </Slide>,

    <Slide key="news-4-connectors">
      <div className="text-center max-w-4xl">
        <Briefcase className="w-16 h-16 text-summer-meadow mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Native <span className="gradient-text-summer">connectors</span>
        </h2>
        <p className="text-midnight-amber font-mono text-sm mb-8">
          May 13, 2026
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "QuickBooks",
            "PayPal",
            "HubSpot",
            "Canva",
            "Docusign",
            "Google Workspace",
            "Microsoft 365",
          ].map((name) => (
            <div
              key={name}
              className="bg-white/5 rounded-xl px-4 py-4 border border-white/10 text-center"
            >
              <div className="text-white/85 text-sm font-medium">{name}</div>
            </div>
          ))}
          <div className="bg-white/5 rounded-xl px-4 py-4 border border-white/10 text-center flex items-center justify-center">
            <div className="text-white/40 text-xs uppercase tracking-wider">
              &amp; more
            </div>
          </div>
        </div>
        <p className="text-white/50 text-sm mt-6 leading-relaxed">
          Aimed at the long tail of small businesses that never owned a CRM
          but already live in these tools.
        </p>
      </div>
    </Slide>,

    <Slide key="news-4-packaged">
      <div className="text-center max-w-4xl">
        <Workflow className="w-16 h-16 text-aurora-cyan mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Workflows, skills, <span className="gradient-text-summer">fluency</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-4 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold gradient-text-summer mb-2">15</div>
            <h3 className="text-base font-bold text-white mb-2">Workflows</h3>
            <p className="text-white/65 text-sm">
              Prebuilt end-to-end flows for finance, sales, ops, comms.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold gradient-text-summer mb-2">15</div>
            <h3 className="text-base font-bold text-white mb-2">Skills</h3>
            <p className="text-white/65 text-sm">
              Reusable Claude skills you can call from any conversation.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold gradient-text-summer mb-2">Free</div>
            <h3 className="text-base font-bold text-white mb-2">
              AI Fluency
            </h3>
            <p className="text-white/65 text-sm">
              A free course built with PayPal for non-technical operators.
            </p>
          </div>
        </div>
        <a
          href="https://www.anthropic.com/news/claude-for-small-business"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read the announcement
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // ─── 5. Code with Claude ────────────────────────────────────────
    <Slide key="news-5-title">
      <div className="text-center max-w-4xl">
        <Rocket className="w-16 h-16 text-claude-coral mx-auto mb-8 opacity-80" />
        <p className="text-aurora-cyan font-mono text-sm tracking-widest uppercase mb-4">
          News &middot; 5 of 8
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Code with <span className="gradient-text-summer">Claude</span>
        </h2>
      </div>
    </Slide>,

    <Slide key="news-5-events">
      <div className="text-center max-w-4xl">
        <Calendar className="w-16 h-16 text-aurora-cyan mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Three cities, <span className="gradient-text-summer">one tour</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-4 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <p className="text-midnight-amber font-mono text-xs uppercase tracking-widest mb-2">
              May 6 &middot; ext. May 7
            </p>
            <h3 className="text-xl font-bold text-white mb-2">
              San Francisco
            </h3>
            <p className="text-white/60 text-sm">
              Opening event. Keynote led by Ami Vora and the product team,
              Boris Cherny closing.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <p className="text-midnight-amber font-mono text-xs uppercase tracking-widest mb-2">
              May 19 &middot; ext. May 20
            </p>
            <h3 className="text-xl font-bold text-white mb-2">London</h3>
            <p className="text-white/60 text-sm">
              The European stop. Enterprise heavy.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <p className="text-midnight-amber font-mono text-xs uppercase tracking-widest mb-2">
              June 10 &middot; ext. June 11
            </p>
            <h3 className="text-xl font-bold text-white mb-2">Tokyo</h3>
            <p className="text-white/60 text-sm">
              Asia leg. Wraps the spring tour.
            </p>
          </div>
        </div>
        <a
          href="https://claude.com/code-with-claude"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Event page
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    <Slide key="news-5-growth">
      <div className="text-center max-w-4xl">
        <TrendingUp className="w-16 h-16 text-summer-meadow mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          The <span className="gradient-text-summer">80x</span> number
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              From the SF keynote
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <span className="text-summer-meadow font-medium">80x</span>{" "}
                growth in usage
              </li>
              <li>
                <span className="text-claude-coral font-medium">10x</span>{" "}
                growth in revenue
              </li>
              <li>Dario&apos;s framing of the year so far</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              What it implies
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Per-user value is falling even as the user base explodes.
              Average task got cheaper. The pricing knobs are not random.
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    <Slide key="news-5-spacex">
      <div className="text-center max-w-4xl">
        <Cpu className="w-16 h-16 text-midnight-amber mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Compute and{" "}
          <span className="gradient-text-summer">limits, same day</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              SpaceX Colossus 1
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                Anthropic takes all of Colossus 1 in Memphis &mdash;{" "}
                <span className="text-summer-meadow font-medium">
                  220,000+ GPUs
                </span>
              </li>
              <li>300+ MW of new capacity within the month</li>
              <li>
                <span className="text-claude-coral font-medium">
                  $1.25B / month
                </span>{" "}
                through May 2029, ~$45B total
              </li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              Limits move the same day
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>5-hour Claude Code limits doubled on Pro, Max, Team, Enterprise</li>
              <li>Peak-hour reductions removed</li>
              <li>Opus API rate limits raised substantially</li>
            </ul>
          </div>
        </div>
        <a
          href="https://www.anthropic.com/news/higher-limits-spacex"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read the announcement
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // ─── 6. /goal command ───────────────────────────────────────────
    <Slide key="news-6-title">
      <div className="text-center max-w-4xl">
        <Target className="w-16 h-16 text-aurora-green mx-auto mb-8 opacity-80" />
        <p className="text-aurora-cyan font-mono text-sm tracking-widest uppercase mb-4">
          News &middot; 6 of 8
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          <span className="font-mono text-terminal-green">/goal</span>{" "}
          <span className="gradient-text-summer">command</span>
        </h2>
      </div>
    </Slide>,

    <Slide key="news-6-what">
      <div className="text-center max-w-4xl">
        <Target className="w-16 h-16 text-aurora-green mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Set the goal, <span className="gradient-text-summer">let it run</span>
        </h2>
        <p className="text-midnight-amber font-mono text-sm mb-8">
          v2.1.139 &middot; May 11, 2026
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              How it works
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>You state a completion condition</li>
              <li>
                A fast evaluator model checks it after{" "}
                <span className="text-white">every turn</span>
              </li>
              <li>If not met, Claude keeps going on its own</li>
              <li>Works in interactive, -p, and Remote Control</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              What changes
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Less &ldquo;continue&rdquo; tapping. The agent owns the loop
              against a target you defined, instead of you owning the loop
              against an agent that keeps stopping. Live overlay tracks
              elapsed time, turns, tokens.
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    <Slide key="news-6-examples">
      <div className="text-center max-w-4xl">
        <Terminal className="w-16 h-16 text-terminal-green mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          What to <span className="gradient-text-summer">point it at</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-4 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <p className="font-mono text-terminal-green text-sm mb-2">
              /goal
            </p>
            <p className="text-white/80 text-sm">
              All tests in test/auth pass and the lint step is clean.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <p className="font-mono text-terminal-green text-sm mb-2">
              /goal
            </p>
            <p className="text-white/80 text-sm">
              Migrate every callsite of the old API to the new one.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <p className="font-mono text-terminal-green text-sm mb-2">
              /goal
            </p>
            <p className="text-white/80 text-sm">
              This PR has zero open review comments.
            </p>
          </div>
        </div>
        <a
          href="https://code.claude.com/docs/en/goal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read the docs
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // ─── 7. Managed Agents level up ─────────────────────────────────
    <Slide key="news-7-title">
      <div className="text-center max-w-4xl">
        <Sparkles className="w-16 h-16 text-aurora-purple mx-auto mb-8 opacity-80" />
        <p className="text-aurora-cyan font-mono text-sm tracking-widest uppercase mb-4">
          News &middot; 7 of 8
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Managed Agents{" "}
          <span className="gradient-text-summer">level up</span>
        </h2>
        <p className="text-white/50 mt-4 font-mono text-sm">
          Dreaming &middot; Outcomes &middot; Orchestration
        </p>
      </div>
    </Slide>,

    <Slide key="news-7-three">
      <div className="text-center max-w-5xl">
        <Sparkles className="w-16 h-16 text-aurora-purple mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Three features,{" "}
          <span className="gradient-text-summer">one direction</span>
        </h2>
        <p className="text-midnight-amber font-mono text-sm mb-8">
          Announced May 6, 2026 at Code with Claude
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">Dreaming</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              A scheduled process reviews recent sessions, finds patterns,
              and folds them back into memory. Like sleep, for an agent.
            </p>
            <p className="text-aurora-cyan text-xs mt-3 font-mono">
              Research preview
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">Outcomes</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              You write a rubric. A second Claude grades each output
              against it in its own context, forces a retry when the bar
              is not met.
            </p>
            <p className="text-summer-meadow text-xs mt-3 font-mono">
              Public beta
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              Orchestration
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              A lead agent breaks a job into parts and fans them out to
              specialist subagents running in parallel.
            </p>
            <p className="text-summer-meadow text-xs mt-3 font-mono">
              Public beta
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    <Slide key="news-7-proof">
      <div className="text-center max-w-4xl">
        <TrendingUp className="w-16 h-16 text-summer-meadow mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Early <span className="gradient-text-summer">proof points</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-4 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold gradient-text-summer mb-2">
              6&times;
            </div>
            <h3 className="text-base font-bold text-white mb-2">Harvey</h3>
            <p className="text-white/65 text-sm">
              Task completion rate jump after enabling Dreaming on their
              legal agents.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold gradient-text-summer mb-2">
              50%
            </div>
            <h3 className="text-base font-bold text-white mb-2">Wisedocs</h3>
            <p className="text-white/65 text-sm">
              Cut medical document review time in half using Outcomes
              rubrics.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold gradient-text-summer mb-2">
              100s
            </div>
            <h3 className="text-base font-bold text-white mb-2">Netflix</h3>
            <p className="text-white/65 text-sm">
              Processing logs from hundreds of builds in parallel with
              multi-agent orchestration.
            </p>
          </div>
        </div>
        <a
          href="https://www.anthropic.com/engineering/managed-agents"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read the engineering post
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // ─── 8. Platform week (v2.1.149) ────────────────────────────────
    <Slide key="news-8-title">
      <div className="text-center max-w-4xl">
        <Shield className="w-16 h-16 text-claude-coral mx-auto mb-8 opacity-80" />
        <p className="text-aurora-cyan font-mono text-sm tracking-widest uppercase mb-4">
          News &middot; 8 of 8
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Platform <span className="gradient-text-summer">week</span>
        </h2>
        <p className="text-white/50 mt-4 font-mono text-sm">
          v2.1.149 &middot; May 18-24, 2026
        </p>
      </div>
    </Slide>,

    <Slide key="news-8-shipped">
      <div className="text-center max-w-4xl">
        <LayoutDashboard className="w-16 h-16 text-aurora-cyan mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          What <span className="gradient-text-summer">shipped</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              Managed Agents go self-hosted
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Self-hosted sandboxes</li>
              <li>MCP tunnels to your own services</li>
              <li>Concrete move toward third-party hosting</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              Visibility and security
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Per-category usage, including MCP server costs</li>
              <li>PowerShell directory bypass closed</li>
              <li>git-worktree sandbox write allowlist corrected</li>
              <li>
                Keyboard nav in{" "}
                <span className="font-mono text-terminal-green">/diff</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    <Slide key="news-8-broke">
      <div className="text-center max-w-4xl">
        <Workflow className="w-16 h-16 text-claude-coral mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          What <span className="gradient-text-summer">broke</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              AUP false-positive wave
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Benign work refused across SwiftUI, FPGA analysis, and
              research content. Server-side, not in your config.
            </p>
            <p className="text-white/50 text-xs mt-3 italic">
              Workaround: fresh session, rephrase the request.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              Windows resume panic
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              v2.1.149 could panic on{" "}
              <span className="font-mono text-midnight-amber">
                claude --resume
              </span>
              . Rolling back to v2.1.148 was the recommended fix while a
              patch landed.
            </p>
          </div>
        </div>
        <a
          href="https://clauders.com/blog/whats-up-claude-code-week-of-may-18"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read the weekly digest
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // 10. Speakers section divider
    <Slide key="speakers-title">
      <div className="text-center">
        <Mic className="w-16 h-16 text-aurora-cyan mx-auto mb-8 opacity-80" />
        <h2 className="text-5xl md:text-7xl font-bold text-white">
          Tonight&apos;s <span className="gradient-text-summer">speakers</span>
        </h2>
      </div>
    </Slide>,

    // 11-14. Individual speakers
    ...speakers.map((speaker) => (
      <Slide key={speaker.name}>
        <div className="text-center max-w-3xl">
          {speaker.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-24 h-24 rounded-full border-2 border-white/20 mx-auto mb-8 object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 mx-auto mb-8 flex items-center justify-center">
              <span className="text-3xl font-bold text-white/60">
                {speaker.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {speaker.name}
          </h2>
          {speaker.bio && (
            <p className="text-lg text-white/50 mb-6">{speaker.bio}</p>
          )}
          <p className="text-xl md:text-2xl text-claude-coral font-light leading-relaxed">
            {speaker.title}
          </p>
          {speaker.slidesUrl && (
            <a
              href={speaker.slidesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
            >
              View slides
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </Slide>
    )),

    // 15. Panel / Q&A
    <Slide key="panel">
      <div className="text-center max-w-3xl">
        <Mic className="w-16 h-16 text-aurora-purple mx-auto mb-8 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Q&amp;A and <span className="gradient-text-summer">panel</span>
        </h2>
        <p className="text-xl text-white/70 leading-relaxed">
          Joint discussion with the speakers. Bring the challenges you are
          running into, we will dig into them together.
        </p>
      </div>
    </Slide>,

    // 16. Thanks
    <Slide key="thanks">
      <div className="text-center max-w-3xl">
        <Heart className="w-16 h-16 text-claude-coral mx-auto mb-8 opacity-80" />
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
          <span className="gradient-text-summer">Thank you</span>
        </h2>
        <p className="text-xl text-white/70 mb-3">
          To our speakers, to F-Secure, to Anthropic, and to all of you.
        </p>
        <p className="text-white/50 text-base mb-10">
          Special thanks to Glafira and Bambi for helping organize.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://claude-code-helsinki.codesharegrow.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl border border-white/10 text-white/80 hover:text-white transition-colors text-sm font-medium"
          >
            claude-code-helsinki.codesharegrow.net
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://luma.com/ClaudeCodeHelsinki"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl border border-white/10 text-white/80 hover:text-white transition-colors text-sm font-medium"
          >
            luma.com/ClaudeCodeHelsinki
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Slide>,
  ];

  return <Presentation slides={slides} season="summer" />;
}
