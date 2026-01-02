# Claude Code Community Helsinki - Project Memory

## Research & Planning Document

This file contains all research, design decisions, and implementation plans for the Claude Code Community Helsinki website.

---

## 1. Project Overview

### Community Purpose
The Claude Code Community in Helsinki is an official Anthropic initiative that:
- Connects creators, builders, and professionals
- Facilitates exchange of knowledge, tips, and ways of working
- Enables sharing of findings and demos
- Provides networking opportunities
- Supports teaching and learning around AI-assisted development

### Content Available
- Luma calendar (embeddable)
- Past events archive
- GitHub Issues-based join flow
- Claude Code-powered member management

### AI-Native Member Management

Instead of traditional form services (Web3Forms, Buttondown), we use an AI-native approach:

**Architecture:**
```
Website Join Form → GitHub Issue (pre-filled)
                         ↓
                    Organizer reviews
                         ↓
                    Claude Code skill "/process-members"
                         ↓
                    Private repo (members.json)
                         ↓
                    Welcome email via Resend
```

**Components:**
- `.github/ISSUE_TEMPLATE/join.yml` - Structured join request form
- `.claude/skills/process-members.md` - Skill for processing approved requests
- `.claude/skills/notify-event.md` - Skill for sending event notifications
- Private repo `claude-community-helsinki-members` - Member data storage

**Required Secrets (local only, never committed):**
- `GITHUB_TOKEN` - For accessing private members repo
- `RESEND_API_KEY` - For sending emails (100 free/day)

**Benefits:**
- No third-party form/newsletter services
- Full control over member data
- Version-controlled member list
- AI-personalized emails
- Dogfooding Claude Code for community management

### Luma Configuration
- **Calendar URL**: https://luma.com/ClaudeCodeHelsinki
- **Calendar ID**: cal-9FcoJqdJCGyefXC
- **Embed URL**: https://lu.ma/embed/calendar/cal-9FcoJqdJCGyefXC/events
- **Past Events**: https://luma.com/ClaudeCodeHelsinki?k=c&period=past

### Future Content
- Videos from meetups
- Presentations and slides
- Transcriptions from past events

---

## 2. Design Research

### Claude/Anthropic Brand Aesthetics

