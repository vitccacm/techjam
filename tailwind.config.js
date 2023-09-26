/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",  // Include all HTML files in the src directory and its subdirectories
    "./src/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('postcss-nesting'), // Add this line before Tailwind CSS
    require('tailwindcss'),
  ],
}

