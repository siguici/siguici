import { component$ } from '@builder.io/qwik';
import {
  SiGithub as GithubIcon,
  SiTwitter as TwitterIcon,
  SiLinkedin as LinkedinIcon,
} from "@qwikest/icons/simpleicons";
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={[styles.navbar, styles.wrapper]}>
        <div class={styles['navbar-start']}>
          <a href="/" title="Sigui" class={styles.brand}>
            Sigui
          </a>
        </div>
        <div class={styles['navbar-end']}>
          <ul class={[styles.menu, styles['menu-horizontal']]}>
            <li>
              <a href="https://github.com/siguici/" target="_blank" rel="noreferrer" aria-label="Github">
                <GithubIcon/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/siguici/" target="_blank" rel="noreferrer" aria-label="Twitter">
                <TwitterIcon/>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/siguici/" target="_blank" rel="noreferrer" aria-label="Linkedin">
                <LinkedinIcon/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
});
