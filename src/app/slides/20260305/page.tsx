"use client";

import { Presentation } from "@/components/slides/Presentation";
import { Slide } from "@/components/slides/Slide";
import { Globe, MessageCircle, Users, Calendar, Trophy, Cpu, Terminal, Rocket, Mic, ExternalLink, TerminalSquare, Paintbrush, FileText, Puzzle, Layers, TrendingUp, Wrench, Download } from "lucide-react";

const speakers = [
  {
    name: "Vijay Kodam",
    title: "skill-up: How to Make Claude Work Your Way",
    bio: "Principal Engineer at Nokia",
    image: "/speakers/vijay-kodam.jpg",
    slides: "/presentations/20260305/skill-up-presentation.pdf",
  },
  {
    name: "Luke Otwell",
    title: "OpenClaw vs. Claude Code: The Wrong Tool for the Right Job",
    bio: "Software Engineer - Applied AI at Softlandia",
    image: "/speakers/luke-otwell.jpg",
    slides: "/presentations/20260305/claw-vs-claude.pdf",
  },
  {
    name: "Arsalan Shakil",
    title: "Solving Context Rot: Spec-Driven Development with GSD",
    bio: "AI Research Engineer at F-Secure",
    image: "/speakers/arsalan-shakil.jpg",
    slides: "/presentations/20260305/solving-context-rot-gsd.html",
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

    // 3. Hosts
    <Slide key="hosts">
      <div className="text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Your <span className="gradient-text">hosts</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <img
              src="/speakers/hector-tortosa.jpg"
              alt="Hector Tortosa"
              className="w-20 h-20 rounded-full border-2 border-white/20 mx-auto mb-4 object-cover"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Hector Tortosa</h3>
            <p className="text-claude-coral text-sm mb-3">Co-organizer</p>
            <p className="text-white/60 text-sm">CTO &amp; Co-founder at Nomain. Builder and Claude Community Ambassador.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <img
              src="/speakers/glafira-privalova.jpg"
              alt="Glafira Privalova"
              className="w-20 h-20 rounded-full border-2 border-white/20 mx-auto mb-4 object-cover"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Glafira Privalova</h3>
            <p className="text-claude-coral text-sm mb-3">Co-organizer</p>
            <p className="text-white/60 text-sm">iOS Software Engineer at F-Secure. Previously BeeHealthy. Metropolia &amp; MSU alumni.</p>
          </div>
        </div>
      </div>
    </Slide>,

    // 4. Resources
    <Slide key="resources">
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Stay connected
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="flex flex-col items-center gap-4 bg-white/5 rounded-2xl p-8 min-w-[240px] border border-white/10">
            <Globe className="w-12 h-12 text-claude-coral" />
            <span className="text-2xl font-semibold text-white">Website</span>
            <span className="text-white/50 font-mono text-sm">claude-code-helsinki.codesharegrow.net</span>
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
        <div className="grid grid-cols-2 gap-8">
          {[
            { label: "Members", value: "68" },
            { label: "Meetups", value: "2" },
            { label: "Talks given", value: "7" },
            { label: "Speakers tonight", value: "3" },
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

    // 5. This event
    <Slide key="event">
      <div className="text-center max-w-4xl">
        <Calendar className="w-12 h-12 text-claude-coral mx-auto mb-4 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Tonight
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white/5 rounded-xl p-5 border border-white/10">
            <div className="text-4xl font-bold gradient-text mb-1">194</div>
            <div className="text-white/50 text-xs uppercase tracking-wider">signups</div>
          </div>
          <div className="bg-white/5 rounded-xl p-5 border border-white/10">
            <div className="text-4xl font-bold gradient-text mb-1">120</div>
            <div className="text-white/50 text-xs uppercase tracking-wider">approved</div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-4">
          {[
            { label: "Daily users", value: "44%" },
            { label: "Regular users", value: "23%" },
            { label: "New & interested", value: "22%" },
            { label: "Occasional", value: "11%" },
          ].map((item) => (
            <div key={item.label} className="bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="text-xl font-bold text-white mb-1">{item.value}</div>
              <div className="text-white/40 text-xs uppercase tracking-wider">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-3 mb-5">
          {[
            { label: "Engineers", value: "29%" },
            { label: "Founders", value: "22%" },
            { label: "Product & Design", value: "10%" },
            { label: "Students", value: "9%" },
            { label: "Other", value: "30%" },
          ].map((item) => (
            <div key={item.label} className="bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="text-xl font-bold text-aurora-cyan mb-1">{item.value}</div>
              <div className="text-white/40 text-xs uppercase tracking-wider">{item.label}</div>
            </div>
          ))}
        </div>
        <p className="text-white/40 text-sm">Top interests: Agents · Workflows · MCP · Multi-agent teams</p>
      </div>
    </Slide>,

    // 6. News: Hackathon overview
    <Slide key="hackathon">
      <div className="text-center max-w-3xl">
        <Trophy className="w-16 h-16 text-aurora-green mx-auto mb-8 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Built with <span className="gradient-text">Opus 4.6</span>
        </h2>
        <p className="text-lg text-aurora-cyan font-mono mb-8">Claude Code Hackathon - Feb 10-16, 2026</p>
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-white">13K+</div>
            <div className="text-white/50 text-sm">applicants</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-white">500</div>
            <div className="text-white/50 text-sm">selected</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-white">$100K</div>
            <div className="text-white/50 text-sm">in API credits</div>
          </div>
        </div>
        <p className="text-white/50 text-base">
          Only 1 of 5 winners was a professional software engineer
        </p>
      </div>
    </Slide>,

    // 7. News: Hackathon winners
    <Slide key="hackathon-winners">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Hackathon winners
        </h2>
        <div className="space-y-3">
          {[
            { place: "1st", prize: "$50K", name: "CrossBeam", author: "Mike Brown", desc: "Speeds up California building permits - built by a personal injury attorney", link: "https://cerebralvalley.ai/e/claude-code-hackathon/hackathon/gallery" },
            { place: "2nd", prize: "$30K", name: "Elisa", author: "Jon McBee", desc: "Visual programming for kids - snap blocks, Claude builds the real code", link: "https://cerebralvalley.ai/e/claude-code-hackathon/hackathon/gallery" },
            { place: "3rd", prize: "$10K", name: "postvisit.ai", author: "Michal Nedoszytko", desc: "Turns visit transcripts into personalized health guidance - built by a cardiologist", link: "https://cerebralvalley.ai/e/claude-code-hackathon/hackathon/gallery" },
            { place: "Creative", prize: "$5K", name: "Conductr", author: "Asep Bagja Priandana", desc: "Play MIDI chords, Claude directs a generative band at ~15ms latency", link: "https://cerebralvalley.ai/e/claude-code-hackathon/hackathon/gallery" },
            { place: "Keep Thinking", prize: "$5K", name: "TARA", author: "Kyeyune Kazibwe", desc: "Dashcam footage to infrastructure investment recommendations - tested in Uganda", link: "https://cerebralvalley.ai/e/claude-code-hackathon/hackathon/gallery" },
          ].map((w) => (
            <a
              key={w.name}
              href={w.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="shrink-0 w-20 text-center">
                <div className="text-sm font-bold text-aurora-cyan">{w.place}</div>
                <div className="text-xs text-white/40">{w.prize}</div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white text-lg">{w.name}</span>
                  <span className="text-white/40 text-sm">by {w.author}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-claude-coral transition-colors" />
                </div>
                <p className="text-white/60 text-sm mt-1">{w.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Slide>,

    // 8. News: Opus 4.6
    <Slide key="opus">
      <div className="text-center max-w-4xl">
        <Cpu className="w-16 h-16 text-aurora-purple mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Claude <span className="gradient-text">Opus 4.6</span>
        </h2>
        <p className="text-aurora-cyan font-mono text-sm mb-8">February 5, 2026</p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Capabilities</h3>
            <ul className="space-y-2 text-white/70">
              <li>1M token context window (beta)</li>
              <li>128K max output tokens (2x vs 4.5)</li>
              <li>Adaptive thinking replaces manual budget_tokens</li>
              <li>Effort parameter GA: low, medium, high, max</li>
              <li>Context compaction for infinite conversations</li>
              <li>Fast mode: 2.5x faster at 6x price</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Benchmark highlights vs 4.5</h3>
            <ul className="space-y-2 text-white/70">
              <li>ARC AGI 2: 68.8% <span className="text-aurora-green">(+31.2)</span></li>
              <li>BrowseComp: 84.0% <span className="text-aurora-green">(+16.2)</span></li>
              <li>Humanity&apos;s Last Exam: 40.0% <span className="text-aurora-green">(+9.2)</span></li>
              <li>OSWorld: 72.7% <span className="text-aurora-green">(+6.4)</span></li>
              <li>Terminal-Bench 2.0: 65.4% <span className="text-aurora-green">(+5.6)</span></li>
              <li>GPQA Diamond: 91.3% <span className="text-aurora-green">(+4.3)</span></li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // 9. News: Sonnet 4.6
    <Slide key="sonnet">
      <div className="text-center max-w-4xl">
        <Cpu className="w-16 h-16 text-aurora-cyan mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Claude <span className="gradient-text">Sonnet 4.6</span>
        </h2>
        <p className="text-aurora-cyan font-mono text-sm mb-8">February 17, 2026</p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Capabilities</h3>
            <ul className="space-y-2 text-white/70">
              <li>1M token context window (beta)</li>
              <li>Within 1-2 pts of Opus on SWE-bench</li>
              <li>Preferred over Opus 4.5 59% of the time</li>
              <li>Effort parameter now on Sonnet too</li>
              <li>Major prompt injection resistance gains</li>
              <li>Adaptive thinking supported</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">What changed for users</h3>
            <ul className="space-y-2 text-white/70">
              <li>Default model for Free and Pro plans</li>
              <li>Free tier: file creation, connectors, skills</li>
              <li>Same pricing as Sonnet 4.5</li>
              <li>OSWorld: 72.5% <span className="text-aurora-green">(+11.1 vs 4.5)</span></li>
              <li>SWE-bench: 79.6% <span className="text-aurora-green">(+2.4 vs 4.5)</span></li>
              <li>+15 pts on heavy reasoning Q&A vs 4.5</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // 10. Claude Code: headline
    <Slide key="cc-headline">
      <div className="text-center max-w-4xl">
        <Terminal className="w-16 h-16 text-terminal-green mx-auto mb-8 opacity-80" />
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Claude Code <span className="gradient-text">updates</span>
        </h2>
        <p className="text-xl text-white/50 mb-8">v2.1.45 - v2.1.63 (Jan-Feb 2026)</p>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-white">19</div>
            <div className="text-white/50 text-sm">releases</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-white">4%</div>
            <div className="text-white/50 text-sm">of GitHub commits</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-white">$2.5B</div>
            <div className="text-white/50 text-sm">ARR</div>
          </div>
        </div>
      </div>
    </Slide>,

    // 11. Claude Code: Agent Teams
    <Slide key="cc-teams">
      <div className="text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Agent Teams
        </h2>
        <p className="text-aurora-cyan font-mono text-sm mb-8">research preview</p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-4">
            <p className="text-lg text-white/80">
              A lead agent coordinates multiple teammates that work in parallel, each in its own context window and git worktree.
            </p>
            <ul className="space-y-2 text-white/60">
              <li>Shared task list with dependency tracking</li>
              <li>Teammates send messages to each other</li>
              <li>Each teammate has full tool access</li>
              <li>Works on Bedrock, Vertex, and Foundry</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 font-mono text-sm">
            <p className="text-terminal-green mb-2">// settings.json</p>
            <p className="text-white/70">{'{'}</p>
            <p className="text-white/70 pl-4">&quot;env&quot;: {'{'}</p>
            <p className="text-aurora-cyan pl-8">&quot;CLAUDE_CODE_EXPERIMENTAL<br/>_AGENT_TEAMS&quot;: &quot;true&quot;</p>
            <p className="text-white/70 pl-4">{'}'}</p>
            <p className="text-white/70">{'}'}</p>
          </div>
        </div>
      </div>
    </Slide>,

    // 12. Claude Code: /simplify & /batch
    <Slide key="cc-skills">
      <div className="text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          <span className="font-mono text-terminal-green">/simplify</span> &amp; <span className="font-mono text-terminal-green">/batch</span>
        </h2>
        <p className="text-white/50 text-sm mb-8">v2.1.63 - Boris Cherny: &quot;I have been using both daily&quot;</p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3">/simplify</h3>
            <p className="text-white/60 mb-4">Post-implementation cleanup before opening a PR</p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Spawns 3 parallel agents: reuse, quality, efficiency</li>
              <li>Aggregates findings and applies fixes</li>
              <li className="font-mono text-aurora-cyan text-xs">/simplify focus on memory efficiency</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3">/batch</h3>
            <p className="text-white/60 mb-4">Large-scale parallelizable code migrations</p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Decomposes work into 5-30 independent units</li>
              <li>One agent per unit in isolated worktrees</li>
              <li className="font-mono text-aurora-cyan text-xs">/batch replace all uses of lodash with native</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // 13. Claude Code: Auto-memory & worktrees
    <Slide key="cc-memory">
      <div className="text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Memory &amp; isolation
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3">Auto-memory</h3>
            <p className="text-white/60 text-sm mb-4">Claude remembers what it learns across sessions</p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Build commands, test conventions, code style</li>
              <li>Debugging solutions, architecture notes</li>
              <li>Stored per-project in <span className="font-mono text-aurora-cyan">MEMORY.md</span></li>
              <li>Shared across worktrees of same repo</li>
              <li>Manage with <span className="font-mono text-aurora-cyan">/memory</span></li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3">Worktree isolation</h3>
            <p className="text-white/60 text-sm mb-4">Parallel sessions without conflicts</p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>CLI: <span className="font-mono text-aurora-cyan">claude --worktree</span></li>
              <li>Agent defs: <span className="font-mono text-aurora-cyan">isolation: worktree</span></li>
              <li>Auto-cleanup if agent makes no changes</li>
              <li>Background agents with <span className="font-mono text-aurora-cyan">background: true</span></li>
              <li>Kill with <span className="font-mono text-aurora-cyan">Ctrl+F</span></li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // 14. Claude Code: More highlights
    <Slide key="cc-more">
      <div className="text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          More highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <ul className="space-y-3 text-white/70 text-lg">
            <li><span className="text-white font-medium">Remote Control</span> - continue sessions from phone or browser, your local env stays available</li>
            <li><span className="text-white font-medium">HTTP hooks</span> - POST JSON to URLs, not just shell commands</li>
            <li><span className="text-white font-medium">Context compaction</span> - server-side summarization for effectively infinite conversations</li>
          </ul>
          <ul className="space-y-3 text-white/70 text-lg">
            <li><span className="text-white font-medium">Plugin marketplace</span> - custom registries, version pinning</li>
            <li><span className="text-white font-medium">50+ memory leaks fixed</span> - long sessions are stable now</li>
            <li><span className="text-white font-medium">~500ms faster startup</span> - deferred imports, fewer HTTP calls</li>
            <li><span className="text-white font-medium">/voice</span> - talk to Claude Code, fresh out of the oven</li>
          </ul>
        </div>
      </div>
    </Slide>,

    // 15. Platform Updates
    <Slide key="platform">
      <div className="text-center max-w-4xl">
        <Rocket className="w-16 h-16 text-claude-coral mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Platform updates
        </h2>
        <div className="space-y-3">
          {[
            { date: "Feb 17", title: "API tools GA", desc: "Code execution, memory, tool search, programmatic tool calling" },
            { date: "Feb 17", title: "Dynamic filtering", desc: "More accurate and token-efficient web search/fetch" },
            { date: "Feb 19", title: "Claude in PowerPoint", desc: "MCP connectors, 2x usage through March 19 (Pro plan)" },
            { date: "Feb 19", title: "Excel MCP connectors", desc: "S&P Global, LSEG, Daloopa, PitchBook, Moody's, FactSet" },
            { date: "Feb 25", title: "Cowork: Scheduled Tasks", desc: "Recurring automation, plugins for Jira, GitHub, Figma" },
            { date: "Feb 25", title: "Free Max Plan", desc: "6 months free for open source maintainers" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 bg-white/5 rounded-xl px-5 py-3 border border-white/10 text-left">
              <span className="shrink-0 text-aurora-cyan font-mono text-sm w-14 pt-0.5">{item.date}</span>
              <div>
                <span className="text-white font-medium">{item.title}</span>
                <span className="text-white/50 text-sm ml-2">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>,

    // Trends: title
    <Slide key="trends-title">
      <div className="text-center">
        <TrendingUp className="w-16 h-16 text-aurora-green mx-auto mb-8 opacity-80" />
        <h2 className="text-5xl md:text-7xl font-bold text-white">
          <span className="gradient-text">Trends</span>
        </h2>
      </div>
    </Slide>,

    // Trend: CLIs over MCPs
    <Slide key="clis-over-mcps">
      <div className="text-center max-w-4xl">
        <TerminalSquare className="w-16 h-16 text-aurora-green mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          CLIs over MCPs
        </h2>
        <p className="text-white/50 mb-8">CLIs feel natural to coding agents in the terminal</p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-4">
            <p className="text-lg text-white/80">
              Tools are shipping CLIs that agents can use directly, instead of (or alongside) MCP servers. CLIs are simpler to invoke, easier to test, and already how developers work.
            </p>
            <p className="text-white/60">
              Many now include <span className="font-mono text-aurora-cyan">install skills</span> commands that add Claude Code skills automatically.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { name: "Obsidian", detail: "CLI + skills for vault management" },
              { name: "Playwright", detail: "CLI with install-skills for browser testing" },
              { name: "Hugging Face", detail: "CLI for model/dataset operations" },
              { name: "Microsoft Aspire", detail: "CLI for .NET cloud-native apps" },
            ].map((tool) => (
              <div key={tool.name} className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                <Wrench className="w-4 h-4 text-aurora-cyan mt-1 shrink-0" />
                <div>
                  <span className="text-white font-medium">{tool.name}</span>
                  <span className="text-white/50 text-sm ml-2">{tool.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>,

    // Trend: CLAUDE.md research
    <Slide key="claudemd">
      <div className="text-center max-w-4xl">
        <FileText className="w-16 h-16 text-aurora-purple mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Rethinking <span className="font-mono text-terminal-green">CLAUDE.md</span>
        </h2>
        <p className="text-white/50 mb-8">New research challenges common practices</p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">The study</h3>
            <p className="text-white/60 text-sm mb-4">
              &quot;Evaluating AGENTS.md&quot; (arXiv 2602.11988) tested context files across 5,694 PRs from 12 repositories.
            </p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>LLM-generated context files <span className="text-claude-coral font-medium">decrease performance by ~3%</span></li>
              <li>All context files increase tool steps by 2-4 and <span className="text-claude-coral font-medium">costs by 20%+</span></li>
              <li>Agents are highly compliant with instructions, but broader exploration rarely helps</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">The new trend</h3>
            <p className="text-white/60 text-sm mb-4">
              Smaller CLAUDE.md files that only contain what the agent can&apos;t discover on its own.
            </p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><span className="text-claude-coral">Skip:</span> project structure, frameworks, file layout (all discoverable)</li>
              <li><span className="text-aurora-green">Keep:</span> non-obvious conventions, things Claude frequently gets wrong</li>
              <li><span className="text-aurora-green">Keep:</span> team-specific patterns, CI quirks, gotchas</li>
            </ul>
            <a
              href="https://arxiv.org/abs/2602.11988"
              target="_blank"
              rel="noopener noreferrer"
              className="text-claude-coral hover:text-claude-coral-dark transition-colors flex items-center gap-2 text-sm mt-4"
            >
              Read the paper <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </Slide>,

    // Trend: Agentic tooling ecosystem
    <Slide key="agentic-tooling">
      <div className="text-center max-w-4xl">
        <Layers className="w-16 h-16 text-aurora-cyan mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Agentic tooling <span className="gradient-text">ecosystem</span>
        </h2>
        <p className="text-white/50 mb-8">New tools built specifically for coding agents</p>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">Kintsugi</h3>
            <p className="text-aurora-cyan text-xs font-mono mb-3">SonarSource</p>
            <p className="text-white/60 text-sm mb-3">Desktop ADE: visual orchestration, code review, quality checks for CLI agents</p>
            <p className="text-white/40 text-xs italic">&quot;You own the code generated by agents&quot;</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">CMUX</h3>
            <p className="text-aurora-cyan text-xs font-mono mb-3">Manaflow</p>
            <p className="text-white/60 text-sm mb-3">Terminal built for agents: notification rings, vertical tabs with git branches, embedded browser</p>
            <a
              href="https://www.cmux.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-claude-coral hover:text-claude-coral-dark transition-colors flex items-center gap-2 text-xs"
            >
              cmux.dev <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">Pencil.dev</h3>
            <p className="text-aurora-cyan text-xs font-mono mb-3">Design tool</p>
            <p className="text-white/60 text-sm mb-3">Infinite-canvas design inside your IDE, MCP integration with coding agents</p>
            <a
              href="https://youtu.be/DFcvz2kcR74?si=f2J1OoN06_Hfa3tW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-claude-coral hover:text-claude-coral-dark transition-colors flex items-center gap-2 text-xs"
            >
              Watch demo <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </Slide>,

    // Trend: MCP Apps
    <Slide key="mcp-apps">
      <div className="text-center max-w-4xl">
        <Puzzle className="w-16 h-16 text-aurora-green mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          <span className="gradient-text">MCP Apps</span>
        </h2>
        <p className="text-white/50 mb-8">UI capabilities for MCP servers</p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-4">
            <p className="text-lg text-white/80">
              MCP servers can now return interactive UI components that render directly in conversations.
            </p>
            <ul className="space-y-2 text-white/70">
              <li>Dashboards, forms, visualizations, multi-step workflows</li>
              <li>Works across MCP clients without client-specific code</li>
              <li>Official extension to the MCP spec</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <p className="text-white/60 text-sm mb-3">Ecosystem</p>
            <ul className="space-y-2 text-white/70">
              <li>MCP Registry: open catalog for discovery</li>
              <li>24+ apps on getmcpapps.com marketplace</li>
              <li>Public and private sub-registries</li>
            </ul>
            <a
              href="https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-claude-coral hover:text-claude-coral-dark transition-colors flex items-center gap-2 text-sm mt-4"
            >
              Read the announcement <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </Slide>,

    // Speakers title
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
          <p className="text-xl md:text-2xl text-aurora-cyan font-light leading-relaxed">
            {speaker.title}
          </p>
          {speaker.slides && (
            <a
              href={speaker.slides}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl border border-white/10 text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              View slides
            </a>
          )}
        </div>
      </Slide>
    )),
  ];

  return <Presentation slides={slides} />;
}
