/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        times: ['"Times New Roman"', "Times", "serif"],
      },
      colors: {
        navy: "#00293F",
        "navy-light": "#013754",
        "navy-soft": "#1F4E68",
      },
    },
    screens: {
      sm: { max: "374.99px" },

      md: { min: "375px", max: "767px" },

      lg: { min: "767.01px", max: "1025px" },

      xl: { min: "1025.01px", max: "1535px" },

      "2xl": { min: "1536px" },
    },
  },
};
