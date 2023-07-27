/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        "dodger-blue": {
          DEFAULT: "#3B82F6",
          50: "#9DC0FA",
          100: "#89B4FA",
          200: "#629BF8",
          300: "#3B82F6",
          400: "#0B61EE",
          500: "#084BB8",
          600: "#063583",
          700: "#041F4D",
          800: "#010A17",
          900: "#000000",
          950: "#000000",
        },
        "french-rose": {
          DEFAULT: "#EC4899",
          50: "#F6A4CD",
          100: "#F492C2",
          200: "#F06DAE",
          300: "#EC4899",
          400: "#E4187D",
          500: "#B11261",
          600: "#7F0D45",
          700: "#4C0829",
          800: "#19030E",
          900: "#000000",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
