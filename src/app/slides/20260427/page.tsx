"use client";

import { Presentation } from "@/components/slides/Presentation";
import { Slide } from "@/components/slides/Slide";
import {
  Users,
  Calendar,
  Cpu,
  Hash,
  Lock,
  BrainCircuit,
  Briefcase,
  Cloud,
  Smartphone,
  LineChart,
  Paintbrush,
  Monitor,
  Bot,
  Laptop,
  Terminal,
  ShieldCheck,
  Clock,
  Timer,
  Wrench,
  Mic,
  Heart,
  Sparkles,
  BookOpen,
  Building2,
  ExternalLink,
} from "lucide-react";

const speakers = [
  {
    name: "Alejandra Soni",
    title: "Asking Business Questions of Your Own Data",
    bio: "CCO at Groweo. Ex-Customer Success Director at Supermetrics.",
    image: "/speakers/alejandra-soni.jpg",
    slidesUrl: "/presentations/20260427/alejandra-soni.html",
  },
  {
    name: "Anna Ursin",
    title: "Building a Business Operating System",
    bio: "Fractional GTM lead for B2B SaaS/tech. GTM Advisor at Maptionnaire.",
    image: "/speakers/anna-ursin.jpg",
    slidesUrl:
      "https://gamma.app/docs/Building-a-Business-Context-OS--oc82ftyx1ai79c9?mode=present",
  },
  {
    name: "Sohvi Silius",
    title:
      "How Claude Cowork Turned Me from a Casual AI User into a Workflow Creator",
    bio: "User Insights Lead at Yousician. Founder of Silius Insights.",
    image: "/speakers/sohvi-silius.jpg",
    slidesUrl: "/presentations/20260427/Sohvi-Silius.pdf",
  },
  {
    name: "Tapio Haaja",
    title: "My Sales Team Is Me and Claude",
    bio: "CCO at Intentface. Ex-Sanoma & MTV.",
    image: "/speakers/tapio-haaja.jpg",
    slidesUrl: "/presentations/20260427/Tapio-Haaja.pdf",
  },
];

const memberRoles = [
  { label: "Software Developer", value: 55 },
  { label: "Founder / Entrepreneur", value: 42 },
  { label: "Other", value: 37 },
  { label: "Product Manager", value: 12 },
  { label: "Researcher", value: 11 },
  { label: "Designer", value: 11 },
  { label: "Student", value: 6 },
];

const totalMembers = memberRoles.reduce((sum, r) => sum + r.value, 0);

