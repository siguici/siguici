import { MiddlewareHandlerContext } from '$fresh/server.ts';
import { handle } from '@/out/server/entry.mjs';

interface State {
  kv: Deno.Kv;
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  const res = await handle(req);
  if (res.ok) {
    return res;
  }
  ctx.state.kv = await Deno.openKv();
  return await ctx.next();
}
