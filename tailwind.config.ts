
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./index.tsx"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        brc: {
          green: "#00FF80",
          rust: "#B35D33",
        },
        text: {
          authoritative: "rgba(255, 255, 255, 1.0)",
          secondary: "rgba(255, 255, 255, 0.7)",
          label: "rgba(255, 255, 255, 0.4)",
          ghost: "rgba(255, 255, 255, 0.03)",
        }
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        'scan': 'scan 8s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
