import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: "/favicon.svg",
			logo: {
				src: "./src/assets/ske.svg",
				alt: "SKE",
				replacesTitle: true,
			},
			title: "Sigui Kessé Emmanuel",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/siguici",
				},
				{
					icon: "twitter",
					label: "X",
					href: "https://x.com/siguici",
				},
				{
					icon: "discord",
					label: "Discord",
					href: "https://discord.gg/PURzNH7KBj",
				},
				{
					icon: "youtube",
					label: "YouTube",
					href: "https://youtube.com/@siguici",
				},
			],
			editLink: {
				baseUrl: "https://github.com/siguici/siguici/edit/0.x/docs/",
			},
			sidebar: [
				{
					label: "Home",
					link: "/",
				},
				{
					label: "Getting started",
					items: [{ label: "Quickstart", link: "/start/" }],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
		}),
	],
});
