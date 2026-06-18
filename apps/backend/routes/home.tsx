import { useSignal } from '@preact/signals';
import { Head } from "fresh/runtime";
import { define } from "@/utils.ts";
import Counter from "@/islands/Counter.tsx";

export default define.page(function Home(ctx) {
  const count = useSignal(3);

  console.log("Shared value " + ctx.state.shared);

  return (
    <div class="px-4 py-8 mx-auto fresh-gradient min-h-screen">
      <Head>
        <title>Sigui counter</title>
      </Head>
      <div class='max-w-3xl mx-auto flex flex-col items-center justify-center'>
        <img
          class='my-6'
          src='/favicon.svg'
          width='128'
          height='128'
          alt='The Sigui Logo'
        />
        <h1 class='text-4xl font-bold'>Welcome to Sigui's</h1>
        <p class='my-4'>
          Try updating this message in the
          <code class='mx-2'>./routes/index.tsx</code> file, and refresh.
        </p>
        <Counter count={count} />
      </div>
    </div>
  );
});
