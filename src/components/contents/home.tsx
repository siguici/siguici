import { component$ } from '@builder.io/qwik';
import styles from './home.module.css';

export default component$(() => {
  return (
    <div class={styles.home}>
      <div class="hero-content text-center">
        <div>
        <h1 class="text-6xl font-bold">
          Welcome to <span class="text-blue-500">Sigui</span>!
        </h1>
        <p class="py-6">
          Sigui is a <strong>web application developer</strong> and <strong>web server administrator</strong>.
        </p>
        <div class="space-x-8 mt-6">
          <a href="https://twitter.com/siguici" target="_blank" rel="noreferrer" class="rounded py-4 px-8 bg-blue-300 ring hover:bg-blue-400 focus:bg-blue-600 ring-blue-500">
            Follow Sigui
          </a>
          <a href="https://github.com/siguici" target="_blank" rel="noreferrer" class="rounded py-4 px-8 bg-violet-300 ring hover:bg-violet-400 focus:bg-violet-600 ring-violet-500">
            Ping Sigui
          </a>
        </div>
        </div>
      </div>
    </div>
  );
});
