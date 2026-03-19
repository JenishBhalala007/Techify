/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        /* ─── Existing semantic tokens ─── */
        "primary": "#8E9B90",
        "secondary": "#B8860B",
        "background-light": "#F9F8F6",
        "background-dark": "#2C363F",
        "surface": "#ffffff",
        "surface-light": "#ffffff",
        "surface-dark": "#2C363F",
        "text-primary": "#2C363F",
        "text-main": "#2C363F",
        "text-secondary": "#8E9B90",
        "text-muted": "#8E9B90",
        "border": "#e8ebe9",
        "border-color": "#e8ebe9",
        "border-dark": "#8E9B90",
        "accent": "#B8860B",
        "slate-blue-gray": "#2C363F",
        "muted-amber": "#B8860B",
        "warm-cream": "#F9F8F6",
        "ghost-gray": "#F9F8F6",
        /* ─── Nordic Checkout Design tokens ─── */
        "sage": "#8E9B90",
        "slate-blue": "#2C363F",
        "cream": "#F9F8F6",
        "amber": "#B8860B",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "sans": ["Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "full": "9999px"
      },
      boxShadow: {
        "soft": "0 4px 24px -6px rgba(44, 54, 63, 0.05)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
