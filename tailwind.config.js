/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //<<<<<<< HEAD
      backgroundImage: {
        fondo1: "url('/imagen-index.jpg')",
        "form-pattern": "url('/img-bg-form.jpg')",
        fondoAboutCenter: "url('/modelos-general.jpg')",
        atras: "url('/atras.jpg')",
      },
      fontFamily: {
        Itim: ["Itim", "cursive", "bold"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        Verde: ["#B5CD97"],
      },
      screens: {},
      //=======

      //>>>>>>> main
    },
  },
  plugins: [],
};
