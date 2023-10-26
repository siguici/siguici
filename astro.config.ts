import deno from '@astrojs/deno';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';
const {
  SERVER_PORT,
} = loadEnv(process.env.NODE_ENV || 'local', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  site: 'https://sigui.ci',
  srcDir: './app/src',
  outDir: './app/out',
  publicDir: './site',
  build: {
    client: './app/out/client',
    server: './app/out/server',
  },
  compressHTML: true,
  output: 'server',
  adapter: deno({
    port: Number(SERVER_PORT || '4444'),
    start: false,
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    svelte(),
    sitemap({
      customPages: ['https://sikessem.com/sitemap.xml'],
      changefreq: 'daily',
      priority: 0.8,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          fr: 'fr-CI',
        },
      },
    }),
    preact({
      compat: true,
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['path-to-regexp'],
    },
  },
});
