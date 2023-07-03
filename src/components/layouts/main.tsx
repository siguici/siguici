import { component$, Slot } from '@builder.io/qwik';

import Header from '~/components/partials/header/header';
import Footer from '~/components/partials/footer/footer';

export default component$(() => {
  return (
    <div class="grid grid-cols-1 grid-rows-[auto_1fr_auto] h-screen w-screen">
      <Header/>
      <main>
        <Slot/>
      </main>
      <Footer/>
    </div>
  );
});
