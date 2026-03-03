"use client";

import { Presentation } from "@/components/slides/Presentation";
import { Slide } from "@/components/slides/Slide";
import { Globe, MessageCircle, Users, Calendar, Trophy, Cpu, Terminal, Rocket, Mic } from "lucide-react";

const speakers = [
  {
    name: "Aapo Tanskanen",
    title: "Developing Your Own Meeting Assistant with Claude Code",
  },
  {
    name: "Vijay Kodam",
    title: "skill-up: How to Make Claude Work Your Way",
  },
  {
    name: "Luke Otwell",
    title: "OpenClaw vs. Claude Code: The Wrong Tool for the Right Job",
  },
  {
    name: "Dino Repo",
    title: "Raptor: In-House product scouting engine",
  },
  {
    name: "Arsalan Shakil",
    title: "Solving Context Rot: Spec-Driven Development with GSD",
  },
];

export default function Meetup20260305() {
  const slides = [
    // 1. Title
    <Slide key="title">
      <div className="text-center max-w-4xl">
        <p className="text-aurora-cyan font-mono text-lg mb-4 tracking-widest uppercase">
          Meetup #2
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          Claude Code
          <span className="block gradient-text">Helsinki</span>
        </h1>
        <p className="text-2xl text-white/60 font-light">
          March 5, 2026
        </p>
      </div>
    </Slide>,

    // 2. Community
    <Slide key="community">
      <div className="text-center max-w-3xl">
        <Users className="w-16 h-16 text-aurora-cyan mx-auto mb-8 opacity-80" />
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Built by <span className="gradient-text">all of us</span>
        </h2>
        <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
          A community of builders, creators, and developers exploring
          AI-assisted development together in the Nordics.
        </p>
      </div>
    </Slide>,

    // 3. Resources
    <Slide key="resources">
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Stay connected
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="flex flex-col items-center gap-4 bg-white/5 rounded-2xl p-8 min-w-[240px] border border-white/10">
            <Globe className="w-12 h-12 text-claude-coral" />
            <span className="text-2xl font-semibold text-white">Website</span>
            <span className="text-white/50 font-mono text-sm">claudecodehelsinki.com</span>
          </div>
          <div className="flex flex-col items-center gap-4 bg-white/5 rounded-2xl p-8 min-w-[240px] border border-white/10">
            <MessageCircle className="w-12 h-12 text-aurora-purple" />
            <span className="text-2xl font-semibold text-white">Discord</span>
            <span className="text-white/50 font-mono text-sm">Join the conversation</span>
          </div>
        </div>
      </div>
    </Slide>,

    // 4. Stats (placeholder)
    <Slide key="stats">
      <div className="text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Community in numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { label: "Members", value: "---" },
            { label: "Countries", value: "---" },
            { label: "Meetups", value: "2" },
            { label: "Discord members", value: "---" },
            { label: "Newsletter subs", value: "---" },
            { label: "Talks given", value: "---" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>,

    // 5. This event (placeholder)
    <Slide key="event">
      <div className="text-center max-w-3xl">
        <Calendar className="w-16 h-16 text-claude-coral mx-auto mb-8 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Tonight
        </h2>
        <p className="text-xl text-white/60 mb-8">
          Event details to be added
        </p>
      </div>
    </Slide>,

    // 6. News: Hackathon
    <Slide key="hackathon">
      <div className="text-center max-w-3xl">
        <Trophy className="w-16 h-16 text-aurora-green mx-auto mb-8 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Build with Opus 4.6
        </h2>
        <p className="text-lg text-aurora-cyan font-mono mb-8">Hackathon - Feb 10-16, 2026</p>
        <div className="text-left space-y-4 text-lg text-white/80">
          <p>$100,000 in API credits for first place</p>
          <p>500 selected participants, each with $500 in credits</p>
          <p>Winners invited to Claude Code&apos;s 1st Birthday Party in SF</p>
          <p className="text-white/50 text-base">
            Judges from Anthropic: Boris Cherny, Cat Wu, Thariq Shihpar, Lydia Hallie, Ado Kukic, Jason Bigman
          </p>
        </div>
      </div>
    </Slide>,

    // 7. News: Models
    <Slide key="models">
      <div className="text-center max-w-4xl">
        <Cpu className="w-16 h-16 text-aurora-purple mx-auto mb-8 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
          Latest models
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-left">
            <h3 className="text-2xl font-bold text-white mb-4">Claude Opus 4.6</h3>
            <p className="text-aurora-cyan font-mono text-sm mb-4">February 5, 2026</p>
            <ul className="space-y-2 text-white/70">
              <li>1M token context window (beta)</li>
              <li>Major coding + agent planning improvements</li>
              <li>Free tier upgraded to Opus by default</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-left">
            <h3 className="text-2xl font-bold text-white mb-4">Claude Sonnet 4.6</h3>
            <p className="text-aurora-cyan font-mono text-sm mb-4">February 17, 2026</p>
            <ul className="space-y-2 text-white/70">
              <li>1M token context window (beta)</li>
              <li>Approaches Opus-level at practical price</li>
              <li>Human-level in complex tasks</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // 8. News: Claude Code Releases
    <Slide key="releases">
      <div className="text-center max-w-4xl">
        <Terminal className="w-16 h-16 text-terminal-green mx-auto mb-8 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
          Claude Code updates
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-aurora-cyan">New in v2.1.63</h3>
            <ul className="space-y-2 text-white/70 text-lg">
              <li>Auto-memory across sessions</li>
              <li>/simplify, /batch, /copy commands</li>
              <li>HTTP hooks for integrations</li>
              <li>20+ memory leaks fixed</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-aurora-cyan">Recent highlights</h3>
            <ul className="space-y-2 text-white/70 text-lg">
              <li>Worktree isolation for agents</li>
              <li>Background agents</li>
              <li>Remote Control mode</li>
              <li>~500ms faster startup</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // 9. News: Platform Updates
    <Slide key="platform">
      <div className="text-center max-w-4xl">
        <Rocket className="w-16 h-16 text-claude-coral mx-auto mb-8 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
          Platform updates
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-3">
            <ul className="space-y-3 text-white/70 text-lg">
              <li><span className="text-white font-medium">Code execution, Memory, Tool search</span> now GA</li>
              <li><span className="text-white font-medium">Claude in PowerPoint</span> with MCP connectors</li>
              <li><span className="text-white font-medium">Excel MCP:</span> S&P Global, FactSet, Moody&apos;s...</li>
            </ul>
          </div>
          <div className="space-y-3">
            <ul className="space-y-3 text-white/70 text-lg">
              <li><span className="text-white font-medium">Cowork: Scheduled Tasks</span> - recurring automation</li>
              <li><span className="text-white font-medium">Free Max Plan</span> for open source maintainers</li>
              <li><span className="text-white font-medium">Dynamic filtering</span> for web search</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // 10. Speakers title
    <Slide key="speakers-title">
      <div className="text-center">
        <Mic className="w-16 h-16 text-aurora-cyan mx-auto mb-8 opacity-80" />
        <h2 className="text-5xl md:text-7xl font-bold text-white">
          Tonight&apos;s <span className="gradient-text">speakers</span>
        </h2>
      </div>
    </Slide>,

    // 11-15. Individual speakers
    ...speakers.map((speaker) => (
      <Slide key={speaker.name}>
        <div className="text-center max-w-3xl">
          <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 mx-auto mb-8 flex items-center justify-center">
            <span className="text-3xl font-bold text-white/60">
              {speaker.name.split(" ").map((n) => n[0]).join("")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {speaker.name}
          </h2>
          <p className="text-xl md:text-2xl text-aurora-cyan font-light leading-relaxed">
            {speaker.title}
          </p>
        </div>
      </Slide>
    )),
  ];

  return <Presentation slides={slides} />;
}
