/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [],
};