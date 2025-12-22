const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "laser-dark": {
          extend: "dark", // Inherit from the default dark theme
          colors: {
            background: "#000000", // Pure black background
            foreground: "#ffffff", // White text
            primary: {
              50: "#ffe2e2",
              100: "#ffb1b1",
              500: "#990000", // Your Logo Red (Standard)
              600: "#7a0000", // Darker Red (Hover)
              DEFAULT: "#990000",
              foreground: "#ffffff",
            },
            secondary: {
              DEFAULT: "#C0C0C0", // Silver from the 'Ace' text
              foreground: "#000000",
            },
            focus: "#990000", // Focus rings will be red
          },
          layout: {
            radius: {
              small: "2px", // Laser tag gear is usually angular/sharp, not round
              medium: "4px",
              large: "6px",
            },
          },
        },
      },
    }),
  ],
};