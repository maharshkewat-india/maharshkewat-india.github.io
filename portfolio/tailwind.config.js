/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#06080D",
          card: "#0B1018",
          border: "#111827",
          text: "#F8FAFC",
          muted: "#6B7280",
        },
        cyber: {
          green: "#00FF88",
          cyan: "#00D4FF",
          accent: "#00FFC8",
        },
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
}