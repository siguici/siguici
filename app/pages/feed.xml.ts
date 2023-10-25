import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { APP } from '../config';

const projects = (await getCollection('work')).sort(
  (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
);

export async function GET(context: APIContext) {
  return rss({
    title: APP.title,
    description: APP.description,
    site: context.site || import.meta.env.SITE,
    items: [
      ...projects.map((project) => ({
        title: project.data.title,
        pubDate: project.data.publishDate,
        description: project.data.description,
        link: `/work/${project.slug}/`,
      })),
      ...await pagesGlobToRssItems(
        import.meta.glob('./**/*.{md,mdx,}'),
      ),
    ],
    customData: `<language>${APP.locale}</language>`,
    stylesheet: '/feed.xsl',
  });
}
