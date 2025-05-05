/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#48BB78",
          DEFAULT: "#38A169",
          dark: "#2F855A",
        },
        secondary: {
          light: "#63B3ED",
          DEFAULT: "#4299E1",
          dark: "#3182CE",
        },
        accent: {
          light: "#F6E05E",
          DEFAULT: "#ECC94B",
          dark: "#D69E2E",
        },
        success: "#48BB78",
        warning: "#ED8936",
        error: "#F56565",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseslow: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        wave: "wave 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3px)" },
        },
      },
    },
  },
  plugins: [],
};
