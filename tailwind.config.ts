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
        pink: "#BCCEFB",
        blue: "#1717B0",
        darkblue: "#09092a",
      },
      backgroundColor: {
        darkBlue: "#09092a",
      },
      screens: {
        "1kk": {
          raw: "(min-width:325px)",
        },
        "2kk": {
          raw: "(min-width:420px)",
        },
        "3kk": {
          raw: "(min-width:520px)",
        },
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
