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

setTheme(isDark());
</script>

<button on:click={ toogleTheme } aria-pressed="false">
	<span class="sr-only">Dark theme</span>
	<span class="icon light"><Icon icon="sun" /></span>
	<span class="icon dark"><Icon icon="moon-stars" /></span>
</button>

<style>
	button {
		display: flex;
		border: 0;
		border-radius: 999rem;
		padding: 0;
		background-color: var(--gray-999);
		box-shadow: inset 0 0 0 1px var(--accent-overlay);
		cursor: pointer;
	}

	.icon {
		z-index: 1;
		position: relative;
		display: flex;
		padding: 0.5rem;
		width: 2rem;
		height: 2rem;
		font-size: 1rem;
		color: var(--accent-overlay);
	}

	.icon.light::before {
		content: '';
		z-index: -1;
		position: absolute;
		inset: 0;
		background-color: var(--accent-regular);
		border-radius: 999rem;
	}

	:global(.theme-dark) .icon.light::before {
		transform: translateX(100%);
	}

	:global(.theme-dark) .icon.dark,
	:global(html:not(.theme-dark)) .icon.light,
	button[aria-pressed='false'] .icon.light {
		color: var(--accent-text-over);
	}

	@media (prefers-reduced-motion: no-preference) {
		.icon,
		.icon.light::before {
			transition: transform var(--theme-transition), color var(--theme-transition);
		}
	}

	@media (forced-colors: active) {
		.icon.light::before {
			background-color: SelectedItem;
		}
	}
</style>
