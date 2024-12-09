/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryLight: "#f0f8ff",
        primaryDark: "#0a192f",
        blue: "#2F58CD",
        red: "#ED2B2A",
        green: "#03C988",
      },
    },
  },
  plugins: [],
};
