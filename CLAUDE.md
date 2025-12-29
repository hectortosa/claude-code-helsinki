# Claude Code Community Helsinki Website

## Project Purpose

This is the official website for the Claude Code Community Helsinki - an Anthropic-supported initiative connecting creators, builders, and professionals in the Nordic region to exchange knowledge about AI-assisted development.

**Value Proposition**: "Connect. Build. Share." - A community for exchanging knowledge, tips, ways of working, sharing findings, demos, networking, and teaching around Claude Code and AI development.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS + CSS custom properties
- **Animations**: Framer Motion
- **Utilities**: clsx + tailwind-merge
- **Forms**: Web3Forms (free tier)
- **Newsletter**: Buttondown (free tier)
- **Calendar**: Luma embed
- **Hosting**: Vercel (Hobby tier)
- **Fonts**: Inter (sans-serif) + JetBrains Mono (monospace)

## Design Philosophy

The design combines Claude/Anthropic aesthetics with Finnish minimalism:

- **Claude warmth**: Terra cotta coral accents (#da7756), serif typography influences
- **Finnish minimalism**: Clean lines, generous whitespace, functional design
- **Aurora touches**: Subtle Northern Lights gradient animations
- **Developer-friendly**: Terminal-style interactive elements

## Project Structure

```
/
├── .claude/                 → Claude Code configuration
│   └── settings.json
├── .github/                 → GitHub templates and workflows
│   └── ISSUE_TEMPLATE/
├── src/
│   ├── app/                → Next.js App Router pages
│   │   ├── about/          → About page
│   │   ├── events/         → Events calendar page
│   │   ├── guidelines/     → Community guidelines
│   │   ├── join/           → Join/subscribe page
│   │   ├── resources/      → Resources page
│   │   ├── globals.css     → Global styles
│   │   ├── layout.tsx      → Root layout with metadata
│   │   └── page.tsx        → Homepage
│   ├── components/         → Reusable React components
│   │   ├── aurora/         → Aurora background animations
│   │   │   └── AuroraBackground.tsx
│   │   ├── layout/         → Layout components
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   ├── luma/           → Luma calendar integration
│   │   │   └── LumaCalendar.tsx
│   │   └── terminal/       → Interactive terminal widget
│   │       └── Terminal.tsx
│   └── lib/                → Utilities and helpers
│       ├── constants.ts    → App constants and configuration
│       └── utils.ts        → Utility functions
├── .env.example            → Environment variables template
├── .eslintrc.json          → ESLint configuration
├── .gitignore             → Git ignore rules
├── CLAUDE.md              → This file (AI assistant guide)
├── next.config.mjs        → Next.js configuration
├── package.json           → Dependencies and scripts
├── postcss.config.mjs     → PostCSS configuration
├── tailwind.config.ts     → Tailwind CSS configuration
└── tsconfig.json          → TypeScript configuration
```

## Architecture Patterns

### Component Organization

1. **Client vs Server Components**
   - Mark client components with `"use client"` directive
   - Use client components for: interactivity, hooks, event handlers
   - Use server components for: static content, data fetching, SEO

2. **Component Structure**
   ```tsx
   // Client component example
   "use client";

   import { useState } from "react";
   import { cn } from "@/lib/utils";

   export function MyComponent() {
     // Component logic
   }
   ```

3. **File Naming**
   - Components: PascalCase (e.g., `Terminal.tsx`, `AuroraBackground.tsx`)
   - Utilities: camelCase (e.g., `utils.ts`, `constants.ts`)
   - Pages: lowercase (e.g., `page.tsx`, `layout.tsx`)

### Styling Conventions

1. **Tailwind CSS + Custom Classes**
   - Use Tailwind utility classes for most styling
   - Custom classes defined in `globals.css` for reusable patterns
   - Use `cn()` utility for conditional class merging

2. **Color System**
   - Claude colors: `claude-coral`, `claude-cream`, `claude-text`, `claude-dark`
   - Finnish colors: `finnish-blue`, `finnish-white`
   - Aurora colors: `aurora-green`, `aurora-cyan`, `aurora-purple`
   - Terminal colors: `terminal-bg`, `terminal-green`, `terminal-text`

3. **Custom Components (globals.css)**
   - `.aurora-gradient` - Aurora background animation
   - `.terminal` - Terminal widget styling
   - `.btn-primary` / `.btn-secondary` - Button variants
   - `.wave-divider` - Wave separator with SVG background

4. **Typography**
   - Sans-serif: Inter (via Google Fonts)
   - Monospace: JetBrains Mono (via Google Fonts)
   - Font variables: `--font-inter`, `--font-mono`

### State Management

- Local component state with `useState`
- No global state management (not needed for current scope)
- Form state managed in component (Terminal email subscription)

### Path Aliases

- `@/*` maps to `./src/*` (configured in `tsconfig.json`)
- Example: `import { cn } from "@/lib/utils"`

## Key Features

### 1. Terminal Subscribe Widget

Interactive CLI-style subscription interface in `src/components/terminal/Terminal.tsx`:

- Commands: `help`, `join`, `events`, `about`, `clear`, `theme`
- Email subscription flow with validation
- Dark mode toggle via `theme` command
- Terminal aesthetics (cursor blink, command prompt)

**Usage in pages:**
```tsx
import { Terminal } from "@/components/terminal/Terminal";

<Terminal />
```

### 2. Luma Calendar Integration

Embedded event calendar from Luma in `src/components/luma/LumaCalendar.tsx`:

- Calendar URL: `https://lu.ma/ClaudeCommunityHelsinki`
- Embed configuration in `src/lib/utils.ts` (`LUMA_CONFIG`)
- Responsive iframe container with padding

### 3. Aurora Background

Animated Northern Lights effect in `src/components/aurora/AuroraBackground.tsx`:

- Configurable intensity: `subtle`, `normal`, `strong`
- Gradient animation using CSS keyframes
- Used on hero section of homepage

**Usage:**
```tsx
<AuroraBackground intensity="subtle">
  {/* Your content */}
</AuroraBackground>
```

### 4. Responsive Design

- Mobile-first approach with Tailwind breakpoints
- Responsive typography (`text-4xl md:text-6xl`)
- Flexible layouts (`flex-col sm:flex-row`)
- Container utility for max-width constraints

### 5. Accessibility

- Semantic HTML elements
- Focus states with custom ring utilities
- ARIA attributes where needed
- Keyboard navigation support
- Screen reader friendly

## Configuration Files

### tsconfig.json

- Strict TypeScript enabled
- Path aliases: `@/*` → `./src/*`
- Module resolution: bundler
- JSX: preserve (Next.js handles it)

### tailwind.config.ts

- Custom color palette (Claude, Finnish, Aurora, Terminal)
- Custom fonts (Inter, JetBrains Mono)
- Custom animations (aurora, terminal-blink, fade-in, slide-up)
- Dark mode: class-based (`darkMode: "class"`)

### next.config.mjs

- React Strict Mode enabled
- Minimal configuration (leverages Next.js defaults)

### Environment Variables

Create `.env.local` with:

```bash
# Web3Forms - Get your key at https://web3forms.com/
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here

# Buttondown Newsletter - Get your key at https://buttondown.com/
NEXT_PUBLIC_BUTTONDOWN_API_KEY=your_api_key_here

# Luma Calendar
NEXT_PUBLIC_LUMA_CALENDAR_URL=https://lu.ma/ClaudeCommunityHelsinki
```

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Code Conventions

### TypeScript

- Use strict type checking
- Define interfaces for component props
- Use `type` for simple types, `interface` for object shapes
- Avoid `any` - use `unknown` or proper types

### React Best Practices

1. **Functional Components**
   - Always use function components (not class components)
   - Use hooks for state and side effects

2. **Props**
   ```tsx
   interface MyComponentProps {
     title: string;
     count?: number; // Optional
     onAction: () => void;
   }

   export function MyComponent({ title, count = 0, onAction }: MyComponentProps) {
     // Component implementation
   }
   ```

3. **Hooks**
   - `useState` for local state
   - `useRef` for DOM references and mutable values
   - `useEffect` for side effects (scroll, event listeners)

4. **Event Handlers**
   - Prefix with `handle`: `handleClick`, `handleSubmit`
   - Use arrow functions or useCallback when needed

### Import Order

1. React imports
2. Third-party libraries
3. Internal components (via `@/components`)
4. Internal utilities (via `@/lib`)
5. Types/interfaces
6. Constants

Example:
```tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import type { MyType } from "./types";
```

### CSS/Styling

1. **Tailwind First**
   - Use Tailwind utilities for most styling
   - Only create custom classes for reusable patterns

2. **Responsive Design**
   ```tsx
   <div className="text-base md:text-lg lg:text-xl">
     Responsive text
   </div>
   ```

3. **Conditional Classes**
   ```tsx
   import { cn } from "@/lib/utils";

   <div className={cn(
     "base-classes",
     isActive && "active-classes",
     variant === "primary" && "primary-classes"
   )}>
   ```

## Testing & Quality

- ESLint configured with Next.js recommended rules
- Type checking with TypeScript strict mode
- Build verification: `npm run build`

## Deployment

### Vercel (Production)

1. Connected to GitHub repository
2. Automatic deployments on push to main branch
3. Preview deployments for pull requests
4. Environment variables configured in Vercel dashboard

### Build Process

```bash
# Verify build locally before pushing
npm run build

# Test production build locally
npm start
```

## Git Workflow

### Commit Convention

Use conventional commits for clear history:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, no logic change)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding or updating tests
- `chore:` Maintenance tasks (dependencies, config)

