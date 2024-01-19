/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "361px",
      sm: "650px",
      md: "913px",
      lg: "976px",
      xl: "1300px",
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
      serif: ["Roboto", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
