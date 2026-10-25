/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square'
    },
    extend: {
      colors: {
        midnight: "#10080F",
        storm: "#403b3f",
        brand: "#f85f00",
        burnt: "#b34400",
      },
      fontFamily: {
        kameron: ["Kameron"],
        poppins: ["poppins"],
        archivo: ["Archivo"],
      },
      dropShadow: {
        hero: [
          "0 0 2px rgba(0, 0, 0, 1)",
          "0 3px 6px rgba(0, 0, 0, 0.7)",
          "0 10px 30px rgba(0, 0, 0, 0.6)",
        ],
      },
      backgroundImage: {
        shop: "url('/bg-placeholder.jpg')",
      },
      screens: {
        hv: { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
};
