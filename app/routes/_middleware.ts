import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { handle } from '../out/server/entry.mjs';

interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
    const res = await handle(req);
    if (res.ok) {
        return res;
    }
    return await ctx.next();
}
