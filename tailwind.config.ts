import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "feather": ['var(--font-feather)'],
      "inter": ['var(--font-inter)'], 
    },
    extend: {
      screens: {
        "xs": "480px"
      },
      fontSize: {
        "xxs": "0.658rem"
      },
      colors: {
        bg: {
          100: "hsl(var(--bg-100))",
          200: "hsl(var(--bg-200))",
          300: "hsl(var(--bg-300))",
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
