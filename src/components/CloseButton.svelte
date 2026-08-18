<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher<{ close: void }>();
</script>

<button class="close" aria-label="Close" on:click={() => dispatch('close')}>&times;</button>

<style lang="postcss">
	.close {
		flex: 0 0 auto;
		width: 40px;
		height: 40px;
		border-radius: 99px;
		border: 1px solid var(--bd);
		background: var(--tile);
		color: var(--tx);
		cursor: pointer;
		font-size: 20px;
		line-height: 1;
		font-family: inherit;
		transition: border-color 0.15s, transform 0.15s;
	}
	.close:hover {
		border-color: var(--accent);
		transform: rotate(90deg);
	}
</style>
