import { serveDir } from 'https://deno.land/std@0.140.0/http/file_server.ts';
import { handle } from '../dist/server/entry.mjs';

const port = Deno.env.get('SERVER_PORT') || 8000;
const ac = new AbortController();

Deno.serve({
  port,
  signal: ac.signal,
  onListen({ port, hostname }) {
    console.log(`Server started at http://${hostname}:${port}`);
  },
  handler: async (req: Request) => {
    const pathname = new URL(req.url).pathname;
    if (
      pathname.startsWith('/favicon.') || pathname.startsWith('/_astro') ||
      pathname.startsWith('/assets') || pathname.startsWith('/static')
    ) {
      return await serveDir(req, {
        fsRoot: 'dist/client',
      });
    }
    return handle(req);
  },
});
