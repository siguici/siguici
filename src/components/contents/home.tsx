import { component$ } from '@builder.io/qwik';
import styles from './home.module.css';

export default component$(() => {
  return (
    <div class={styles.home}>
      <div class={styles['home-content']}>
        <div>
        <h1 class="text-6xl font-bold">
          Welcome to <span class="text-blue-500">Sigui</span>!
        </h1>
        <p class="py-6">
          Sigui is a <strong>web application developer</strong> and <strong>web server administrator</strong>.
        </p>
        <div class={styles.buttons}>
          <a href="https://twitter.com/siguici" target="_blank" rel="noreferrer" class={[styles.button, styles['button-primary']]}>
            Follow Sigui
          </a>
          <a href="https://github.com/siguici" target="_blank" rel="noreferrer" class={[styles.button, styles['button-secondary']]}>
            Ping Sigui
          </a>
        </div>
        </div>
      </div>
    </div>
  );
});
