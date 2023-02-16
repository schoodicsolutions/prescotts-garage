/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'midnight': '#10080F',
        'storm': '#665e65',
        'brand': '#f85f00',
      },
      fontFamily: {
        'kameron': ['Kameron'],
      },
      dropShadow: {
        'hero': '0 10px 8px rgba(0, 0, 0, 1)'
      },
      backgroundImage: {
        'shop': "url('/bg-placeholder.jpg')",
      },
    },
  },
  plugins: [],
}
