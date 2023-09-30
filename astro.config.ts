import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import deno from "@astrojs/deno";

export default defineConfig({
  output: "server",
  adapter: deno({
    port: 3000,
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ]
});