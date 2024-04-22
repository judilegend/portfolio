/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#5DE4F6",
              foreground: "#000000",
            },
            secondary: {
              DEFAULT: "#FF62AD",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#5DE4F6",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#FF62AD",
              foreground: "#FFFFFF",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};
