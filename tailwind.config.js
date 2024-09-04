/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background : "#0000",
        backgroundConstract : "#111",
        text: "#1d1d1f",
        white: "#fff"

      }, 
      screens : {
        xs:"360px"
      }
    },
  },
  plugins: [],
}

