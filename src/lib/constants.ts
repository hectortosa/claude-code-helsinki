/**
 * Terminal commands for the interactive CLI widget
 */
export const TERMINAL_COMMANDS = {
  help: {
    description: "Show available commands",
    response: `Available commands:
  help     - Show this help message
  join     - Subscribe to the community newsletter
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
Type 'join' to subscribe to updates.`,
  },
  events: {
    description: "Show upcoming events",
    response: `Fetching events from Luma...

Visit our calendar: lu.ma/ClaudeCommunityHelsinki

Or type 'join' to get event notifications via email.`,
  },
} as const;

/**
 * Social links
 */
export const SOCIAL_LINKS = {
  luma: "https://lu.ma/ClaudeCommunityHelsinki",
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
