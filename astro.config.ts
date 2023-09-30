import deno from '@astrojs/deno';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";

const { SERVER_PORT } = loadEnv(process.env.NODE_ENV || 'local', process.cwd(), '');

export default defineConfig({
  output: 'server',
  adapter: deno({
    port: Number(SERVER_PORT || 4444),
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['path-to-regexp'],
    },
  },
});
