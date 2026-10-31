/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        times: ['"Times New Roman"', "Times", "serif"],
      },
      // Paleta: azul da marca (#00293F) mesclado com o branco
      colors: {
        navy: {
          DEFAULT: "#00293F",
          light: "#013754",
          soft: "#1F4E68",
          50: "#F4F7F9",
          100: "#E6EDF1",
          200: "#C9D6DF",
          300: "#9FB4C2",
          400: "#6B8BA0",
          500: "#3F6680",
          600: "#1F4E68",
          700: "#013754",
          800: "#00293F",
          900: "#001A29",
        },
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
