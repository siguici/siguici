import { defineCollection, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";

const work = defineCollection({
  type: "content",
  schema: rssSchema.merge(
    z.object({
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
    }),
  ),
});

export const collections = {
  work,
};
