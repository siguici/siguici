import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import type { APIContext } from "astro";
import { APP } from "../config";
import { getCollection } from "astro:content";

const projects = (await getCollection("work")).sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
);

export async function GET(context: APIContext) {
  return rss({
    title: APP.title,
    description: APP.description,
    site: context.site || import.meta.env.SITE,
    items: [
      ...projects.map((project) => ({
        title: project.data.title,
        pubDate: project.data.pubDate,
        description: project.data.description,
        customData: project.data.customData,
        link: `/work/${project.slug}/`,
      })),
      ...(await pagesGlobToRssItems(import.meta.glob("./**/*.{md,mdx,}"))),
    ],
    customData: `<language>${APP.locale}</language>`,
    stylesheet: "/feed.xsl",
  });
}
