import type { APIRoute } from "astro";
import { app } from "../config";

const robots = `
# www.robotstxt.org/

User-agent: *

Disallow:

Sitemap: ${new URL("sitemap-index.xml", app.url).href}
`.trim();

export const GET: APIRoute = () =>
	new Response(robots, {
		headers: { "Content-Type": "text/plain" },
	});
