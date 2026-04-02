import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2E5E46", // Vert foncé
          light: "#3A6B52",
          dark: "#1F3F2F",
        },
        secondary: {
          DEFAULT: "#F4EEDC", // Beige
          light: "#F9F6F0",
          dark: "#E8DDC4",
        },
        accent: {
          DEFAULT: "#C8A96A", // Doré léger
          light: "#D4B882",
          dark: "#B8964F",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

