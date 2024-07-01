import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/partials/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: false,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
      colors: {
        primary: {
          900: "#191D20",
          950: "#002550",
          800: "#025A9A",
          400: "#00EBF0",
          500: "#18cba2",
          300: "#191D20",
          DEFAULT: "#00EBF0",
        },
        secondary: {
          950: "#0A0A0A",
          920: "#1A1A1A",
          900: "#171717",
          880: "#272727",
          850: "#191D20",
          800: "#262626",
          500: "#7D7A7A",
          100: "#D9D9D9",
          50: "#FAFAFA",
          DEFAULT: "#FAFAFA",
        },
        backgroundColor: {
          primary: {
            400: "#00EBF0",
            900: "#191D20",
            800: "#23282D",
            DEFAULT: "#222223",
          },
        },
        // backgroundColor: {
        //   primary: {
        //     DEFAULT: '#222223',
        //   },
        // },
        "slick-dot-inactive": "rgba(255, 255, 255, 0.5)",
        "slick-dot-active": "#ffffff",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
