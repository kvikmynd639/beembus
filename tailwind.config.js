/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#6256CA',  // Dark Purple
        secondary: '#86D293', // Light Green
        accent: '#C1E2A4',    // Light Pastel Green
        background: '#FDFAD9' // Light Yellow
      },
    },
  },
  plugins: [],
}
