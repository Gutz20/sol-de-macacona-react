/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "fondo1":"url('/imagen-index.jpg')"
      }
    },
  },
  plugins: [],
};
