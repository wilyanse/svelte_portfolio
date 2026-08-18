<script lang="ts">
	import { fly } from 'svelte/transition';
	import { toast } from '$lib/portfolio';
</script>

{#if $toast}
	<div class="anchor">
		<div class="toast" transition:fly={{ y: 12, duration: 220 }}>{$toast}</div>
	</div>
{/if}

<style lang="postcss">
	.anchor {
		position: fixed;
		left: 50%;
		bottom: 34px;
		z-index: 30;
		transform: translateX(-50%);
		pointer-events: none;
	}
	.toast {
		background: var(--accent);
		color: var(--accent-ink);
		font-weight: 700;
		font-size: 13px;
		padding: 12px 22px;
		border-radius: 99px;
		box-shadow: 0 16px 40px -12px rgba(0, 0, 0, 0.5);
		white-space: nowrap;
	}
</style>
