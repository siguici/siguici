<script lang="ts">
export let href: string;
</script>

<a href={href}><slot /></a>

<style>
	a {
		@apply relative flex place-content-center text-center px-2 py-8 leading-5 gap-3 no-underline rounded-full overflow-hidden whitespace-nowrap;
		color: var(--accent-text-over);
		background: var(--gradient-accent-orange);
		box-shadow: var(--shadow-md);

		/* Overlay for hover effects. */
		&::after {
			@apply absolute inset-0 pointer-events-none mix-blend-overlay;
			content: '';
			transition: background-color var(--theme-transition);
		}

		&:focus::after,
		&:hover::after {
			background-color: hsla(var(--gray-999-basis), 0.3);
		}

		@media (min-width: 20em) {
			& {
				@apply text-lg;
			}
		}

		@media (min-width: 50em) {
			& {
				@apply py-5 px-10 text-xl;
			}
		}
	}
</style>
