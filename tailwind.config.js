/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      theme: {
        extend: {
          backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
              "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          },
          colors: {
            white: "#fff",
            whiteBorder: "rgba(255,255,255,0.19)",
            whiteText: "rgba(255,255,255,0.8)",
            yellow: "#FFD600",
            blue: "#3A86FF",
            frame: "rgba(141,132,132,0.08)",
            red: "#EF080F",
            gradient2:
              "linear-gradient(90deg, rgba(25,118,210,1) 0%, rgba(77,79,200,1) 35%, rgba(123,44,191,1) 100%)",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            foreground: "#fff",
          },
        },
        dark: {
          // ...
          colors: {
            foreground: "#fff",
          },
        },
        // ... custom themes
      },
    }),
  ],
};
