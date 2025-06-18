/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Display"', ...defaultTheme.fontFamily.sans],
      },
      // The new design primarily uses black, white, and shades with opacity.
      // We can rely on Tailwind's default color palette and utility classes
      // like `bg-white/10` rather than defining a complex custom palette.
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
