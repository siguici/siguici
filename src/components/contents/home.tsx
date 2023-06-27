import { component$ } from '@builder.io/qwik';
import styles from './home.module.css';

export default component$(() => {
  return (
    <div class={styles.home}>
      <div class="hero-content text-center">
        <div>
        <h1 class="text-6xl font-bold">
          Welcome to <span class="highlight">Sigui</span>!
        </h1>
        <p class="py-6">Sigui is a web application developer and web server administrator.</p>
        <div class="space-x-4">
          <a href="https://twitter.com/siguici" target="_blank" rel="noreferrer" class="btn btn-primary">
            Follow Sigui
          </a>
          <a href="https://github.com/siguici" target="_blank" rel="noreferrer" class="btn btn-secondary">
            Ping Sigui
          </a>
        </div>
        </div>
      </div>
    </div>
  );
});
