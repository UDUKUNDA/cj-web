import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#A1CDFF",
          200: "#007AFF",
          300: "#016ADC",
          400: "#0052AB",
        },
        secondary: {
          100: "#FFF793",
          200: "#FFF02D",
          300: "#D1C412",
          400: "#736A00",
        },
        gray: {
          50: "#A0A2A2",
          100: "#5B5B5B",
          200: "#44494B",
          250: "#373B3D",
          300: "#2C2F30",
          400: "#1C1E1F",
        },
        success: {
          100: "#8CFFBC",
          200: "#27AE60",
          300: "#219653",
          400: "#106C37",
        },
        danger: {
          100: "#DCC7CD",
          200: "#ED5043",
          300: "#C84537",
          400: "#8F2D26",
        },
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};

export default config;
