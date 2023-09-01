/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "form-pattern": "url('/img-bg-form.jpg')",
      },
    },
  },
  plugins: [],
};
