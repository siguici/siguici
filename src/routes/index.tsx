import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Home from '~/components/contents/home';

export default component$(() => {
  return (
    <>
      <Home />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Sigui',
  meta: [
    {
      name: 'description',
      content: 'Welcome to Sigui',
    },
  ],
};
