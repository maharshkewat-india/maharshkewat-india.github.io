/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class', // Enable manual dark mode toggle
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#06080D',
        'cyber-card': '#0B1018',
        'cyber-primary': '#111827',
        'cyber-green': '#00ff88',
        'cyber-cyan': '#00d4ff',
        'cyber-slate': '#64748b',
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
};