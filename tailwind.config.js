/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'camping': ['"Cabin Sketch"', 'cursive'],

      },
      backgroundImage: {
        'parallax': 'url("/src/assets/camp1.jpg")',
      },
      textColor: {
        'primary': '#b19667'
      },
      backgroundColor: {
        'primary': '#b19667'
      }

    },
  },
  plugins: [],
}