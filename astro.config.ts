import deno from "@astrojs/deno";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import qwik from "@qwikdev/astro";
import { defineConfig, passthroughImageService } from "astro/config";
import { loadEnv } from "vite";
import { APP } from "./src/config";

const { SERVER_PORT } = loadEnv(
  process.env.NODE_ENV || "local",
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  site: APP.website,
  srcDir: "./src",
  outDir: "./app/out",
  publicDir: "./site",
  build: {
    client: "./app/out/client",
    server: "./app/out/server",
  },
  compressHTML: true,
  output: "server",
  image: {
    service: passthroughImageService(),
  },
  adapter: deno({
    port: Number(SERVER_PORT || "4444"),
    start: false,
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
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
  },
});
