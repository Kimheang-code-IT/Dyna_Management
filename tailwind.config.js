/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'khmer': ['Noto Serif Khmer', 'serif'],
      },
    },
  },
  plugins: [],
}

