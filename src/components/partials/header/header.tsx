import { component$ } from '@builder.io/qwik';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={['navbar', styles.wrapper]}>
        <div class="navbar-start">
          <a href="/" title="Sigui" class="btn btn-ghost normal-case text-xl">
            Sigui
          </a>
        </div>
        <div class="navbar-end">
          <ul class="menu menu-horizontal">
            <li>
              <a href="https://github.com/siguici/" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://twitter.com/siguici/" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/siguici/" target="_blank">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
});
