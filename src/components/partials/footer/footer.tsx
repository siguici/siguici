import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '~/routes/layout';
import styles from './footer.module.css';

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class="py-4">
      <p class={styles.paragraph}>
        <span>Made with ❤︎ by <a href="https://twitter.com/intent/follow?screen_name=siguici" target="_blank" style="content:url(https://img.shields.io/twitter/follow/siguici.svg?label=@siguici);margin-bottom:-6px">@siguici</a>.</span>
        <span class={styles.spacer}>|</span>
        <sub>{serverTime.value.date}</sub>
      </p>
    </footer>
  );
});
