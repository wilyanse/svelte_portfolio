<script lang="ts">
	import { scale } from 'svelte/transition';
	import Modal from './Modal.svelte';
	import CloseButton from './CloseButton.svelte';
	import Icon from './Icon.svelte';
	import { closeModal } from '$lib/portfolio';
	import data from '$lib/data/skills_interests.json';

	const skills: string[] = data.skills;
	const interests: string[] = data.interests;

	const skillIcons: Record<string, string> = {
		Python: 'code',
		SQL: 'database',
		JavaScript: 'braces',
		TypeScript: 'braces',
		CSS: 'code',
		HTML: 'code',
		GDScript: 'gamepad-2',
		C: 'braces',
		'C#': 'braces',
		'C++': 'braces',
		Git: 'git-branch',
		'GitHub Actions': 'workflow',
		Docker: 'box',
		Kubernetes: 'box',
		Jenkins: 'workflow',
		Unity: 'gamepad-2',
		Godot: 'gamepad-2',
		Firebase: 'flame',
		'Google BigQuery': 'database',
		Django: 'server',
		'Django REST': 'server',
		Flask: 'server',
		Svelte: 'layers',
		'Vue.js': 'layers',
		'Data Engineering': 'database',
		'Data Analysis': 'bar-chart',
		'Web Development': 'globe',
		'Game Development': 'gamepad-2',
		OCR: 'scan-text'
	};

	const interestIcons: Record<string, string> = {
		'Dota 2': 'swords',
		Hades: 'flame',
		Gym: 'dumbbell',
		Nutrition: 'apple',
		Skincare: 'droplet',
		'Queen of Tears': 'tv'
	};
</script>

<Modal width="720px" label="Skills &amp; interests" on:close={closeModal}>
	<div class="head">
		<div class="eyebrow">04 &mdash; SKILLS &amp; INTERESTS</div>
		<CloseButton on:close={closeModal} />
	</div>

	<div class="label"><Icon name="code" size={15} /> SKILLS</div>
	<div class="row">
		{#each skills as s, i}
			<span class="skill" in:scale={{ duration: 240, start: 0.9, delay: i * 50 }}>
				<Icon name={skillIcons[s] ?? 'code'} size={15} />
				{s}
			</span>
		{/each}
	</div>

	<div class="label"><Icon name="heart" size={15} /> INTERESTS</div>
	<div class="row">
		{#each interests as s, i}
			<span class="interest" in:scale={{ duration: 240, start: 0.9, delay: i * 50 }}>
				<Icon name={interestIcons[s] ?? 'heart'} size={15} />
				{s}
			</span>
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
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 13px;
		font-weight: 700;
		color: var(--accent);
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
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 11px 18px;
		border-radius: 99px;
		font-size: 15px;
		font-weight: 700;
		background: color-mix(in srgb, var(--accent) 18%, transparent);
		border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
	}
	.interest {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 11px 18px;
		border-radius: 99px;
		font-size: 15px;
		font-weight: 600;
		background: var(--tile2);
		border: 1px solid var(--bd);
		cursor: default;
		transition:
			transform 0.15s,
			background 0.15s,
			color 0.15s;
	}
	.interest:hover {
		transform: translateY(-3px);
		background: var(--gold);
		color: #241f10;
	}
</style>
