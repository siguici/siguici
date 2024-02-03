import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { rssWork } from "../utils";

export async function GET(context: APIContext) {
  return rss(await rssWork(context));
}
