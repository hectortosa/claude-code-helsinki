---
name: slides
description: Create and manage presentation slides for Claude Code Helsinki meetups. Each presentation lives at /slides/{YYYYMMDD} and reuses a shared aurora + forest backdrop. Usage - "/slides new meetup 20260428" to scaffold a new presentation, "/slides edit 20260305" to work on existing content.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, WebSearch, WebFetch, Agent
---

# Slides Skill

## Overview

Creates interactive web-based presentations for Claude Code Helsinki meetups. Each presentation is a Next.js page at `/slides/{date}` that uses the site's aurora background and pine forest as a persistent backdrop, with slide content fading in/out on top.

## Architecture

The presentation system has two layers:

### Shared components (do not modify unless asked)

| File | Purpose |
|------|---------|
| `src/app/slides/layout.tsx` | Minimal layout for all presentations (no header/footer) |
| `src/components/slides/Presentation.tsx` | Navigation engine: keyboard arrows/space, dot indicators, slide counter, fade transitions. Renders a single persistent AuroraBackground + ForestDivider, with slide content as opacity-transitioning layers on top. |
| `src/components/slides/Slide.tsx` | Content wrapper for individual slides (centers content, no background) |
| `src/components/layout/SiteShell.tsx` | Hides Header/Footer on `/slides/*` routes, forces dark mode on `<html>` |

### Per-meetup page

Each presentation is a single file: `src/app/slides/{YYYYMMDD}/page.tsx`

## Usage

### `/slides new meetup {YYYYMMDD}`

Scaffold a new presentation. Steps:

1. Create `src/app/slides/{YYYYMMDD}/page.tsx`
2. Ask the user for: meetup number, date, speaker lineup (names + talk titles), and any special content themes
3. Generate the slide structure following the standard pattern (see Template below)
4. Run `npm run build` in the repo to verify

### `/slides edit {YYYYMMDD}`

Work on existing presentation content:

1. Read `src/app/slides/{YYYYMMDD}/page.tsx`
2. Discuss what needs to change with the user
3. Edit content, run build to verify

## Template Structure

A typical meetup presentation follows this slide order:

```
1. Title slide - meetup number, "Claude Code Helsinki", date
2. Community - "Built by all of us" messaging
3. Resources - Website + Discord
4. Stats - Community numbers (placeholders until filled)
5. This event - Event-specific details (placeholders until filled)
6-N. News/content slides - Claude Code news, trends, demos
N+1. Speakers title - "Tonight's speakers" transition
N+2..end. Individual speaker slides - name, initials avatar, talk title
```

## Code Pattern

Each slide is a `<Slide>` wrapping content JSX. The `<Presentation>` component receives an array of slides.

```tsx
"use client";

import { Presentation } from "@/components/slides/Presentation";
import { Slide } from "@/components/slides/Slide";
// Import icons from lucide-react as needed

const speakers = [
  { name: "Speaker Name", title: "Talk Title" },
];

export default function Meetup{YYYYMMDD}() {
  const slides = [
    // Title
    <Slide key="title">
      <div className="text-center max-w-4xl">
        <p className="text-aurora-cyan font-mono text-lg mb-4 tracking-widest uppercase">
          Meetup #N
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          Claude Code
          <span className="block gradient-text">Helsinki</span>
        </h1>
        <p className="text-2xl text-white/60 font-light">Date</p>
      </div>
    </Slide>,

    // ... more content slides ...

    // Speaker slides
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
```

## Design Tokens

All slides render in forced dark mode. Use these classes:

- **Headings**: `text-white`, `gradient-text` for emphasis
- **Subtext**: `text-white/60`, `text-white/70`
- **Accent colors**: `text-aurora-cyan`, `text-aurora-green`, `text-aurora-purple`, `text-claude-coral`
- **Mono text**: `font-mono text-aurora-cyan` for dates, labels
- **Cards**: `bg-white/5 rounded-2xl border border-white/10`
- **Icons**: Import from `lucide-react`, size `w-12 h-12` to `w-16 h-16`, with `opacity-80`
- **Typography**: titles `text-4xl md:text-5xl` to `text-6xl md:text-8xl`, body `text-lg` to `text-2xl`

## Content Research

When creating news/content slides, use WebSearch and WebFetch to find the latest:
- Claude Code changelog and releases
- Anthropic announcements and blog posts
- Model updates
- Relevant AI development trends

Reference the presentation prep notes if available at `events/{YYYY.MM.DD}/Presentation Prep - Claude Code News.md` in the ambient-context project root.

## Verification

Always run `npm run build` in the repo directory after changes to confirm no errors:
```bash
cd /Users/codesharegrow/ambient-context/claude-code-helsinki/repos/claude-code-helsinki && npm run build
```