**Examples:**
```bash
git commit -m "feat: add terminal dark mode toggle"
git commit -m "fix: resolve terminal scroll issue"
git commit -m "docs: update CLAUDE.md with component patterns"
git commit -m "style: format Terminal component with prettier"
git commit -m "chore: update dependencies to latest versions"
```

### Branch Strategy

- `main` - Production branch (protected)
- Feature branches: `feature/description` or `claude/description`
- Bug fixes: `fix/description`

## AI Assistant Guidelines

When working on this codebase, AI assistants should:

### 1. Code Style & Patterns

- **Follow existing patterns**: Match the component structure and naming conventions already in use
- **Use TypeScript strictly**: Define proper types and interfaces
- **Leverage utilities**: Use `cn()` for class names, constants from `lib/constants.ts`
- **Keep it simple**: Don't over-engineer - this is a community website, not a complex application

### 2. Component Development

- **Check existing components first**: Reuse patterns from Terminal, AuroraBackground, etc.
- **Client components**: Use `"use client"` only when needed (interactivity, hooks)
- **Props typing**: Always define interfaces for component props
- **Accessibility**: Include proper ARIA labels, keyboard navigation, focus states

### 3. Styling

- **Tailwind first**: Use existing design tokens and utilities
- **Custom colors**: Use the defined color palette (claude-*, finnish-*, aurora-*, terminal-*)
- **Responsive**: Always consider mobile, tablet, desktop views
- **Dark mode**: If adding dark mode support, use `.dark` class selectors

