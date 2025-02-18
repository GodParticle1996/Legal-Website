/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  fontFamily: {
    primary: "Playfair Display",
    body: "Open Sans",
    mont: ["Montserrat", "sans-serif"],
    pops: ["Poppins", "sans-serif"],
    cyber: ["Orbitron", "sans-serif"],
    elegant: ["Cormorant Garamond", "serif"],
    modern: ["Space Grotesk", "sans-serif"],
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1170px",
  },
  extend: {
    colors: {
      primary: {
        DEFAULT: "#292A4A",
        darker: "#242546",
        hover: "#383956",
      },

      accent: {
        DEFAULT: "#CF9455",
        hover: "#BB864E",
      },

      gray: "#766F66",
      white: "#ffffff",
    },

    spacing: {
      54: "54px",
      800: "800px",
    },

    keyframes: {
      "border-spin": {
        "100%": {
          transform: "rotate(-360deg)",
        },
      },
    },
    animation: {
      "border-spin": "border-spin 7s linear infinite",
    },

    content: {
      quote: 'url("assets/img/quoteMark.png")',
    },
  },
};
export const plugins = [];
