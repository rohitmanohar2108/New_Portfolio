/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        cardo: ['Cardo', 'serif'],
        hanglove: ['Hanglove', 'cursive'],
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'text-heading': 'rgb(var(--color-text-heading) / <alpha-value>)',
        'text-body': 'rgb(var(--color-text-body) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
      },
      animation: {
        blob: 'blob 7s infinite',
        float: 'float 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'rotate-border': 'rotate-border 2s linear infinite',
      },
      keyframes: {
        'rotate-border': {
          '0%': { borderColor: '#ff6347' }, // Red
          '25%': { borderColor: '#00ff00' }, // Green
          '50%': { borderColor: '#0000ff' }, // Blue
          '75%': { borderColor: '#ffff00' }, // Yellow
          '100%': { borderColor: '#ff0000' }, // Back to Red
        },
      },
    },
  },
  plugins: [],
};
