import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#1e293b",
        primary: {
          DEFAULT: "#1e40af", // Royal Blue
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f59e0b", // Gold
          foreground: "#1e293b",
        },
        accent: {
          DEFAULT: "#334155", // Slate 700
          foreground: "#ffffff",
        },
        success: "#10b981",
      },
      borderRadius: {
        "3xl": "2.5rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        orb: "orb 20s linear infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
          "100%": { transform: "translateY(0px) rotate(0deg)" },
        },
        orb: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
