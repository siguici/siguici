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
		@apply text-center;
	}

	.title,
	.tagline {
		max-width: 37ch;
		margin-inline: auto;
	}

	.title {
		@apply text-5xl leading-none;
		color: var(--gray-0);

		@media (min-width: 50em) {
			& {
				@apply text-7xl leading-tight;
			}
		}
	}

	.tagline {
		@apply my-5 text-xl font-thin leading-snug;
		color: var(--gray-200);

		@media (min-width: 50em) {
			& {
				@apply text-2xl leading-relaxed;
			}
		}
	}

	.start {
		@media (min-width: 50em) {
			& {
				@apply text-start;
			}

			& .title,
			& .tagline {
				margin-inline: unset;
			}
		}
	}
</style>
