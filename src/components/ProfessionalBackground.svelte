<script lang="ts">
	import { fly } from 'svelte/transition';
	import Modal from './Modal.svelte';
	import CloseButton from './CloseButton.svelte';
	import { closeModal } from '$lib/portfolio';
	import workData from '$lib/data/work_exp.json';
	import educData from '$lib/data/education.json';

	type Entry = {
		title: string;
		sub: string;
		dates: string;
		details: string[];
		stack: string[];
	};

	// Sort by numeric key so the most recent entry (lowest key, e.g. "-1") leads.
	const byKey = <T>(obj: Record<string, T>): T[] =>
		Object.entries(obj)
			.sort((a, b) => Number(a[0]) - Number(b[0]))
			.map(([, v]) => v);

	const work: Entry[] = byKey(workData).map((w) => ({
		title: w.position,
		sub: w.company,
		dates: `${w.start_date} – ${w.end_date}`,
		details: w.details,
		stack: (w as { stack?: string[] }).stack ?? []
	}));

	const education: Entry[] = byKey(educData).map((e) => ({
		title: e.level,
		sub: e.school,
		dates: `${e.start_date} – ${e.end_date}`,
		details: e.details,
		stack: []
	}));

	let tab: 'work' | 'education' = 'work';
	let index = 0;

	$: list = tab === 'work' ? work : education;
	$: detail = list[Math.min(index, list.length - 1)] ?? list[0];

	function setTab(next: 'work' | 'education') {
		tab = next;
		index = 0;
	}
</script>

<Modal width="940px" layout="flex" on:close={closeModal}>
	<div class="head">
		<div class="head-left">
			<div class="eyebrow">02 &mdash; BACKGROUND</div>
			<div class="switch">
				<button class="seg" class:active={tab === 'work'} on:click={() => setTab('work')}>Work</button>
				<button class="seg" class:active={tab === 'education'} on:click={() => setTab('education')}>
					Education
				</button>
			</div>
		</div>
		<CloseButton on:close={closeModal} />
	</div>

	<div class="body">
		<div class="master">
			{#each list as entry, i (tab + i)}
				<button class="entry" class:active={index === i} on:click={() => (index = i)}>
					<span class="entry-title">{entry.title}</span>
					<span class="entry-sub">{entry.sub}</span>
					<span class="entry-dates">{entry.dates}</span>
				</button>
			{/each}
		</div>

		{#key tab + index}
			<div class="detail" in:fly={{ y: 10, duration: 300 }}>
				<div class="detail-dates">{detail.dates}</div>
				<h2 class="detail-title">{detail.title}</h2>
				<div class="detail-sub">{detail.sub}</div>
				<div class="details-list">
					{#each detail.details as d}
						<div class="detail-row">
							<span class="dash">&mdash;</span>
							<span>{d}</span>
						</div>
					{/each}
				</div>
				{#if detail.stack.length}
					<div class="stack-wrap">
						<div class="stack-label">TECH STACK</div>
						<div class="stack">
							{#each detail.stack as t}
								<span class="chip">{t}</span>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		{/key}
	</div>
</Modal>

<style lang="postcss">
	.head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}
	.head-left {
		display: flex;
		align-items: center;
		gap: 16px;
		flex-wrap: wrap;
	}
	.eyebrow {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		letter-spacing: 0.16em;
		color: var(--accent);
	}
	.switch {
		display: flex;
		gap: 6px;
		padding: 4px;
		border-radius: 99px;
		background: var(--tile2);
		border: 1px solid var(--bd);
	}
	.seg {
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
	.seg.active {
		background: var(--accent);
		color: var(--accent-ink);
		font-weight: 700;
	}

	.body {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 20px;
		min-height: 0;
		flex: 1;
	}
	.master {
		overflow: auto;
		display: flex;
		flex-direction: column;
		gap: 9px;
		padding-right: 6px;
	}
	.entry {
		text-align: left;
		cursor: pointer;
		font-family: inherit;
		color: var(--tx);
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: 13px 15px;
		border-radius: 15px;
		background: var(--tile2);
		border: 1px solid var(--bd);
		transition: border-color 0.16s, transform 0.16s;
	}
	.entry:hover {
		border-color: color-mix(in srgb, var(--accent) 50%, var(--bd));
	}
	.entry.active {
		border-color: var(--accent);
		transform: translateX(3px);
	}
	.entry-title {
		font-weight: 700;
		font-size: 14px;
	}
	.entry-sub {
		font-size: 12px;
		color: var(--tx2);
	}
	.entry-dates {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		color: var(--tx2);
		margin-top: 2px;
	}

	.detail {
		overflow: auto;
		padding: 4px 8px 4px 4px;
	}
	.detail-dates {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		color: var(--accent);
		margin-bottom: 6px;
	}
	.detail-title {
		margin: 0;
		font-size: 26px;
		font-weight: 800;
		letter-spacing: -0.01em;
		line-height: 1.1;
	}
	.detail-sub {
		font-size: 15px;
		color: var(--tx2);
		margin-top: 5px;
		margin-bottom: 22px;
	}
	.details-list {
		display: flex;
		flex-direction: column;
		gap: 13px;
	}
	.detail-row {
		display: flex;
		gap: 12px;
		font-size: 14.5px;
		line-height: 1.5;
	}
	.dash {
		color: var(--accent);
		flex: 0 0 auto;
		font-weight: 800;
	}
	.stack-wrap {
		margin-top: 24px;
	}
	.stack-label {
		font-size: 12px;
		font-weight: 700;
		color: var(--tx2);
		margin-bottom: 10px;
	}
	.stack {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.chip {
		font-family: 'JetBrains Mono', monospace;
		font-size: 12px;
		padding: 6px 12px;
		border-radius: 99px;
		background: color-mix(in srgb, var(--accent) 16%, transparent);
		border: 1px solid color-mix(in srgb, var(--accent) 34%, transparent);
	}

	@media (max-width: 720px) {
		.body {
			grid-template-columns: 1fr;
		}
		.master {
			max-height: 30vh;
		}
	}
</style>
