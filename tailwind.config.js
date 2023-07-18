/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      red : "f71616"
    },
    extend: {
      
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}