**Sources**:
- [BeginswithAI Brand Analysis](https://beginswithai.com/claude-ai-logo-color-codes-fonts-downloadable-assets/)
- [Geist Agency - Anthropic Work](https://geist.co/work/anthropic)
- [CLAILA - Claude Logo Analysis](https://www.claila.com/blog/claude-logo)

**Color Palette**:
| Element | Hex Code | RGB | Description |
|---------|----------|-----|-------------|
| Primary Logo | #da7756 | 218, 119, 86 | Warm terra cotta - symbolizes warmth, intellect, creativity |
| Chat Accent | #bd5d3a | 189, 93, 58 | Deeper burnt orange |
| Background Light | #eeece2 | 238, 236, 226 | Warm cream |
| Text | #3d3929 | 61, 57, 41 | Dark warm brown |
| Dark Theme BG | #131314 | 19, 19, 20 | Near-black |
| Secondary | #000000 | 0, 0, 0 | Bold black |

**Typography**:
- Logo font: Custom "Copernicus" typeface
- Body text: Serif stack - `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`
- Anthropic uses Styrene (Commercial Type) and Tiempos (Klim) families
- Described as "technically refined and charmingly quirky"

**Design Philosophy**:
- Timeless, thoughtful aesthetic
- Human-centered mission
- Calm, approachable, not cold/futuristic
- Typographic logo with slash (code reference)

### Finnish/Nordic Design Principles

**Sources**:
- [FinnStyle - Minimalism in Finnish Design](https://www.finnstyle.com/minimalism-in-finnish-design.html)
- [Scandinavian Design Standard](https://www.scandinaviastandard.com/what-is-scandinavian-design/)
- [Helsinki Brand Guidelines](https://www.hel.fi/en/decision-making/information-on-helsinki/design-and-digitalisation/helsinki-brand-and-visual-identity/visual-identity-guidelines/use-basic-elements)

**Key Principles**:
- Simplicity, functionality, minimalism
- Clean lines, geometric shapes
- Emphasis on natural materials and light
- "Lagom" - just the right amount
- Nature-inspired elements
- Nothing superfluous - every element serves purpose
- Pioneers: Alvar Aalto, Aino Aalto, Eero Saarinen

**Finnish Flag Colors**:
- Blue (#003580): Represents sky and lakes
- White (#ffffff): Purity, peace, simplicity

**Helsinki Visual Identity**:
- Wave motifs for surface dividing
- Helsinki Grotesk Pro font
- Neutral color palette with blue accents

**Aurora Borealis (Revontulet)**:
- "Fox fire" - Sami legend of fox striking tail on snow
- Colors: Green (atomic oxygen), Blue (molecular nitrogen), Purple
- Visible late August to early April
- Can be seen as far south as Helsinki

### Developer Community Website Best Practices

**Sources**:
- [DEV Community](https://dev.to/)
- [LambdaTest Developer Communities](https://www.lambdatest.com/blog/developer-communities/)
- [DesignRush Community Websites](https://www.designrush.com/best-designs/websites/community)

**Essential Features**:
- Clear value proposition
- Easy onboarding/signup
- Event discovery with prominent calendar
- Content library (talks, presentations)
- Mobile-first, responsive design
- Accessibility (WCAG compliant)

**Engagement Elements**:
- Member directory or stats
- Social proof (company logos, speaker highlights)
- Clear calls-to-action

### Terminal/Console UI Design

**Sources**:
- [FreeCodeCamp Terminal Portfolio Tutorial](https://www.freecodecamp.org/news/how-to-create-an-interactive-terminal-portfolio-website/)
- [GitHub terminal-style-website topic](https://github.com/topics/terminal-style-website)
- [jQuery Terminal](https://terminal.jcubic.pl/)
- [terminal.css Framework](https://terminalcss.xyz/)

**Libraries & Tools**:
- terminal.css - Lightweight CSS framework, themes like Dracula, Gruvbox, Nord
- jQuery Terminal - Full-featured JavaScript library
- React terminal components - TypeScript, styled-components

**Theme Options**:
- Dracula
- Gruvbox
- Nord (fits Finnish aesthetic)
- Custom Claude theme

---

## 3. Free Services Evaluation

### Newsletter/Email Services

| Service | Free Tier | Pros | Cons | Best For |
|---------|-----------|------|------|----------|
| **Buttondown** | 100 subscribers | Privacy-focused, minimalist, dev-built | Limited automation | Dev communities |
| **MailerLite** | 1,000 subscribers | Automation, surveys, landing pages | Learning curve | Feature-rich needs |
| **Substack** | Unlimited | Discovery, simplicity | 10% revenue cut, basic design | Writers |

**Decision**: Buttondown - Aligns with dev-focused community values

### Form Handling Services

| Service | Free Tier | Features | Notes |
|---------|-----------|----------|-------|
| **Formspree** | 50/month | Integrations (Mailchimp, Sheets) | Simple setup |
| **Web3Forms** | 250/month | No signup required | Works anywhere |
| **Netlify Forms** | 100/month | Native if on Netlify | Platform lock-in |

**Decision**: Web3Forms - Higher free tier, no signup needed

### Event Calendar

**Luma Features**:
- Embeddable registration buttons
- Full calendar widget
- Custom styling options
- Two embed types: Button overlay or Event page embed
- [GitHub examples available](https://github.com/luma-team/examples)

### Hosting Evaluation

**Vercel Hobby (Free) Tier**:
| Feature | Limit | Sufficient? |
|---------|-------|-------------|
| Bandwidth | 100 GB/month | ✅ Yes |
| Build minutes | 6,000/month | ✅ Yes |
| Serverless functions | 150K calls | ✅ Yes |
| Custom domains | Free | ✅ Yes |
| Preview deployments | Per commit | ✅ Yes |
| Team collaboration | Solo only | ⚠️ Limitation |
| Commercial use | Prohibited | ⚠️ Check policy |

**Pros**: First-class Next.js support, global CDN, auto-scaling, Git integration
**Cons**: Solo-only, no observability, commercial use restricted

**Decision**: Vercel Hobby tier - Perfect for community site

---

## 4. Design Specifications

### Design A: Elegant Claude + Finnish Minimalism (Primary)

**Color System**:
```css
:root {
  /* Claude Colors */
  --claude-coral: #da7756;
  --claude-coral-dark: #bd5d3a;
  --claude-cream: #eeece2;
  --claude-text: #3d3929;
  --claude-dark: #131314;

  /* Finnish Accents */
  --finnish-blue: #003580;
  --finnish-white: #ffffff;

  /* Aurora Gradient */
  --aurora-start: #00ff87;
  --aurora-mid: #60efff;
  --aurora-end: #b967ff;

  /* Terminal */
  --terminal-bg: #1a1a2e;
  --terminal-green: #00ff41;
  --terminal-text: #e0e0e0;
}
```

**Typography**:
- Headings: Inter or Söhne (system-ui fallback)
- Body: Inter with serif accents for quotes
- Code/Terminal: JetBrains Mono

**Visual Elements**:
1. Aurora header animation (subtle gradient on scroll)
2. Terminal subscription widget (interactive CLI)
3. Wave dividers (Helsinki brand inspired)
4. Generous whitespace
5. Dark/Light mode toggle

**Layout**:
- Max-width container with responsive padding
- 12-column grid system
- Mobile-first breakpoints

### Design B: Pixel Art Game with Clawd (Alternate)

**Clawd Character**:
- Official 8-bit mascot from Claude Code terminal
- Appears at start of coding sessions
- Source: [Stark Insider article](https://www.starkinsider.com/2025/10/clawd-ai-retro-mascot-command-line.html)

**Technical Implementation**:
- CSS box-shadow for pixel art rendering
- Canvas API for Clawd sprite animation
- Keyboard event listeners for arrow key movement
- Collision detection for interactive elements

**Interactions**:
- Walk over events calendar → Show next meetup
- Walk over join button → Open terminal dialog
- Walk over demo area → Play video thumbnail
- Hidden easter eggs around the page

**Typography**:
- Press Start 2P (Google Fonts) for headings
- VT323 for body text
- Pixel-perfect rendering

---

## 5. Technical Architecture

### Tech Stack

```
Framework:      Next.js 14+ (App Router)
Language:       TypeScript (strict mode)
Styling:        Tailwind CSS + CSS custom properties
Animations:     Framer Motion
Terminal:       Custom React component
Forms:          Web3Forms API
Newsletter:     Buttondown API
Calendar:       Luma embed
Hosting:        Vercel
Fonts:          Inter, JetBrains Mono (Design A)
                Press Start 2P, VT323 (Design B)
```

### Project Structure

```
claude-community-helsinki-website/
├── .claude/
│   └── memory.md           # This file
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── events/
│   │   └── page.tsx        # Events calendar
│   ├── resources/
│   │   └── page.tsx        # Videos, presentations
│   ├── join/
│   │   └── page.tsx        # Full signup form
│   └── about/
│       └── page.tsx        # Community info
├── components/
│   ├── ui/                 # Base UI components
│   ├── layout/             # Header, Footer, Navigation
│   ├── terminal/           # Terminal widget
│   ├── aurora/             # Aurora animation
│   └── luma/               # Luma calendar embed
├── lib/
│   ├── utils.ts            # Utility functions
│   ├── api.ts              # API helpers
│   └── constants.ts        # Constants and config
├── styles/
│   └── globals.css         # Global styles, CSS variables
├── public/
│   ├── fonts/              # Local fonts if needed
│   └── images/             # Static images
├── CLAUDE.md               # Project guidelines
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

### Environment Variables

```env
# Web3Forms
NEXT_PUBLIC_WEB3FORMS_KEY=

# Buttondown Newsletter
NEXT_PUBLIC_BUTTONDOWN_API_KEY=

# Luma Calendar
NEXT_PUBLIC_LUMA_CALENDAR_ID=

# Optional: Analytics
NEXT_PUBLIC_ANALYTICS_ID=
```

---

## 6. Implementation Phases

### Phase 1: Foundation
- [x] Create project documentation (CLAUDE.md, memory.md)
- [ ] Initialize Next.js with TypeScript
- [ ] Configure Tailwind CSS
- [ ] Set up Vercel deployment
- [ ] Create design system tokens
- [ ] Build base layout components

### Phase 2: Core Features (Design A)
- [ ] Hero section with value proposition
- [ ] Terminal subscribe widget
- [ ] Aurora gradient animation
- [ ] Navigation and footer
- [ ] Responsive design implementation

### Phase 3: Pages & Integration
- [ ] Events page with Luma embed
- [ ] Join page with Web3Forms
- [ ] About page
- [ ] Resources page (placeholder)

### Phase 4: Polish
- [ ] Dark/light mode toggle
- [ ] Animations and transitions
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Accessibility audit

### Phase 5: Design B (Future)
- [ ] Pixel art styling system
- [ ] Clawd sprite creation
- [ ] Keyboard controls
- [ ] Interactive game elements
- [ ] Theme switcher (A/B designs)

---

## 7. Reference Links

### Official Resources
- [Anthropic](https://anthropic.com)
- [Claude.ai](https://claude.ai)
- [Claude Docs](https://docs.claude.com)

### Design Inspiration
- [BeginswithAI Brand Assets](https://beginswithai.com/claude-ai-logo-color-codes-fonts-downloadable-assets/)
- [Helsinki Visual Identity](https://www.hel.fi/en/decision-making/information-on-helsinki/design-and-digitalisation/helsinki-brand-and-visual-identity)
- [FinnStyle Design](https://www.finnstyle.com/minimalism-in-finnish-design.html)

### Technical Resources
- [Luma Integration Examples](https://github.com/luma-team/examples)
- [Luma Help Center](https://help.luma.com/)
- [Web3Forms](https://web3forms.com/)
- [Buttondown](https://buttondown.com/)
- [Vercel Documentation](https://vercel.com/docs)

### Terminal UI
- [jQuery Terminal](https://terminal.jcubic.pl/)
- [terminal.css](https://terminalcss.xyz/)
- [GitHub Terminal Websites](https://github.com/topics/terminal-style-website)

### Pixel Art (Design B)
- [CSS Pixel Art Tutorial](https://blog.logrocket.com/designing-pixel-art-css-only/)
- [FreeFrontend CSS Pixel Art](https://freefrontend.com/css-pixel-art/)
- [Clawd Mascot Article](https://www.starkinsider.com/2025/10/clawd-ai-retro-mascot-command-line.html)

---

## 8. Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2024-12-28 | Vercel for hosting | Free tier sufficient, excellent Next.js support |
| 2024-12-28 | Web3Forms for forms | 250 free submissions, no signup required |
| 2024-12-28 | Buttondown for newsletter | Dev-focused, privacy-first, minimalist |
| 2024-12-28 | Design A as primary | Elegant, professional; Design B for fun alternative |
| 2024-12-28 | Next.js App Router | Latest patterns, better performance |
| 2024-12-28 | Tailwind CSS | Rapid development, consistent design |

---

*Last updated: December 28, 2024*
