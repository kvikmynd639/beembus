
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
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
