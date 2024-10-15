import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import deno from "deno-astro-adapter";

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