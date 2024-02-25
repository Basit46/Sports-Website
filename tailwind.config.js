/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xmd: "950px",
        vsm: "450px",
      },
      colors: {
        gray: "#A4A4A4",
        yellow: "#F5C451",
      },
    },
  },
  plugins: [],
};
