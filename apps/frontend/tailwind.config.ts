import type { Config } from "tailwindcss";

export const TailwindConfig: Config = {
	darkMode: ["class", ".theme-dark"],
	content: ["./{app,src}/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
};

export default TailwindConfig;
