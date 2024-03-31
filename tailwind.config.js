/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#196dfb",
        "primary-light": "rgb(43 155 138 / 16%)",
        "primary-dark": "#1a1f71",
        "primary-text": "#114aaf",
        "primary-darker": "#0a0f57",
        "gray-hove": "#e6e6e6",
        "gray-soft": "#f1f1f1",
        gray: "#8f8f8f",
        "gray-dark": "#585858",
        secondary: "#ff56a1",
      },
    },
  },
  plugins: [],
};
