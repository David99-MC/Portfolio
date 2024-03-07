/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pastel-blue": "#90A8ED",
        "pastel-yellow": "#FFD94D",
        "pastel-pink": "#FF9CEA",
      },
      fontFamily: {
        display: "Playfair Display",
        paragraph: "Lato",
      },
      boxShadow: {
        solid: "10px 10px",
      },
      screens: {
        "3xl": "1800px",
        "4xl": "2000px",
        "5xl": "2200px",
        "6xl": "2400px",
      },
      spacing: {
        128: "32rem",
        144: "40rem",
      },
    },
  },
  plugins: [],
};
