/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#d4c49e',
        cream: '#f8e7c4',
        espresso: '#3f1a03',
        maroon: '#800020',
        copper: '#b87333',
        gold: '#d4ab26',
      },
      fontFamily: {
        display: ['"Antique Olive"', 'ui-rounded', 'sans-serif'],
        mono: ['"Roboto Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
