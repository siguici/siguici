import deno from '@astrojs/deno';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import svelte from '@astrojs/svelte';
const {
  SERVER_PORT,
} = loadEnv(process.env.NODE_ENV || 'local', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  site: 'https://sigui.ci',
  publicDir: './site',
  output: 'server',
  adapter: deno({
    port: Number(SERVER_PORT || '4444'),
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    svelte(),
  ],
  vite: {
    ssr: {
      noExternal: ['path-to-regexp'],
    },
  },
});
