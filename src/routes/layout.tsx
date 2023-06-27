import { component$,Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import styles from './main.css?inline';
import MainLayout from '~/components/layouts/main';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <MainLayout>
        <Slot />
    </MainLayout>
  );
});
