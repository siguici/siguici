import { defineCollection } from "astro:content";
import { rssSchema } from "@astrojs/rss";
import { z } from "astro/zod";

const work = defineCollection({
	type: "content",
	schema: rssSchema.extend({
    tags: z.array(z.string()),
    img: z.string(),
    img_alt: z.string().optional(),
  }),
});

export const collections = {
	work,
};
