/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,tsx}',
  ],
  darkMode: 'class',
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
      fontFamily: {
        display: ['"Space Grotesk"', '"Archivo"', 'sans-serif'],
        body: ['"Inter"', '"Archivo"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
        'blob-radial': 'radial-gradient(ellipse at 30% 20%, rgba(0,212,255,0.12) 0%, transparent 60%)',
        'blob-green': 'radial-gradient(ellipse at 70% 80%, rgba(0,255,136,0.10) 0%, transparent 60%)',
      },
      animation: {
        'blob-float': 'blobFloat 8s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        blobFloat: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(10px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-10px, 10px) scale(0.95)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
