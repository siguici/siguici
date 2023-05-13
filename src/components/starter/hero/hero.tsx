import { component$ } from '@builder.io/qwik';
import styles from './hero.module.css';

export default component$(() => {
  return (
    <div class={['container', styles.hero]}>
      <h1>
        Welcome to <span class="highlight">Sigui</span>!
      </h1>
      <p>Sigui is a web application developer and web server administrator.</p>
      <div class={styles['button-group']}>
        <a href="https://twitter.com/siguici" target="_blank" rel="noreferrer" class="button">
          Follow Sigui
        </a>
        <a href="https://github.com/siguici" target="_blank" rel="noreferrer" class="button button-dark">
          Ping Sigui
        </a>
      </div>
    </div>
  );
});
