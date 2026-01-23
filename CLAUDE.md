# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Official website for Claude Code Helsinki - an Anthropic-supported community connecting creators and builders in the Nordic region around AI-assisted development.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Development server (http://localhost:3000)
npm run build        # Production build (run before committing)
npm run lint         # ESLint check
```

No test suite - verify changes with `npm run build` and manual browser testing.

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 with custom design tokens
- **Icons**: lucide-react
- **Calendar**: Luma embed (https://luma.com/ClaudeCodeHelsinki)
- **Signup**: API-based with Vercel Blob storage (pending → approved → processed)

## Architecture

### Key Components

| Component | Purpose |
|-----------|---------|
| `src/components/terminal/Terminal.tsx` | Interactive CLI widget with `help`, `join`, `events`, `about`, `clear`, `theme` commands. Join flow submits to `/api/join`. |
| `src/app/join/page.tsx` | Form-based join page, also submits to `/api/join`. |
| `src/app/api/join/route.ts` | POST endpoint for join requests. Validates input, checks for duplicates, stores as pending in Vercel Blob. |
| `src/components/aurora/AuroraBackground.tsx` | Theme-aware hero background: aurora gradient (dark) or winter sky with snow (light) |
| `src/components/snow/SnowParticles.tsx` | CSS-only falling snowflakes, visible only in light mode (`dark:hidden`) |
| `src/components/forest/` | Pine tree forest divider SVG |
| `src/components/layout/Header.tsx` | Navigation with theme toggle (Snowflake/AudioLines icons) |

### Theme System

- **Light mode**: Winter/snow theme - gray-blue sky gradient + falling snowflakes
- **Dark mode**: Aurora/northern lights theme - animated gradient
- Toggle via `document.documentElement.classList.toggle("dark")`
- Icons: `Snowflake` (shown in dark mode to switch to light), `AudioLines` (shown in light mode to switch to dark)

### Color Tokens (defined in tailwind.config.ts)

- `claude-coral`, `claude-cream`, `claude-text`, `claude-dark` - Brand colors
- `aurora-green`, `aurora-cyan`, `aurora-purple` - Northern lights
- `terminal-bg`, `terminal-green`, `terminal-text` - Terminal widget

### Path Alias

`@/*` maps to `./src/*` - use for all imports: `import { cn } from "@/lib/utils"`

## Key Files

- `src/lib/utils.ts` - `cn()` utility, `NAV_ITEMS`, `LUMA_CONFIG`
- `src/lib/constants.ts` - Terminal command responses
- `src/app/globals.css` - Custom CSS classes (`.aurora-gradient`, `.winter-sky`, `.terminal`, `.btn-primary`)
- `src/app/api/join/route.ts` - Join request API endpoint

## Join Request Flow

Uses `@vercel/blob` for temporary storage of pending requests (URLs are public but unguessable).

1. **User submits** via terminal → stored in Blob as `join-requests/{id}.json` with status `pending`
2. **Admin approves** via curl → changes status to `approved`
3. **`/process-members` runs** (in claude-code-helsinki-members) → adds to `members.json`, sends welcome email, deletes blob
4. **PII only persists** in private `members.json`

Request fields: `id`, `name`, `email`, `github?`, `linkedin?`, `x?`, `mastodon?`, `role`, `interests`, `newsletter`, `status`, `createdAt`, `updatedAt`

## Git Workflow

- **Branch protection**: `main` requires PRs (cannot push directly)
- **Branches**: `feature/description` or `claude/description`
- **Commits**: Use conventional commits (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`)

## Code Patterns

### Client Components
Mark with `"use client"` only when using hooks, event handlers, or browser APIs.

### Conditional Theme Styling
```tsx
// Light mode only
<div className="block dark:hidden">...</div>

// Dark mode only
<div className="hidden dark:block">...</div>
```

### Class Merging
```tsx
import { cn } from "@/lib/utils";
<div className={cn("base-classes", isActive && "active-classes")} />
```

## Environment Variables

Copy `.env.example` to `.env.local`:

- `BLOB_READ_WRITE_TOKEN` - Required for join API (Vercel Blob storage)
