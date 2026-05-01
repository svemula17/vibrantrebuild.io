import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", lg: "3rem" },
      screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1200px", "2xl": "1280px" }
    },
    extend: {
      colors: {
        navy: {
          50: "#f3f6fa",
          100: "#e2eaf3",
          200: "#c1d1e3",
          300: "#90afcc",
          400: "#5a83b0",
          500: "#386396",
          600: "#2a4d7a",
          700: "#1e3a5f",
          800: "#172e4a",
          900: "#0f1f33"
        },
        sky: {
          DEFAULT: "#C8401A",   /* Vibrant brand orange-red  */
          50:  "#FFF4EF",
          100: "#FFE5D8",
          500: "#C8401A",
          600: "#A33315",
          700: "#7D250E"
        },
        ink: "#0f1f33",
        muted: "#6c757d",
        line: "#e9ecef"
      },
      fontFamily: {
        sans: ["Inter", "Avenir Next", "Segoe UI", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      fontSize: {
        h1: ["clamp(2.25rem, 4.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.75rem, 3.2vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        h3: ["1.375rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }]
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 31, 51, 0.04), 0 8px 24px rgba(15, 31, 51, 0.06)",
        cardHover: "0 4px 8px rgba(15, 31, 51, 0.06), 0 16px 40px rgba(15, 31, 51, 0.10)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: [forms]
};

export default config;
