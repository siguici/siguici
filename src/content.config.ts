import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { rssSchema } from '@astrojs/rss';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
  work: defineCollection({
    // Load Markdown files in the src/content/work directory.
    loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
    schema: rssSchema.extend({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
    }),
  }),
};
