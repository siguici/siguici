<script lang="ts">
let variant: 'offset' | 'small';

export { variant };
</script>

<ul class:offset={variant === 'offset'} class:small={variant === 'small'} class='list-grid'>
	<slot />
</ul>

<style>
	.list-grid {
		@apply grid auto-rows-fr gap-4 list-none p-0;

		&.small {
			@apply grid-cols-1 gap-6;

			/* If last row contains only one item, make it span both columns. */
			& > :global(:last-child:nth-child(odd)) {
				grid-column: 1 / 3;
			}
		}

		@media (min-width: 50em) {
			& {
				@apply grid-cols-2 gap-16;
			}

			&.offset {
				--row-offset: 7.5rem;
				padding-bottom: var(--row-offset);

				/* Shift first item in each row vertically to create staggered effect. */
				& > :global(:nth-child(odd)) {
					transform: translateY(var(--row-offset));
				}

				/* If last row contains only one item, display it in the second column. */
				& > :global(:last-child:nth-child(odd)) {
					@apply transform-none;
					grid-column: 2 / 3;
				}
			}

			&.small {
				@apply flex flex-wrap justify-center gap-8;

				& > :global(*) {
					@apply basis-80;	
				}
			}
		}
	}
</style>
