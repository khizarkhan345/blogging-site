/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "615px",
      md: "820.5px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
      serif: ["Roboto", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
