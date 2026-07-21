import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

/* ─── Canonical scales ───────────────────────────────────────────────────
   Warm-neutral system derived from the logo's temperature. The old cool
   navy scale survives only as role-based ALIASES below so existing markup
   repaints without churn. New code should use neutral/brand directly. */
const neutral = {
  0:   "#FFFFFF",
  50:  "#FAF9F7",
  100: "#F4F2EF",
  200: "#E7E3DE",
  300: "#D6D0C9",
  400: "#A8A198",
  500: "#78716C",
  600: "#57534E",
  700: "#44403C",
  800: "#292420",
  900: "#1A1512",
  950: "#120C08"
};

const brand = {
  300: "#F5A623", // logo top — accents/text on DARK backgrounds only
  400: "#E8703A", // logo mid — accents/text on DARK backgrounds only
  500: "#E05A1F", // gradient end stop; large text on dark
  600: "#C8401A", // core brand — fills, borders, focus ring, CTA gradient
  700: "#A33315", // accessible text-orange on LIGHT (6.9:1 on white)
  800: "#7D250E"  // deepest — announcement strip bg, gradient hover start
};

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
        neutral,
        brand,

        /* ── LEGACY ALIASES — role-based, not positional ──────────────────
           navy-700 is used 67× as TEXT on light → maps to text-primary
           (neutral-900), not neutral-700, or heading hierarchy inverts.   */
        navy: {
          50:  neutral[100],
          100: neutral[100],
          200: neutral[300],
          300: neutral[300],
          400: neutral[500],
          500: neutral[600],
          600: neutral[700],
          700: neutral[900],
          800: neutral[800],
          900: neutral[900]
        },
        sky: {
          DEFAULT: brand[600],
          50:  "#FDF3EE",
          100: "#FAE5DA",
          500: brand[500],
          600: brand[600],
          700: brand[700]
        },
        ink:   neutral[900],
        muted: neutral[600],
        line:  neutral[200]
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      fontSize: {
        display: ["clamp(2.75rem, 1.2rem + 6.5vw, 5.25rem)", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "700" }],
        h1:      ["clamp(2.25rem, 1.4rem + 3.6vw, 3.5rem)",  { lineHeight: "1.1",  letterSpacing: "-0.02em",  fontWeight: "700" }],
        h2:      ["clamp(1.75rem, 1.2rem + 2.3vw, 2.5rem)",  { lineHeight: "1.15", letterSpacing: "-0.02em",  fontWeight: "650" }],
        h3:      ["clamp(1.375rem, 1.05rem + 1.4vw, 1.75rem)", { lineHeight: "1.25", letterSpacing: "-0.015em", fontWeight: "600" }],
        h4:      ["clamp(1.125rem, 1rem + 0.5vw, 1.25rem)",  { lineHeight: "1.3",  letterSpacing: "-0.01em",  fontWeight: "600" }],
        "body-lg": ["1.1875rem", { lineHeight: "1.55" }],
        body:      ["1.0625rem", { lineHeight: "1.6" }],
        small:     ["0.875rem",  { lineHeight: "1.5" }],
        eyebrow:   ["0.8125rem", { lineHeight: "1.2", letterSpacing: "0.08em", fontWeight: "600" }]
      },
      boxShadow: {
        card:      "0 1px 2px rgba(26,21,18,0.05), 0 8px 24px rgba(26,21,18,0.06)",
        cardHover: "0 4px 12px rgba(26,21,18,0.07), 0 20px 44px rgba(26,21,18,0.10)"
      },
      borderRadius: { xl2: "1.25rem" },
      backgroundImage: {
        "brand-gradient":       "linear-gradient(135deg, #A33315 0%, #C8401A 55%, #E05A1F 100%)",
        "brand-gradient-hover": "linear-gradient(135deg, #7D250E 0%, #A33315 55%, #C8401A 100%)"
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: [forms]
};

export default config;
