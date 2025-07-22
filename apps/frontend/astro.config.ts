import process from "node:process";
import deno from "@astrojs/deno";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import qwik from "@qwikdev/astro";
import tailwindcss from "@tailwindcss/vite";
import type { AstroIntegration } from "astro";
import { defineConfig, passthroughImageService } from "astro/config";
import { loadEnv } from "vite";
import { app } from "./src/config";

const { SERVER_PORT } = loadEnv(
	process.env.NODE_ENV || "local",
	process.cwd(),
	"",
);

// https://astro.build/config
export default defineConfig({
	site: app.url,
	srcDir: "./src",
	outDir: "./out",
	publicDir: "./public",
	compressHTML: true,
	output: "server",
	image: {
		service: passthroughImageService(),
	},
	adapter: deno({
		port: Number(SERVER_PORT || "4444"),
		start: false,
	}) as AstroIntegration,
	integrations: [
		sitemap({
			customPages: ["https://sikessem.com/sitemap.xml"],
			changefreq: "daily",
			priority: 0.8,
			lastmod: new Date(),
			i18n: {
				defaultLocale: "en",
				locales: {
					en: "en-US",
					fr: "fr-CI",
				},
			},
		}),
		preact({
			compat: true,
			include: ["**/preact/*", "**/react/*"],
		}),
		qwik({
			exclude: ["**/preact/*", "**/react/*"],
		}),
	],
	vite: {
		ssr: {
			noExternal: ["path-to-regexp"],
		},
		// @ts-ignore
		plugins: [tailwindcss()],
	},
});
