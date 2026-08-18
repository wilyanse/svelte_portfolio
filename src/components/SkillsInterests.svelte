<script lang="ts">
	import { scale } from 'svelte/transition';
	import Modal from './Modal.svelte';
	import CloseButton from './CloseButton.svelte';
	import { closeModal } from '$lib/portfolio';
	import data from '$lib/data/skills_interests.json';

	const skills: string[] = data.skills;
	const interests: string[] = data.interests;
</script>

<Modal width="720px" on:close={closeModal}>
	<div class="head">
		<div class="eyebrow">04 &mdash; SKILLS &amp; INTERESTS</div>
		<CloseButton on:close={closeModal} />
	</div>

	<div class="label">SKILLS</div>
	<div class="row">
		{#each skills as s, i}
			<span class="skill" in:scale={{ duration: 240, start: 0.9, delay: i * 50 }}>{s}</span>
		{/each}
	</div>

	<div class="label">INTERESTS</div>
	<div class="row">
		{#each interests as s, i}
			<span class="interest" in:scale={{ duration: 240, start: 0.9, delay: i * 50 }}>{s}</span>
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
	.label {
		font-size: 13px;
		font-weight: 700;
		color: var(--tx2);
		margin: 26px 0 14px;
		letter-spacing: 0.04em;
	}
	.label:first-of-type {
		margin-top: 26px;
	}
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
	.skill {
		padding: 11px 18px;
		border-radius: 99px;
		font-size: 15px;
		font-weight: 700;
		background: color-mix(in srgb, var(--accent) 18%, transparent);
		border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
	}
	.interest {
		padding: 11px 18px;
		border-radius: 99px;
		font-size: 15px;
		font-weight: 600;
		background: var(--tile2);
		border: 1px solid var(--bd);
		cursor: default;
		transition: transform 0.15s, background 0.15s, color 0.15s;
	}
	.interest:hover {
		transform: translateY(-3px);
		background: var(--gold);
		color: #241f10;
	}
</style>
