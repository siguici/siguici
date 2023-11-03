<div class="pill"><slot /></div>

<style>
	.pill {
		@apply flex py-2 px-4 gap-2 rounded-full text-lg leading-6 whitespace-nowrap;
		color: var(--accent-text-over);
		border: 1px solid var(--accent-regular);
		background-color: var(--accent-regular);
	}
</style>
