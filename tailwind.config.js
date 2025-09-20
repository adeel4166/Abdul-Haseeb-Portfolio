/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 add this line for dark mode toggle
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ React files scan hote rahenge
  ],
  theme: {
    extend: {
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      animation: {
        "gradient-x": "gradient-x 3s ease infinite",
      },
    },
  },
  plugins: [],
};
