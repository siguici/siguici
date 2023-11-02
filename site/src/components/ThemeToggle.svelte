<script lang="ts" client:only>
import Icon from './Icon.svelte';

const isDark = () => document.documentElement.classList.contains('theme-dark');

const toogleTheme = (e) => {
	const dark = !isDark();
	setTheme(dark);
	e.target.setAttribute('aria-pressed', String(dark));
};

const setTheme = (dark: boolean) => {
	document.documentElement.classList[dark ? 'add' : 'remove']('theme-dark');
};

const setDarkMode = () => {
	setTheme(isDark());
};

setDarkMode();

document.addEventListener('astro:after-swap', setDarkMode);
</script>

<button on:click={ toogleTheme } aria-pressed="false">
	<span class="sr-only">Dark theme</span>
	<span class="icon light"><Icon icon="sun" /></span>
	<span class="icon dark"><Icon icon="moon-stars" /></span>
</button>

<style>
	button {
		@apply flex border-0 rounded-full p-0 cursor-pointer;
		background-color: var(--gray-999);
		box-shadow: inset 0 0 0 1px var(--accent-overlay);
	}

	.icon {
		@apply z-10 relative flex p-2 w-8 h-8 text-base;
		color: var(--accent-overlay);

		&.light::before {
			@apply -z-10 absolute inset-0 rounded-full content-[''];
			background-color: var(--accent-regular);
		}

		@media (prefers-reduced-motion: no-preference) {
			&,
			&.light::before {
				transition: transform var(--theme-transition), color var(--theme-transition);
			}
		}

		@media (forced-colors: active) {
			&.light::before {
				background-color: SelectedItem;
			}
		}
	}

	:global(.theme-dark) .icon.light::before {
		@apply translate-x-full;
	}

	:global(.theme-dark) .icon.dark,
	:global(html:not(.theme-dark)) .icon.light,
	button[aria-pressed='false'] .icon.light {
		color: var(--accent-text-over);
	}
</style>
