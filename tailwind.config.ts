import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export const TailwindConfig: Config = {
  darkMode: ['class', '.theme-dark'],
  content: ["./app/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      sans: [...defaultTheme.fontFamily.sans],
    },
  },
};

export default TailwindConfig;
