/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      error: "#FF0335", // HORNET STING (error codes)
      success: "#5EB30B", // FROG (success messages)
      primary: "#6B3CC9", // Bluish Purple (CTAs, highlights)
      secondary: "#F28D35", // YUZU JAM (contrast)
      dark: "#4DCA79", // INTERSTELLAR BLUE (dark background)

      analog1: "#6A44F2", // ICE ICE BABY (mixed colors)
      analog2: "#1CBDDD", // TURQUOISE (mixed colors)
      triadic: "#52378C", // ELECTRIC INDIGO (mixed colors)
      textMain: "#2F2F2F", // TRICORN BLACK (body & title text)
      textLight: "#545A75", // ACIER (placeholders & light text)
      textSubtle: "#9C9991", // ACIER (placeholders & light text)
      accent1: "#E2F2FE", // WIZARD WHITE (some body text)
      accent2: "#FFF8E0", // CUDDYL YARN (some body text)
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
