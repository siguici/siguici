import type { APIRoute } from "astro";
import { APP } from "../config";

const robots = `
# www.robotstxt.org/

User-agent: *

Disallow:

Sitemap: ${new URL("sitemap-index.xml", APP.website).href}
`.trim();

export const GET: APIRoute = () =>
  new Response(robots, {
    headers: { "Content-Type": "text/plain" },
  });
