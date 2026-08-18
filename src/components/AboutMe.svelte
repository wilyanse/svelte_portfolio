<script lang="ts">
	import { fly } from 'svelte/transition';
	import Modal from './Modal.svelte';
	import CloseButton from './CloseButton.svelte';
	import { closeModal } from '$lib/portfolio';
	import logo from '$lib/images/logo.png';

	const items = {
		done: [
			'Aspired to become a Game Developer',
			'Worked in Software Development',
			'Transitioned to Web Development'
		],
		aim: [
			'Work with data professionally',
			'Develop skills in other CS fields as a hobby',
			'Leave my mark on the world!'
		]
	};

	let mode: 'done' | 'aim' = 'done';
</script>

<Modal width="760px" on:close={closeModal}>
	<div class="head">
		<div class="eyebrow">01 &mdash; ABOUT ME</div>
		<CloseButton on:close={closeModal} />
	</div>

	<div class="name-row">
		<img src={logo} alt="Will" />
		<h2>Will Bryan Jose</h2>
	</div>

	<p class="intro">
		I&rsquo;m a big data fan aspiring to one day become a <strong>Data Scientist</strong>. I&rsquo;ve
		worked across several fields of computer science &mdash; and the more you explore, the more
		you&rsquo;ll find out.
	</p>

	<div class="tabs">
		<button class="tab" class:active={mode === 'done'} on:click={() => (mode = 'done')}>
			What I&rsquo;ve done
		</button>
		<button class="tab" class:active={mode === 'aim'} on:click={() => (mode = 'aim')}>
			What I aim to do
		</button>
	</div>

	<div class="list">
		{#each items[mode] as text, i (mode + i)}
			<div class="item" in:fly={{ y: 12, duration: 320, delay: i * 60 }}>
				<span class="dot" />
				<span>{text}</span>
			</div>
		{/each}
	</div>
</Modal>

<style lang="postcss">
	.head {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	.eyebrow {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		letter-spacing: 0.16em;
		color: var(--accent);
	}
	.name-row {
		display: flex;
		align-items: center;
		gap: 22px;
		margin: 20px 0 8px;
	}
	.name-row img {
		width: 92px;
		height: 92px;
		flex: 0 0 auto;
		object-fit: contain;
		border-radius: 24px;
		background: color-mix(in srgb, var(--accent) 12%, transparent);
		padding: 6px;
	}
	.name-row h2 {
		margin: 0;
		font-size: 34px;
		font-weight: 900;
		letter-spacing: -0.02em;
		line-height: 1.05;
	}
	.intro {
		margin: 0 0 26px;
		font-size: 18px;
		line-height: 1.5;
		color: var(--tx);
	}
	.intro strong {
		color: var(--accent);
	}
	.tabs {
		display: flex;
		gap: 8px;
		margin-bottom: 18px;
	}
	.tab {
		padding: 7px 16px;
		border-radius: 99px;
		border: none;
		background: transparent;
		color: var(--tx2);
		font-weight: 600;
		font-size: 12px;
		cursor: pointer;
		font-family: inherit;
		transition: all 0.15s;
	}
	.tab.active {
		background: var(--accent);
		color: var(--accent-ink);
		font-weight: 700;
	}
	.list {
		display: flex;
		flex-direction: column;
		gap: 11px;
	}
	.item {
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 15px 18px;
		border-radius: 16px;
		background: var(--tile2);
		border: 1px solid var(--bd);
	}
	.item span:not(.dot) {
		font-size: 16px;
		font-weight: 600;
	}
	.dot {
		width: 10px;
		height: 10px;
		border-radius: 4px;
		background: var(--accent);
		flex: 0 0 auto;
	}
</style>
