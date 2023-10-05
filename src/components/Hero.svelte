<script lang="ts">
let title: string;
let tagline: string = '';
let align: 'start' | 'center' = 'center';

export { align, tagline, title };
</script>

<header class={'hero stack gap-4 ' + align }>
	<div class="stack gap-2">
		<h1 class="title">{title}</h1>
		{#if tagline}
		<p class:tagline>{tagline}</p>
		{/if}
	</div>
	<slot />
</header>

<style>
	.hero {
		font-size: var(--text-lg);
		text-align: center;
	}

	.title,
	.tagline {
		max-width: 37ch;
		margin-inline: auto;
	}

	.title {
		font-size: var(--text-3xl);
		color: var(--gray-0);
	}

	@media (min-width: 50em) {
		.hero {
			font-size: var(--text-xl);
		}

		.start {
			text-align: start;
		}

		.start .title,
		.start .tagline {
			margin-inline: unset;
		}

		.title {
			font-size: var(--text-5xl);
		}
	}
</style>