### 4. File Organization

- **Components**: Place in appropriate subfolder (`layout/`, `aurora/`, etc.)
- **Utilities**: Add helper functions to `lib/utils.ts`
- **Constants**: Add configuration to `lib/constants.ts`
- **Pages**: Follow Next.js App Router conventions

### 5. Before Making Changes

1. **Read existing code**: Understand current implementation
2. **Check dependencies**: Use existing libraries when possible
3. **Verify build**: Ensure `npm run build` succeeds
4. **Test locally**: Run `npm run dev` and verify in browser
5. **Lint**: Run `npm run lint` before committing

### 6. Common Tasks

**Adding a new page:**
```bash
# Create page file
src/app/new-page/page.tsx

# Add to navigation (if needed)
# Update src/lib/utils.ts → NAV_ITEMS
```

**Adding a new component:**
```bash
# Create component file
src/components/category/MyComponent.tsx

# Import and use in pages
import { MyComponent } from "@/components/category/MyComponent";
```

**Updating styles:**
```bash
# Global styles
src/app/globals.css

# Component-specific
# Use Tailwind classes in component files
```

### 7. What NOT to Do

- ❌ Don't add unnecessary dependencies
- ❌ Don't create custom solutions when Tailwind suffices
- ❌ Don't ignore TypeScript errors (fix them properly)
- ❌ Don't break existing patterns and conventions
- ❌ Don't commit without testing locally
- ❌ Don't modify production environment variables directly

### 8. Performance Considerations

- Use Next.js Image component for images (when needed)
- Lazy load heavy components with dynamic imports
- Keep client components minimal (prefer server components)
- Optimize animations (use CSS transforms, not layout properties)

## Resources & Links

### Official Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)

### Design Resources

- [Anthropic Brand Guidelines](https://beginswithai.com/claude-ai-logo-color-codes-fonts-downloadable-assets/)
- [Luma Integration Examples](https://github.com/luma-team/examples)
- [Helsinki Visual Identity](https://www.hel.fi/en/decision-making/information-on-helsinki/design-and-digitalisation/helsinki-brand-and-visual-identity)

### Community

- **Luma Calendar**: https://lu.ma/ClaudeCommunityHelsinki
- **Anthropic**: https://anthropic.com
- **Claude AI**: https://claude.ai

## Troubleshooting

### Common Issues

**Build fails:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**TypeScript errors:**
```bash
# Check tsconfig.json is correct
# Ensure all imports use @/ alias correctly
# Verify all types are properly defined
```

**Styling issues:**
```bash
# Clear Tailwind cache
npm run dev
# Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
```

**Environment variables not working:**
```bash
# Ensure .env.local exists (copy from .env.example)
# Restart dev server after changing env vars
# Prefix with NEXT_PUBLIC_ for client-side access
```

## Future Enhancements

- **Design B**: Pixel art game with Clawd mascot (arrow key controllable)
- Event recordings and video library
- Member directory and profiles
- Workshop materials and resources
- Blog/articles section
- Multi-language support (Finnish, Swedish, English)

---

**Last Updated**: 2025-12-29
**Maintained By**: Claude Code Community Helsinki Team
