/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "src/app/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      color: {
        primary: "#eeeeee",
        accent: "#ffc639",
        secondary: "#393e46",
        dark: "#222831",
        black: "#000",
        sw: "#999"
      }
    },
  },
  plugins: [],
};
