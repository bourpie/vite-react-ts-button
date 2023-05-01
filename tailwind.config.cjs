/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('./tailwind-sq-presets.cjs')
  ],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
