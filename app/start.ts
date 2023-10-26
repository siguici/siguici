import { serve } from 'https://deno.land/std@0.167.0/http/server.ts';
import { serveDir } from 'https://deno.land/std@0.140.0/http/file_server.ts';
import { handle } from '../dist/server/entry.mjs';

serve(async (req: Request) => {
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
});
