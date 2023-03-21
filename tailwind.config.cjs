/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#121729",
        borderColor: "#1d2e3f",
        grayOpaque: "#7c859e20",
        taskBg:"#182B42",
        greenBorder:"#56b890",
        redBorder:"#f25f5c",
        greenBg:"#56b890",
        redBg:"#f25f5c"
      }
    },
  },
  plugins: [],
}