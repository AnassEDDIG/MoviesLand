/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        lg: "910px"
      },
      boxShadow: {
        even: "0px 0px 2px 1px rgb(0 0 0 / 0.1)"
      }, colors: {
        golden: "#daa520"
      },
      translate: {
        hide: "1200px"
      },
      borderRadius: {
        circle: "50%"
      }
    },
  },
  plugins: [],
}