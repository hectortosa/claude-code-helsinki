# Claude Code Community Helsinki Website

## Project Purpose

This is the official website for the Claude Code Community Helsinki - an Anthropic-supported initiative connecting creators, builders, and professionals in the Nordic region to exchange knowledge about AI-assisted development.

**Value Proposition**: "Connect. Build. Share." - A community for exchanging knowledge, tips, ways of working, sharing findings, demos, networking, and teaching around Claude Code and AI development.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS custom properties
- **Animations**: Framer Motion
- **Forms**: Web3Forms (free tier)
- **Newsletter**: Buttondown (free tier)
- **Calendar**: Luma embed
- **Hosting**: Vercel (Hobby tier)
- **Fonts**: Inter + JetBrains Mono

## Design Philosophy

The design combines Claude/Anthropic aesthetics with Finnish minimalism:

- **Claude warmth**: Terra cotta coral accents (#da7756), serif typography influences
- **Finnish minimalism**: Clean lines, generous whitespace, functional design
- **Aurora touches**: Subtle Northern Lights gradient animations
- **Developer-friendly**: Terminal-style interactive elements

## Project Structure

```
/app                 → Next.js App Router pages
/components          → Reusable React components
/lib                 → Utilities and helpers
/styles              → Global styles and design tokens
/public              → Static assets
```

## Key Features

1. **Terminal Subscribe Widget** - Interactive CLI-style subscription
2. **Luma Calendar Integration** - Embedded event calendar
3. **Aurora Animations** - Subtle Northern Lights effects
4. **Responsive Design** - Mobile-first approach
5. **Accessibility** - WCAG compliant

## Design Alternatives

- **Design A** (Primary): Elegant Claude + Finnish minimalism
- **Design B** (Future): Pixel art game with Clawd mascot (arrow key controllable)

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
NEXT_PUBLIC_BUTTONDOWN_API_KEY=your_key_here
NEXT_PUBLIC_LUMA_CALENDAR_ID=your_calendar_id
```

## Commit Convention

Use conventional commits:
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation
- `style:` Styling changes
- `refactor:` Code refactoring
- `test:` Tests
- `chore:` Maintenance

## Resources

- [Anthropic Brand Guidelines](https://beginswithai.com/claude-ai-logo-color-codes-fonts-downloadable-assets/)
- [Luma Integration Examples](https://github.com/luma-team/examples)
- [Helsinki Visual Identity](https://www.hel.fi/en/decision-making/information-on-helsinki/design-and-digitalisation/helsinki-brand-and-visual-identity)
