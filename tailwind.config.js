/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#EF6A00",
        foshia:"#C63663",
        light: "#3E342F",
        dark:"#94A3B8"
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
