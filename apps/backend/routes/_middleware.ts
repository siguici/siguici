import { define } from "@/utils.ts";
import { handle } from '~/frontend/out/server/entry.mjs';

interface State {
  kv: Deno.Kv;
}

export default define.middleware(async (ctx) => {
  const req = ctx.req;
  const res = await handle(req);
  if (res.ok) {
    return res;
  }
  ctx.state.kv = await Deno.openKv();
  return await ctx.next();
});
