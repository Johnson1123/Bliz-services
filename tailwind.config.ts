import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink: "rgb(207,42,186)",
        blue: "rgb(65,88,208)",
      },
      backgroundColor: {
        darkBlue: "#0d0d3f",
      },
      screens: {
        "3k": {
          raw: "(min-width:1920px)",
        },
        "4k": {
          raw: "(min-width:2560px)",
        },
        "5k": {
          raw: "(min-width:3200px)",
        },
      },
      fontFamily: {
        EduAUVI: "var(--font-edu-auvi)",
        optima: "var(--font-optima)",
      },
    },
  },
  plugins: [],
} satisfies Config;
