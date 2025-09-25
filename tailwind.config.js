/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",      // all HTML + JS in the root folder
    "./src/**/*.{html,js}" // if you have src/ with files
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        jump: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  },
  plugins: [],
};
