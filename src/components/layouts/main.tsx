import { component$, Slot } from '@builder.io/qwik';

import Header from '~/components/partials/header/header';
import Footer from '~/components/partials/footer/footer';

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
