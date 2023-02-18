/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'midnight': '#10080F',
        'storm': '#665e65',
        'brand': '#f85f00',
        'burnt': '#b34400',
      },
      fontFamily: {
        'kameron': ['Kameron'],
        'raleway': ['Raleway'],
      },
      dropShadow: {
        'hero': '0 0 2px rgba(0, 0, 0, 1)'
      },
      backgroundImage: {
        'shop': "url('/bg-placeholder.jpg')",
      },
      screens: {
        'hv': {'raw': '(hover: hover)'},
      }
    },
  },
  plugins: [],
}
