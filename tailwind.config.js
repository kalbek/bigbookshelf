/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "9/16": "9/16",
      },
      colors: {
        secondary: "#7a777c",
        red: {
          200: "#FFC0CB", // Define your shade of red
        },
        linear: "#211c24",
        darkgray: "#f5f5f5",
        darkergray: "#353535",
        darksecondary: "#2e2e2e",
        lightsecondary: "#969696",
        lightgray: "#ededed",
        philippinegray: "#909090",
        lotion: "#fafafa",
        cultured: "#f6f6f6",
        blackbg: "#2A2C2E",
        crayola: "#F4CE47",
        lighterbg: "#f6f4f0",
        verydarkgray: "#20201f",
      },
    },
  },
  plugins: [],
};
