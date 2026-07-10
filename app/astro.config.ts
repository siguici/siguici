import sitemap from '@astrojs/sitemap';
import deno from '@deno/astro-adapter';
import tailwindcss from '@tailwindcss/vite';
import type { AstroIntegration } from 'astro';
import { defineConfig, passthroughImageService } from 'astro/config';
import { app } from './src/config';

// https://astro.build/config
export default defineConfig({
  site: app.url,
  srcDir: './src',
  outDir: './out',
  publicDir: './public',
  compressHTML: true,
  output: 'server',
  image: {
    service: passthroughImageService(),
  },
  adapter: deno() as AstroIntegration,
  integrations: [
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
  ],
  vite: {
    ssr: {
      noExternal: ['path-to-regexp'],
    },
    plugins: [tailwindcss()],
  },
});
