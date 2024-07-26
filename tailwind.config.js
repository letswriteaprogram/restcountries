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
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#2B3945',         // Dark Blue (Dark Mode Elements)
        'dark-blue-bg': '#202C37',      // Very Dark Blue (Dark Mode Background)
        'very-dark-blue': '#111517',    // Very Dark Blue (Light Mode Text)
        'dark-gray': '#858585',         // Dark Gray (Light Mode Input)
        'light-gray': '#FAFAFA',        // Very Light Gray (Light Mode Background)
        'white': '#FFFFFF'              // White (Dark Mode Text & Light Mode Elements)
      }
    },
  },
  plugins: [],
}

