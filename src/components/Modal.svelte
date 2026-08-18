<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { createEventDispatcher } from 'svelte';

	/** Max width of the panel, e.g. "760px". */
	export let width = '760px';
	/** "scroll" = whole panel scrolls; "flex" = column layout with inner scroll regions. */
	export let layout: 'scroll' | 'flex' = 'scroll';
	/** Optional custom panel background (defaults to var(--bg2)). */
	export let background = 'var(--bg2)';

	const dispatch = createEventDispatcher<{ close: void }>();
	const close = () => dispatch('close');
	const stop = (e: MouseEvent) => e.stopPropagation();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
<div class="backdrop" on:click={close} transition:fade={{ duration: 180 }}>
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions a11y-no-noninteractive-element-interactions -->
	<div
		class="panel {layout}"
		role="dialog"
		aria-modal="true"
		style="--w:{width}; --panel-bg:{background};"
		on:click={stop}
		transition:scale={{ duration: 260, start: 0.94, opacity: 0, easing: cubicOut }}
	>
		<slot />
	</div>
</div>

<style lang="postcss">
	.backdrop {
		position: fixed;
		inset: 0;
		z-index: 20;
		background: rgba(0, 0, 0, 0.55);
		backdrop-filter: blur(5px);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 34px;
	}

	.panel {
		width: min(var(--w), 94vw);
		height: 86vh;
		border-radius: 28px;
		border: 1px solid var(--bd);
		background: var(--panel-bg);
		box-shadow: 0 40px 90px -30px rgba(0, 0, 0, 0.7);
	}

	.panel.scroll {
		overflow: auto;
		padding: 40px;
	}

	.panel.flex {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		padding: 34px;
	}

	@media (max-width: 640px) {
		.backdrop {
			padding: 16px;
		}
		.panel.scroll {
			padding: 26px;
		}
		.panel.flex {
			padding: 22px;
		}
	}
</style>
