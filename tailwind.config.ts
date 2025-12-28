import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Claude Colors
        claude: {
          coral: "#da7756",
          "coral-dark": "#bd5d3a",
          cream: "#eeece2",
          text: "#3d3929",
          dark: "#131314",
        },
        // Finnish Accents
        finnish: {
          blue: "#003580",
          white: "#ffffff",
        },
        // Aurora Colors
        aurora: {
          green: "#00ff87",
          cyan: "#60efff",
          purple: "#b967ff",
        },
        // Terminal Colors
        terminal: {
          bg: "#1a1a2e",
          green: "#00ff41",
          text: "#e0e0e0",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "aurora": "aurora 15s ease infinite",
        "terminal-blink": "blink 1s step-end infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        aurora: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundSize: {
        "aurora": "200% 200%",
      },
    },
  },
  plugins: [],
};

export default config;
