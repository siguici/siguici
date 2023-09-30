import deno from '@astrojs/deno';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'server',
  adapter: deno({
    port: 3000,
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