export default function Meetup20260427() {
  const slides = [
    // 1. Title
    <Slide key="title">
      <div className="text-center max-w-4xl">
        <p className="text-aurora-cyan font-mono text-lg mb-4 tracking-widest uppercase">
          Meetup #3
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          Claude Code
          <span className="block gradient-text-summer">Helsinki</span>
        </h1>
        <p className="text-2xl text-white/60 font-light">April 27, 2026</p>
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
            <p className="text-claude-coral text-sm mb-3">Co-organizer</p>
            <p className="text-white/60 text-sm">
              CTO &amp; Co-founder at Nomain. Builder and Claude Community
              Ambassador.
            </p>
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
            <p className="text-white/60 text-sm">
              iOS Software Engineer at F-Secure. Previously BeeHealthy.
              Metropolia &amp; MSU alumni.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/speakers/tapio-haaja.jpg"
              alt="Tapio Haaja"
              className="w-20 h-20 rounded-full border-2 border-white/20 mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-white mb-2">Tapio Haaja</h3>
            <p className="text-claude-coral text-sm mb-3">Co-host</p>
            <p className="text-white/60 text-sm">
              CCO at Intentface. Ex-Sanoma &amp; MTV. GenAI from discovery to
              production.
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    // 4. Sanomat venue thank you
    <Slide key="sanomat">
      <div className="text-center max-w-3xl">
        <Building2 className="w-16 h-16 text-claude-coral mx-auto mb-8 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Thank you, <span className="gradient-text-summer">Sanomat</span>
        </h2>
        <p className="text-xl text-white/70 leading-relaxed">
          For hosting us tonight. Big thanks to the team for opening their
          doors to the community.
        </p>
      </div>
    </Slide>,

    // 5. Community stats — members by role
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

    // 6. Next meetup teaser
    <Slide key="next-meetup">
      <div className="text-center max-w-3xl">
        <Calendar className="w-16 h-16 text-aurora-purple mx-auto mb-6 opacity-80" />
        <p className="text-aurora-cyan font-mono text-sm tracking-widest uppercase mb-4">
          Save the date
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Meetup #4
        </h2>
        <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-4">
          Claude Code for <span className="gradient-text-summer">teams and orgs</span>,
          beyond vibe coding
        </p>
        <p className="text-white/40 text-sm">Date to be announced soon</p>
      </div>
    </Slide>,

    // 7. Tonight's lineup
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
              Four talks on Claude beyond coding.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <p className="text-aurora-cyan font-mono text-xs uppercase tracking-widest mb-2">
              Part 3
            </p>
            <h3 className="text-xl font-bold text-white mb-2">Networking</h3>
            <p className="text-white/60 text-sm">
              Drinks, demos, conversations.
            </p>
          </div>
        </div>
        <p className="text-white/40 text-sm mt-8">
          Live Q&amp;A with Anthropic was on the wishlist, did not land this
          time.
        </p>
      </div>
    </Slide>,

    // 8. Framing — Claude beyond coding
    <Slide key="framing">
      <div className="text-center max-w-4xl">
        <Sparkles className="w-16 h-16 text-aurora-purple mx-auto mb-8 opacity-80" />
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-10">
          Claude <span className="gradient-text-summer">beyond coding</span>
        </h2>
        <div className="space-y-5 text-center text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
          <p>
            A year ago Claude Code was released. That kind of started the
            Claude wave.
          </p>
          <p>
            November last year was a turning point. Claude Code started to be
            everywhere, used by everybody, changing software development in a
            short period of time.
          </p>
          <p>
            Now, non-coders also want that revolution. And that is something
            Anthropic is betting hard on.
          </p>
        </div>
      </div>
    </Slide>,

    // 9.  CC: Claude Code Desktop redesign
    <Slide key="cc-desktop">
      <div className="text-center max-w-4xl">
        <Laptop className="w-16 h-16 text-aurora-purple mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Claude Code{" "}
          <span className="gradient-text-summer">Desktop, redesigned</span>
        </h2>
        <p className="text-midnight-amber font-mono text-sm mb-8">
          April 14, 2026
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              Multi-session workspace
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Sidebar with every active and recent session</li>
              <li>Drag-and-drop pane layout</li>
              <li>Each session gets its own Git worktree</li>
              <li>Move between repos as results arrive</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">Tools in the app</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Integrated terminal and file editor</li>
              <li>Rebuilt diff viewer for large changesets</li>
              <li>HTML and PDF preview</li>
              <li>
                Side chats with{" "}
                <span className="font-mono text-midnight-amber">Cmd+;</span>{" "}
                without derailing the main thread
              </li>
            </ul>
          </div>
        </div>
        <a
          href="https://claude.com/blog/claude-code-desktop-redesign"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read more
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // 10. CC: /init revamped
    <Slide key="cc-init">
      <div className="text-center max-w-4xl">
        <Terminal className="w-16 h-16 text-terminal-green mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          <span className="font-mono text-terminal-green">/init</span>{" "}
          <span className="gradient-text-summer">revamped</span>
        </h2>
        <p className="text-white/50 mb-8">
          Bootstraps CLAUDE.md and config from an existing repo
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">What it does</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Reads the repo, drafts CLAUDE.md</li>
              <li>Suggests skills, agents, hooks</li>
              <li>Cuts onboarding friction for new contributors</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">What is new</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Applies the smaller-CLAUDE.md principles from meetup #2</li>
              <li>Skips what is discoverable</li>
              <li>Keeps non-obvious conventions and gotchas</li>
            </ul>
          </div>
        </div>
        <a
          href="https://code.claude.com/docs/en/changelog"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read the changelog
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // 11. CC: Auto Approval Mode
    <Slide key="cc-auto-approval">
      <div className="text-center max-w-4xl">
        <ShieldCheck className="w-16 h-16 text-aurora-green mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Auto <span className="gradient-text-summer">Approval Mode</span>
        </h2>
        <p className="text-white/50 mb-8">
          Fewer permission prompts in trusted workflows
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-aurora-green mb-3">
              Where it is safe
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Read-only operations</li>
              <li>Sandboxed work</li>
              <li>Local-only experimentation</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-claude-coral mb-3">
              Where you want explicit approval
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Writes to shared infra</li>
              <li>Force-pushes</li>
              <li>Dependency changes</li>
            </ul>
          </div>
        </div>
        <a
          href="https://code.claude.com/docs/en/changelog"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read the changelog
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // 12. CC: Remote Schedule
    <Slide key="cc-remote-schedule">
      <div className="text-center max-w-4xl">
        <Clock className="w-16 h-16 text-aurora-purple mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Remote <span className="gradient-text-summer">Schedule</span>
        </h2>
        <p className="text-aurora-cyan font-mono text-sm mb-8">Cloud only</p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-3 text-white/75">
            <p>
              Schedule background tasks cron-style without leaving your
              machine on. Runs in the cloud.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">Examples</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Nightly dependency sweeps</li>
              <li>Weekly dead-code reports</li>
              <li>Recurring CHANGELOG drafts</li>
            </ul>
          </div>
        </div>
        <a
          href="https://code.claude.com/docs/en/changelog"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read the changelog
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // 13. CC: New Session Limits
    <Slide key="cc-session-limits">
      <div className="text-center max-w-4xl">
        <Timer className="w-16 h-16 text-claude-coral mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          New <span className="gradient-text-summer">Session Limits</span>
        </h2>
        <p className="text-white/50 mb-8">
          5-hour session limits burn faster during peak hours
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">What changed</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                Peak window:{" "}
                <span className="text-midnight-amber">5–11am PT / 1–7pm GMT</span>{" "}
                weekdays
              </li>
              <li>5-hour sessions burn down faster in that window</li>
              <li>Weekly limits unchanged</li>
              <li>~7% of users will hit caps they wouldn&apos;t have before</li>
              <li>Enterprise plans unaffected (dedicated capacity)</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              How to plan around it
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Shift long runs to off-peak hours</li>
              <li>Prefer Remote Schedule for token-heavy batch work</li>
              <li>Capacity expanded outside peak, no net loss</li>
            </ul>
          </div>
        </div>
        <a
          href="https://x.com/trq212/status/2037254607001559305"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read the announcement
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // 14. CC: Quality Post-Mortem
    <Slide key="cc-postmortem">
      <div className="text-center max-w-4xl">
        <Wrench className="w-16 h-16 text-aurora-cyan mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Quality <span className="gradient-text-summer">Post-Mortem</span>
        </h2>
        <p className="text-midnight-amber font-mono text-sm mb-8">
          April 23, 2026
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-3 text-white/75">
            <p>
              Three product-layer changes were responsible for the quality
              slip across the past month. All fixed in v2.1.116, usage limits
              reset for all subscribers.
            </p>
            <a
              href="https://www.anthropic.com/engineering/april-23-postmortem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-claude-coral hover:text-claude-coral-dark transition-colors flex items-center gap-2 text-sm"
            >
              Read the post-mortem
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              The three issues
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <span className="text-white">Reasoning effort:</span> default
                lowered Mar 4, reverted Apr 7. Now xhigh on Opus 4.7
              </li>
              <li>
                <span className="text-white">Session-clearing bug:</span>{" "}
                shipped Mar 26, fixed Apr 10. Made Claude seem forgetful
              </li>
              <li>
                <span className="text-white">Verbosity prompt:</span> added
                Apr 16, reverted Apr 20. Hurt coding quality
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // 15. News: Claude Managed Agents
    <Slide key="managed-agents">
      <div className="text-center max-w-4xl">
        <Bot className="w-16 h-16 text-midnight-amber mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Claude <span className="gradient-text-summer">Managed Agents</span>
        </h2>
        <p className="text-white/50 mb-8">
          A fully-managed agent harness from Anthropic
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              What you get
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Secure sandboxing</li>
              <li>Built-in tools</li>
              <li>SSE streaming</li>
              <li>Container configuration via API</li>
            </ul>
          </div>
          <div className="space-y-3 text-white/75">
            <p>
              Skip writing your own agent loop. Anthropic runs the harness;
              you describe the agent.
            </p>
            <p className="text-white/50 text-sm italic">
              The era of writing your own loop is closing.
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

    // 16. News: Anthropic Advisor Tool
    <Slide key="advisor">
      <div className="text-center max-w-4xl">
        <BrainCircuit className="w-16 h-16 text-aurora-purple mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Anthropic <span className="gradient-text-summer">Advisor Tool</span>
        </h2>
        <p className="text-white/50 mb-8">
          Pair a fast executor with a higher-intelligence advisor
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">Pattern</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Fast executor handles the bulk of the work</li>
              <li>Advisor provides strategic guidance mid-generation</li>
              <li>Long-horizon agent runs benefit most</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">Result</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Approaches advisor-solo quality</li>
              <li>At executor cost</li>
              <li>Useful for agent harnesses with long sessions</li>
            </ul>
          </div>
        </div>
        <a
          href="https://platform.claude.com/docs/en/agents-and-tools/tool-use/advisor-tool"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read the docs
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // 17. News: Claude Opus 4.7
    <Slide key="opus-47">
      <div className="text-center max-w-4xl">
        <Cpu className="w-16 h-16 text-midnight-amber mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Claude <span className="gradient-text-summer">Opus 4.7</span>
        </h2>
        <p className="text-midnight-amber font-mono text-sm mb-8">
          April 16, 2026
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Capabilities</h3>
            <ul className="space-y-2 text-white/70">
              <li>Same price as Opus 4.6 ($5 / $25 per M tokens)</li>
              <li>3x vision resolution: 2,576px on the long edge</li>
              <li>
                New <span className="font-mono text-midnight-amber">xhigh</span>{" "}
                effort level between high and max
              </li>
              <li>Available across web, mobile, desktop</li>
              <li>API, Bedrock, Vertex AI, Microsoft Foundry</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Highlights vs 4.6
            </h3>
            <ul className="space-y-2 text-white/70">
              <li>
                Visual acuity: 98.5%{" "}
                <span className="text-summer-meadow">(vs 54.5%)</span>
              </li>
              <li>
                Coding: <span className="text-summer-meadow">+13%</span> on
                partner benchmarks
              </li>
              <li>
                Code review recall:{" "}
                <span className="text-summer-meadow">+10%</span>
              </li>
              <li>
                Production tasks:{" "}
                <span className="text-summer-meadow">3x more resolved</span>
              </li>
              <li>State-of-the-art on Finance Agent eval</li>
            </ul>
          </div>
        </div>
        <a
          href="https://www.anthropic.com/news/claude-opus-4-7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read more
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // 18. News: Tokenizer change
    <Slide key="tokenizer">
      <div className="text-center max-w-4xl">
        <Hash className="w-16 h-16 text-aurora-cyan mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Tokenizer <span className="gradient-text-summer">change</span>
        </h2>
        <p className="text-white/50 mb-8">
          Opus 4.7 ships a new tokenizer
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">What changed</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                Same input now consumes{" "}
                <span className="text-claude-coral font-medium">
                  1.0 to 1.35× more tokens
                </span>
              </li>
              <li>The factor depends on what you feed it</li>
              <li>Max output and context limits unchanged</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">What to do</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Re-tune budget-sensitive prompts</li>
              <li>Watch the bill on first week of migration</li>
              <li>Migration notes published with the launch</li>
            </ul>
          </div>
        </div>
        <a
          href="https://www.anthropic.com/news/claude-opus-4-7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read more
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // 19. News: Mythos
    <Slide key="mythos">
      <div className="text-center max-w-4xl">
        <Lock className="w-16 h-16 text-aurora-green mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          <span className="gradient-text-summer">Mythos</span>
        </h2>
        <p className="text-aurora-cyan font-mono text-sm mb-8">
          April 7, 2026 - gated preview
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-3 text-white/75">
            <p>
              A model you cannot buy. Available only to twelve security
              partners.
            </p>
            <p className="text-white/60 text-sm">
              Anthropic published the launch chart with Mythos taller than
              everything else, sitting next to Opus 4.7. The pattern is the
              news.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">Why it matters</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>The gap between the model that ships and the model that exists is now public</li>
              <li>Used to surface old, subtle vulnerabilities at scale</li>
              <li>The precedent for partner-only releases starts here</li>
            </ul>
          </div>
        </div>
        <a
          href="https://red.anthropic.com/2026/mythos-preview/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read more
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // 20. News: Cowork is GA
    <Slide key="cowork-ga">
      <div className="text-center max-w-4xl">
        <Briefcase className="w-16 h-16 text-claude-coral mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Cowork is <span className="gradient-text-summer">GA</span>
        </h2>
        <p className="text-aurora-cyan font-mono text-sm mb-8">April 20, 2026</p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-4">
            <p className="text-lg text-white/80">
              Cowork has matured into the primary surface for recurring
              business work.
            </p>
            <ul className="space-y-2 text-white/70">
              <li>RBAC for Enterprise plans</li>
              <li>OpenTelemetry support</li>
              <li>Custom roles per group</li>
              <li>Cowork analytics in the Analytics API</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <p className="text-white/60 text-sm mb-3">Non-coding angle</p>
            <p className="text-white/75">
              Recurring work owned by a Cowork task instead of a calendar
              reminder. Marketing digests, sales rituals, support triage,
              weekly KPI rollups.
            </p>
          </div>
        </div>
        <a
          href="https://claude.com/blog/cowork-for-enterprise"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read the announcement
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // 21. News: Cowork on 3P
    <Slide key="cowork-3p">
      <div className="text-center max-w-4xl">
        <Cloud className="w-16 h-16 text-midnight-amber mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Cowork on <span className="gradient-text-summer">3P</span>
        </h2>
        <p className="text-white/50 mb-8">
          Run Cowork on your own cloud. Anthropic never sees the prompts.
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">
              Supported providers
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Amazon Bedrock</li>
              <li>Google Cloud Vertex AI</li>
              <li>Azure AI Foundry</li>
              <li>Any compatible LLM gateway</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">Why it matters</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Inference stays on infra you control</li>
              <li>For regulated or data-residency-constrained orgs</li>
              <li>Configured via MDM (Jamf, Intune, GPO)</li>
              <li>End users cannot override the admin profile</li>
            </ul>
          </div>
        </div>
        <a
          href="https://claude.com/docs/cowork/3p/overview"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read the docs
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // 22. News: Cowork Dispatch
    <Slide key="cowork-dispatch">
      <div className="text-center max-w-4xl">
        <Smartphone className="w-16 h-16 text-aurora-cyan mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Cowork <span className="gradient-text-summer">Dispatch</span>
        </h2>
        <p className="text-white/50 mb-8">Cowork tasks from your phone</p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-3 text-white/75">
            <p>
              Manage Cowork tasks from phones via Claude Desktop or mobile.
              Approve, retry, hand off, or kick off new runs from anywhere.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">Use cases</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Approve a sales summary on the train</li>
              <li>Retry a failed nightly run from bed</li>
              <li>Trigger an ad-hoc digest before a meeting</li>
            </ul>
          </div>
        </div>
        <a
          href="https://claude.com/blog/dispatch-and-computer-use"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read the announcement
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // 23. News: Live Artifacts
    <Slide key="live-artifacts">
      <div className="text-center max-w-4xl">
        <LineChart className="w-16 h-16 text-aurora-green mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Live <span className="gradient-text-summer">Artifacts</span>
        </h2>
        <p className="text-aurora-cyan font-mono text-sm mb-8">April 20, 2026</p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-3 text-white/75">
            <p>
              Charts, sketches, and shareable assets render visually inside
              Cowork conversations. Connected to apps and files, they update
              when the data does.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">Why it matters</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Ops, PMs, founders ship dashboards in five minutes</li>
              <li>No BI tool required</li>
              <li>Shareable links, no extra tools</li>
            </ul>
          </div>
        </div>
        <a
          href="https://x.com/claudeai/status/2046328619249684989"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read more
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // 24. News: Computer Use
    <Slide key="computer-use">
      <div className="text-center max-w-4xl">
        <Monitor className="w-16 h-16 text-aurora-purple mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Computer <span className="gradient-text-summer">Use</span>
        </h2>
        <p className="text-white/50 mb-8">
          Claude drives the screen for you
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-3 text-white/75">
            <p>
              Claude can access screens and perform tasks independently. Recent
              updates include Claude Code Dispatch hooks.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">Use cases</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Pull data from three sites, build a comparison</li>
              <li>Drive a CRM through a sales playbook</li>
              <li>Click through a recurring report</li>
            </ul>
          </div>
        </div>
        <a
          href="https://claude.com/blog/dispatch-and-computer-use"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read the announcement
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // 25. News: Claude Design
    <Slide key="claude-design">
      <div className="text-center max-w-4xl">
        <Paintbrush className="w-16 h-16 text-claude-coral mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Claude <span className="gradient-text-summer">Design</span>
        </h2>
        <p className="text-aurora-cyan font-mono text-sm mb-8">
          April 17, 2026 - Anthropic Labs
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-3 text-white/75">
            <p>
              A designer-first surface. Figma integration as the entry point,
              not a side door.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">For designers</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>A collaborator that speaks Figma, not code</li>
              <li>Iterate on screens in the tool you already use</li>
              <li>Reference images become structured input</li>
            </ul>
          </div>
        </div>
        <a
          href="https://www.anthropic.com/news/claude-design-anthropic-labs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-claude-coral hover:text-claude-coral-dark transition-colors text-sm"
        >
          Read the announcement
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Slide>,

    // 26. Stay up to date
    <Slide key="stay-up-to-date">
      <div className="text-center max-w-4xl">
        <BookOpen className="w-16 h-16 text-midnight-amber mx-auto mb-8 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Keep up <span className="gradient-text-summer">with the news</span>
        </h2>
        <p className="text-white/50 mb-10">
          Two sources we use to fact-check this deck week to week
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <a
            href="https://clauders.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 rounded-2xl p-6 border border-white/10 hover:border-claude-coral/40 transition-colors group"
          >
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-white">Clauders Blog</h3>
              <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-claude-coral transition-colors" />
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-3">
              Weekly digest of what shipped at Anthropic and across the
              ecosystem. Long-form, opinionated, builder-oriented.
            </p>
            <p className="font-mono text-xs text-midnight-amber">
              clauders.com/blog
            </p>
          </a>
          <a
            href="https://id8labs.app/shipped"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 rounded-2xl p-6 border border-white/10 hover:border-claude-coral/40 transition-colors group"
          >
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-white">id8labs Shipped</h3>
              <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-claude-coral transition-colors" />
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-3">
              Three-week newsletter window with editorial up front and a
              detailed release log in the back. The cleanest single
              reference.
            </p>
            <p className="font-mono text-xs text-midnight-amber">
              id8labs.app/shipped
            </p>
          </a>
        </div>
      </div>
    </Slide>,

    // 27. Speakers section divider
    <Slide key="speakers-title">
      <div className="text-center">
        <Mic className="w-16 h-16 text-aurora-cyan mx-auto mb-8 opacity-80" />
        <h2 className="text-5xl md:text-7xl font-bold text-white">
          Tonight&apos;s <span className="gradient-text-summer">speakers</span>
        </h2>
      </div>
    </Slide>,

    // 25-28. Individual speakers
    ...speakers.map((speaker) => (
      <Slide key={speaker.name}>
        <div className="text-center max-w-3xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-24 h-24 rounded-full border-2 border-white/20 mx-auto mb-8 object-cover"
          />
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

    // Thanks
    <Slide key="thanks">
      <div className="text-center max-w-3xl">
        <Heart className="w-16 h-16 text-claude-coral mx-auto mb-8 opacity-80" />
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
          <span className="gradient-text-summer">Thank you</span>
        </h2>
        <p className="text-xl text-white/70 mb-3">
          To our speakers, to Sanomat, to Anthropic, and to all of you.
        </p>
        <p className="text-white/50 text-base mb-10">
          See you at meetup #4: Claude Code for teams and orgs, beyond vibe
          coding.
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
