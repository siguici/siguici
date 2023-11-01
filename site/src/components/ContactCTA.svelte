<script lang="ts">
import CallToAction from './CallToAction.svelte';
import Icon from './Icon.svelte';
</script>

<aside>
	<h2>Interested in working together?</h2>
	<CallToAction href="mailto:contact@sigui.ci">
		Send Me a Message
		<Icon icon="paper-plane-tilt" size="1.2em" />
	</CallToAction>
</aside>

<style>
	aside {
		@apply flex flex-col items-center gap-12 px-6;
		border-top: 1px solid var(--gray-800);
		border-bottom: 1px solid var(--gray-800);
		background-color: var(--gray-999_40);
		box-shadow: var(--shadow-sm);

		@media (min-width: 50em) {
			& {
				@apply p-32 flex-row flex-wrap justify-between;
			}
		}
	}

	h2 {
		@apply text-xl text-center;
		max-width: 15ch;
	
		@media (min-width: 50em) {
			& {
				@apply text-3xl text-left;
			}
		}
	}
</style>
