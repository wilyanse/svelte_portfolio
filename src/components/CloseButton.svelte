<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from './Icon.svelte';
	const dispatch = createEventDispatcher<{ close: void }>();
</script>

<button class="close" aria-label="Close" on:click={() => dispatch('close')}>
	<Icon name="x" size={18} />
</button>

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
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: inherit;
		transition: border-color 0.15s, transform 0.15s;
	}
	.close:hover {
		border-color: var(--accent);
		transform: rotate(90deg);
	}
</style>
