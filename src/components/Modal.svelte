<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { createEventDispatcher, onMount } from 'svelte';

	/** Max width of the panel, e.g. "760px". */
	export let width = '760px';
	/** "scroll" = whole panel scrolls; "flex" = column layout with inner scroll regions. */
	export let layout: 'scroll' | 'flex' = 'scroll';
	/** Optional custom panel background (defaults to var(--bg2)). */
	export let background = 'var(--bg2)';
	/** Accessible name for the dialog (announced by screen readers). */
	export let label = '';

	const dispatch = createEventDispatcher<{ close: void }>();
	const close = () => dispatch('close');
	const stop = (e: MouseEvent) => e.stopPropagation();

	let panel: HTMLElement;

	const FOCUSABLE =
		'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

	const focusables = (): HTMLElement[] =>
		Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
			(el) => el.offsetParent !== null
		);

	// Trap Tab within the dialog so keyboard focus can't wander into the page behind it.
	function onKeydown(e: KeyboardEvent) {
		if (e.key !== 'Tab') return;
		const nodes = focusables();
		if (nodes.length === 0) {
			e.preventDefault();
			panel.focus();
			return;
		}
		const first = nodes[0];
		const last = nodes[nodes.length - 1];
		const active = document.activeElement;
		if (e.shiftKey && (active === first || active === panel)) {
			e.preventDefault();
			last.focus();
		} else if (!e.shiftKey && active === last) {
			e.preventDefault();
			first.focus();
		}
	}

	onMount(() => {
		const restore = document.activeElement as HTMLElement | null;
		(focusables()[0] ?? panel).focus();
		return () => restore?.focus?.();
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
<div class="backdrop" on:click={close} transition:fade={{ duration: 180 }}>
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions a11y-no-noninteractive-element-interactions -->
	<div
		class="panel {layout}"
		role="dialog"
		aria-modal="true"
		aria-label={label || undefined}
		tabindex="-1"
		bind:this={panel}
		style="--w:{width}; --panel-bg:{background};"
		on:click={stop}
		on:keydown={onKeydown}
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
	/* The panel is only a programmatic focus target (initial focus / empty dialog);
	   its interactive children show their own focus ring. */
	.panel:focus {
		outline: none;
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
