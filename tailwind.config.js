/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lora:"Lora"
      }
    },
  },
  plugins: [],
}

