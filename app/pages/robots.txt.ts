import type { APIRoute } from 'astro';

const robots = `
# www.robotstxt.org/

User-agent: *

Disallow:

Sitemap: ${new URL('sitemap-index.xml', 'https://sigui.ci').href}
`.trim();

export const GET: APIRoute = () =>
  new Response(robots, {
    headers: { 'Content-Type': 'text/plain' },
  });
