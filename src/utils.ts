import { type CollectionEntry, getCollection } from "astro:content";
import {
  type RSSFeedItem,
  type RSSOptions,
  pagesGlobToRssItems,
} from "@astrojs/rss";
import type { APIContext } from "astro";
import { app } from "./config";

export async function sortWork(): Promise<CollectionEntry<"work">[]> {
  return (await getCollection("work")).sort((a, b) => {
    if (a.data.pubDate && b.data.pubDate) {
      return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
    }
    if (a.data.pubDate) {
      return -1;
    }
    if (b.data.pubDate) {
      return 1;
    }
    return 0;
  });
}

export async function rssWork(context: APIContext): Promise<RSSOptions> {
  return {
    title: app.title,
    description: app.description,
    site: context.site || import.meta.env.SITE,
    items: [
      ...(await workRssItems()),
      ...((await pagesGlobToRssItems(
        import.meta.glob("./pages/**/*.{md,mdx,}"),
      )) as RSSFeedItem[]),
    ],
    customData: `<language>${app.locale}</language>`,
    stylesheet: "/feed.xsl",
  };
}

export async function workRssItems(): Promise<RSSFeedItem[]> {
  const items: RSSFeedItem[] = [];
  for (const work of await sortWork()) {
    items.push(workRssFeedItem(work));
  }
  return items;
}

export function workRssFeedItem(work: CollectionEntry<"work">): RSSFeedItem {
  return {
    title: work.data.title || app.title,
    pubDate: work.data.pubDate || new Date(),
    description: work.data.description || app.description,
    customData: work.data.customData,
    link: `/work/${work.slug}/`,
  };
}
