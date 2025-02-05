/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        fg: 'var(--fg)',
        'fg-lighter': 'var(--fg-lighter)',
        bg: 'var(--bg)',
        'bg-lighter': 'var(--bg-lighter)',
        card: 'var(--card)',
        special: 'var(--special)',
        blue: 'var(--blue)',
        green: 'var(--green)',
        yellow: 'var(--yellow)',
        purple: 'var(--purple)',
        red: 'var(--red)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};