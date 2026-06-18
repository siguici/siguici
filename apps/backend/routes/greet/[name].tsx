import { define } from '@/utils.ts';

export const handler = define.handlers({
  GET(ctx) {
    return new Response(
      `<div>Hello ${ctx.params.name}</div>`,
    );
  },
});
