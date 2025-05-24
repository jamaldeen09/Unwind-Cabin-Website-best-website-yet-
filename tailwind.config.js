/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        verySmall: {max: "414px", min: "344px"},
        midLaptop: { max:"1470px", min: "1024px"},
        midIpad: {max: "1030px", min: "1024px"},
        iphone14: {max:"430px", min:"342px"},
        xs: "344px",
      },
      colors: {
        
      }
    },
  },
  plugins: [],
}
