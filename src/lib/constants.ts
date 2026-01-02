/**
 * Terminal commands for the interactive CLI widget
 */
export const TERMINAL_COMMANDS = {
  help: {
    description: "Show available commands",
    response: `Available commands:
  help     - Show this help message
  join     - Join the community via GitHub
  events   - Show upcoming events
  about    - Learn about the community
  clear    - Clear the terminal
  theme    - Toggle dark/light mode`,
  },
  about: {
    description: "About the community",
    response: `Claude Code Helsinki
━━━━━━━━━━━━━━━━━━━━━

Connect. Build. Share.

An official Anthropic initiative bringing together
creators, builders, and professionals in Helsinki.

We host meetups, workshops, and demos focused on
AI-assisted development with Claude Code.

Type 'events' to see upcoming meetups.
Type 'join' to join the community.`,
  },
  events: {
    description: "Show upcoming events",
    response: `Opening Luma calendar...

View upcoming meetups, workshops, and community events.
Type 'join' to join the community.`,
  },
} as const;

/**
 * Social links
 */
export const SOCIAL_LINKS = {
  luma: "https://luma.com/ClaudeCodeHelsinki",
  github: "https://github.com/claude-community-helsinki",
} as const;

/**
 * Community stats (update these as the community grows)
 */
export const COMMUNITY_STATS = {
  members: "50+",
  events: "3+",
  talks: "10+",
} as const;
