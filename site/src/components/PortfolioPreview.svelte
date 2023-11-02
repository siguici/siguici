<script lang="ts">
import type { CollectionEntry } from 'astro:content';

export let project: CollectionEntry<'work'>;
	
const { data, slug } = project;
</script>

<a class="card" href={`/work/${slug}`}>
	<span class="title">{data.title}</span>
	<img src={data.img} alt={data.img_alt || ''} loading="lazy" decoding="async" />
</a>

<style>
	.card {
		display: grid;
		grid-template: auto 1fr / auto 1fr;
		height: 11rem;
		background: var(--gradient-subtle);
		border: 1px solid var(--gray-800);
		border-radius: 0.75rem;
		overflow: hidden;
		box-shadow: var(--shadow-sm);
		text-decoration: none;
		font-family: var(--font-brand);
		font-size: var(--text-lg);
		font-weight: 500;
		transition: box-shadow var(--theme-transition);

		&:hover {
			box-shadow: var(--shadow-md);
		}

		@media (min-width: 50em) {
			& {
				height: 22rem;
				border-radius: 1.5rem;
			}
		}
	}

	.title {
		@apply z-10 m-2 px-4 py-2 rounded-md;
		grid-area: 1 / 1 / 2 / 2;
		background: var(--gray-999);
		color: var(--gray-200);

		@media (min-width: 50em) {
			& {
				@apply rounded-xl;
			}
		}
	}

	img {
		@apply w-full h-full object-cover;
		grid-area: 1 / 1 / 3 / 3;
	}
</style>
