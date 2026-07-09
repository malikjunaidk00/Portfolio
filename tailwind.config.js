/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10201b",
        pine: "#0f2f2a",
        tealpro: "#0f766e",
        amberpro: "#d97706",
        coral: "#e11d48",
        mist: "#f5f7f4",
        paper: "#ffffff",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(16, 32, 27, 0.12)",
        glow: "0 18px 80px rgba(15, 118, 110, 0.22)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
