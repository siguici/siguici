import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from 'tailwindcss';

export const TailwindConfig: Config = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			sans: [...defaultTheme.fontFamily.sans],
		},
	},
};

export default TailwindConfig;