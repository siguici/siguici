import { defineCollection, z } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

const work = defineCollection({
  schema: {
    ...rssSchema,
    ...z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
    }),
  },
});

export const collections = {
  work,
};
