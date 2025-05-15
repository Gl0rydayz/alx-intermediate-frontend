/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Scan HTML files in the root directory
    "./src/**/*.{html,js}", // Keep scanning HTML and JS files in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};