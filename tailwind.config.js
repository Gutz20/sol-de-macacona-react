/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //<<<<<<< HEAD
      backgroundImage: {
        fondo1: "url('/imagen-index.jpg')",
        "form-pattern": "url('/img-bg-form.jpg')",
        fam: "url('/img-bg-fam.png')",
        fondo2: "url(/img-bg-terra.jpg)",
      },
      fontFamily: {
        Itim: ["Itim", "cursive", "bold"],
        Inter: ["Inter", "sans-serif"], 
      },
      //=======

      //>>>>>>> main
    },
  },
  plugins: [],
};
