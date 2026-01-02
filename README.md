# Claude Code Community Helsinki 🇫🇮

[![Anthropic Official](https://img.shields.io/badge/Anthropic-Official%20Community-da7756?style=for-the-badge&logo=anthropic)](https://anthropic.com)
[![Built with Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com)

> **Connect. Build. Share.** The official Anthropic community bringing together creators, builders, and professionals in Helsinki to exchange knowledge about AI-assisted development.

[Visit Website](https://claude-code-helsinki.codesharegrow.net) • [Join Events](https://luma.com/ClaudeCodeHelsinki) • [Contribute](#-contributing-with-claude-code)

---

## 🌟 About

Welcome to the Claude Code Community Helsinki - a vibrant community of developers, designers, and AI enthusiasts exploring the future of software development with Claude Code.

### What We Do

- **💡 Knowledge Exchange** - Share tips, workflows, and best practices for AI-assisted development
- **🎬 Demos & Talks** - Watch live demos and learn from community members building amazing things
- **🤝 Networking** - Connect with fellow developers and AI enthusiasts in Helsinki and beyond
- **🎓 Workshops** - Hands-on learning experiences with Claude Code and AI development tools
- **🚀 Innovation** - Push the boundaries of what's possible with AI-assisted development

### Community Values

- **🌈 Inclusive** - Everyone is welcome, from beginners to experts
- **🔬 Experimental** - We embrace curiosity and learning through building
- **🤲 Open** - Knowledge sharing is at our core
- **🎯 Practical** - Real-world applications and actionable insights
- **🌍 Local & Global** - Rooted in Helsinki, connected worldwide

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** or **yarn** or **pnpm**
- **Claude Code** (optional but recommended for contributing)

### Local Development

```bash
# Clone the repository
git clone https://github.com/claude-community-helsinki/website.git
cd website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site in action!

### Project Structure

```
src/
├── app/              # Next.js pages (App Router)
├── components/       # Reusable React components
│   ├── aurora/      # Aurora background animations
│   ├── layout/      # Header, Footer, etc.
│   ├── luma/        # Event calendar integration
│   └── terminal/    # Interactive terminal widget
└── lib/             # Utilities and constants
```

For detailed architecture documentation, see [CLAUDE.md](./CLAUDE.md).

---

## 🤖 Contributing with Claude Code

We embrace AI-assisted development! Here's how to contribute using Claude Code.

### Setting Up Claude Code

> 📚 **Official Documentation**: [code.claude.com/docs/en/setup](https://code.claude.com/docs/en/setup)

1. **Install Claude Code**

   **macOS, Linux, or WSL:**
   ```bash
   curl -fsSL https://claude.ai/install.sh | bash
   ```

   **Windows (PowerShell):**
   ```powershell
   irm https://claude.ai/install.ps1 | iex
   ```

   **Verify Installation:**
   ```bash
   claude doctor
   ```

2. **Authenticate**

   Follow the OAuth process to connect to your Claude account. You'll need either:
   - Active billing in the Anthropic Console, or
   - A Claude Pro/Max subscription

3. **Open the Project**
   ```bash
   cd claude-community-helsinki-website
   claude
   ```

4. **Start Contributing**

   Claude Code will open with the project loaded. You can now start asking questions and making contributions!

### AI-Assisted Contribution Workflow

#### 1️⃣ **Understand the Codebase**

Ask Claude to help you understand the project:

```
Can you explain the project structure and how the components are organized?
```

```
Show me how the Terminal component works and how it handles user input.
```

#### 2️⃣ **Plan Your Contribution**

Work with Claude to plan your changes:

```
I want to add a "Resources" section to the homepage. Can you help me plan the implementation following the existing patterns?
```

```
How should I structure a new component for displaying member profiles?
```

#### 3️⃣ **Implement with Guidance**

Let Claude Code help you write code that follows our conventions:

```
Create a new EventCard component that displays event information with the same styling as the existing cards on the homepage.
```

```
Add a dark mode toggle to the Header component following the pattern used in the Terminal component.
```

#### 4️⃣ **Review and Test**

Use Claude Code to review your changes:

```
Review the changes I made to the Terminal component. Are they following the codebase conventions?
```

```
Run the linter and fix any issues in the files I've modified.
```

#### 5️⃣ **Document Your Changes**

Get help writing clear commit messages:

```
Help me write a commit message for the new EventCard component following the conventional commits format.
```

### Tips for Claude Code Contributions

- ✅ **Read [CLAUDE.md](./CLAUDE.md) first** - Contains comprehensive guidelines for AI assistants
- ✅ **Follow existing patterns** - Ask Claude to analyze similar components before creating new ones
- ✅ **Use TypeScript strictly** - Let Claude help you with proper type definitions
- ✅ **Test responsively** - Ask Claude to ensure mobile/tablet/desktop support
- ✅ **Maintain accessibility** - Have Claude check for ARIA labels and keyboard navigation

---

## 🛠️ Contributing (Traditional Workflow)

Whether you use Claude Code or not, all contributions are welcome!

### Contribution Guidelines

1. **Fork the Repository**
   ```bash
   # Click "Fork" on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/website.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make Your Changes**
   - Follow the code conventions in [CLAUDE.md](./CLAUDE.md)
   - Write clean, readable TypeScript
   - Use Tailwind CSS for styling
   - Test your changes locally

4. **Commit Your Changes**
   ```bash
   # Use conventional commits format
   git commit -m "feat: add event card component"
   git commit -m "fix: resolve terminal scroll issue"
   git commit -m "docs: update contribution guidelines"
   ```

5. **Push and Create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   # Then create a PR on GitHub
   ```

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style (formatting, no logic change)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Tests
- `chore:` - Maintenance tasks

### Pull Request Process

1. **Ensure your code builds** - Run `npm run build` successfully
2. **Pass linting** - Run `npm run lint` without errors
3. **Write a clear description** - Explain what and why
4. **Link related issues** - Use `Closes #123` or `Fixes #456`
5. **Be responsive** - Address review feedback promptly

### Code Review

All submissions require review. We aim to:

- ✅ Provide feedback within 48 hours
- ✅ Be constructive and helpful
- ✅ Maintain code quality and consistency
- ✅ Help you learn and improve

---

## 🎨 Design System

### Colors

```css
/* Claude Colors */
--claude-coral: #da7756      /* Primary accent */
--claude-cream: #eeece2      /* Background */
--claude-text: #3d3929       /* Text */
--claude-dark: #131314       /* Dark background */

/* Aurora Colors */
--aurora-green: #00ff87      /* Northern lights */
--aurora-cyan: #60efff
--aurora-purple: #b967ff

/* Terminal Colors */
--terminal-bg: #1a1a2e       /* Terminal background */
--terminal-green: #00ff41    /* Terminal text */
```

### Typography

- **Sans-serif**: Inter (headings, body text)
- **Monospace**: JetBrains Mono (code, terminal)

### Components

- **Buttons**: `.btn-primary`, `.btn-secondary`
- **Terminal**: Interactive CLI-style widget
- **Aurora Background**: Animated Northern Lights gradient

See [CLAUDE.md](./CLAUDE.md) for complete design system documentation.

---

## 📚 Documentation

- **[CLAUDE.md](./CLAUDE.md)** - Comprehensive guide for AI assistants and developers
- **[Code Conventions](./CLAUDE.md#code-conventions)** - TypeScript, React, and CSS guidelines
- **[Architecture Patterns](./CLAUDE.md#architecture-patterns)** - Component organization and patterns
- **[Troubleshooting](./CLAUDE.md#troubleshooting)** - Common issues and solutions

---

## 🌐 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework | 14+ |
| **TypeScript** | Type safety | 5.3+ |
| **Tailwind CSS** | Styling | 3.4+ |
| **Framer Motion** | Animations | 11+ |
| **Vercel** | Hosting | Latest |
| **Luma** | Event management | API v1 |

---

## 🤝 Community

### Join Us

- **📅 Events** - [luma.com/ClaudeCodeHelsinki](https://luma.com/ClaudeCodeHelsinki)
- **🌐 Website** - [claude-code-helsinki.codesharegrow.net](https://claude-code-helsinki.codesharegrow.net)

### Ways to Contribute

- **💻 Code** - Fix bugs, add features, improve performance
- **📖 Documentation** - Improve guides, add examples, fix typos
- **🎨 Design** - Enhance UI/UX, create graphics, improve accessibility
- **🐛 Issues** - Report bugs, suggest features, ask questions
- **💬 Discussions** - Share ideas, help others, provide feedback
- **📢 Advocacy** - Share on social media, write blog posts, give talks

### Contributors

Thanks to all our amazing contributors! 🎉

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- This section is auto-generated. Contributors will be added here. -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Anthropic** - For creating Claude and supporting this community
- **Helsinki Tech Community** - For the warm welcome and collaboration
- **All Contributors** - For making this community amazing
- **You** - For being interested in AI-assisted development!

---

## 🔮 Future Plans

- [ ] Event recordings and video library
- [ ] Member directory and profiles
- [ ] Workshop materials and resources
- [ ] Blog/articles section
- [ ] Multi-language support (Finnish, Swedish, English)
- [ ] Interactive demos and playgrounds
- [ ] Pixel art game with Clawd mascot (Design B)

---

<div align="center">

**Built with ❤️ by the Claude Code Community Helsinki**

*Connect. Build. Share.*

[Website](https://claude-code-helsinki.codesharegrow.net) • [Events](https://luma.com/ClaudeCodeHelsinki) • [GitHub](https://github.com/claude-community-helsinki)

</div>
