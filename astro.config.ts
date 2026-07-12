import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, passthroughImageService } from 'astro/config';
import { app } from './src/config';

// https://astro.build/config
export default defineConfig({
  site: app.url,
  compressHTML: true,
  image: {
    service: passthroughImageService(),
  },
  legacy: {
    collectionsBackwardsCompat: true,
  },
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
    starlight({
      favicon: '/favicon.svg',
      logo: {
        src: './src/assets/logo.svg',
        alt: 'S-shaped logo',
      },
      title: 'Sigui Kessé Emmanuel',
      disable404Route: true,
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/siguici',
        },
        {
          icon: 'twitter',
          label: 'X',
          href: 'https://x.com/siguici',
        },
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.gg/PURzNH7KBj',
        },
        {
          icon: 'youtube',
          label: 'YouTube',
          href: 'https://youtube.com/@siguici',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/siguici/siguici/edit/0.x/doc/',
      },
      sidebar: [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: 'Getting started',
          items: [{ label: 'Quickstart', link: '/start/' }],
        },
        {
          label: 'Reference',
          items: [{ autogenerate: { directory: 'reference' } }],
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
