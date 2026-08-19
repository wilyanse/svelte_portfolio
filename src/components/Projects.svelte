<script lang="ts">
	import { fly } from 'svelte/transition';
	import Modal from './Modal.svelte';
	import CloseButton from './CloseButton.svelte';
	import Icon from './Icon.svelte';
	import { closeModal } from '$lib/portfolio';
	import projectsData from '$lib/data/projects.json';

	type Project = {
		name: string;
		desc: string;
		link: string;
		keywords: string[];
		stack: string[];
	};

	// An evocative icon per project, chosen from its name/description/keywords.
	const projectIcons: Record<string, string> = {
		'Bagyo Ka Lang, Pinoy Kami': 'cloud-rain',
		ReciKeep: 'link-2',
		'Toxic Speech Classifier': 'brain',
		IwasSingko: 'gamepad-2',
		ReciPeek: 'cpu',
		'Downloads Sorter': 'folder',
		'Portfolio Website': 'globe',
		'Developer Blog': 'book-open',
		'Automated TikTok Vlog Creator': 'video'
	};
	const iconForProject = (p: Project): string =>
		projectIcons[p.name] ??
		(p.keywords.includes('Game Development')
			? 'gamepad-2'
			: p.keywords.includes('Data Science')
				? 'bar-chart'
				: 'folder');

	const projects: Project[] = Object.values(projectsData) as Project[];

	// Icon per keyword; anything unmapped falls back to a generic one.
	const keywordIcons: Record<string, string> = {
		'Data Science': 'bar-chart',
		'Data Engineering': 'database',
		'Web Development': 'globe',
		'Machine Learning': 'brain',
		'Artificial Intelligence': 'sparkles',
		'Game Development': 'gamepad-2',
		'Software Engineering': 'code',
		Blockchain: 'link-2',
		IOT: 'cpu',
		'Embedded System': 'cpu',
		Automation: 'workflow',
		Scripting: 'terminal',
		'Naive Bayes': 'target'
	};

	// Derive the filter list from the data itself so it can never drift out of
	// sync with the projects' keywords. Ordered by how many projects use each.
	const keywordCounts = projects.reduce<Record<string, number>>((acc, p) => {
		for (const k of p.keywords) acc[k] = (acc[k] ?? 0) + 1;
		return acc;
	}, {});
	const filterOptions: { label: string; icon: string }[] = Object.keys(keywordCounts)
		.sort((a, b) => keywordCounts[b] - keywordCounts[a] || a.localeCompare(b))
		.map((label) => ({ label, icon: keywordIcons[label] ?? 'code' }));

	let active: string[] = [];

	function toggle(filter: string) {
		active = active.includes(filter) ? active.filter((f) => f !== filter) : [...active, filter];
	}

	$: view = active.length
		? projects.filter((p) => active.some((f) => p.keywords.includes(f)))
		: projects;
</script>

<Modal width="1040px" layout="flex" label="Projects" on:close={closeModal}>
	<div class="head">
		<div>
			<div class="eyebrow">03 &mdash; PROJECTS</div>
			<div class="filters">
				{#each filterOptions as f}
					<button
						class="pill"
						class:active={active.includes(f.label)}
						on:click={() => toggle(f.label)}
					>
						<Icon name={f.icon} size={13} />
						{f.label}
					</button>
				{/each}
			</div>
		</div>
		<CloseButton on:close={closeModal} />
	</div>

	<div class="grid">
		{#each view as p, i (p.name)}
			<a
				class="card"
				href={p.link}
				target="_blank"
				rel="noreferrer noopener"
				in:fly={{ y: 16, duration: 320, delay: i * 45 }}
			>
				<div class="card-head">
					<span class="card-icon"><Icon name={iconForProject(p)} size={18} /></span>
					<span class="card-name">{p.name}</span>
					<span class="arrow"><Icon name="arrow-up-right" size={16} /></span>
				</div>
				<p class="card-desc">{p.desc}</p>
				<div class="tags">
					{#each p.stack.slice(0, 3) as t}
						<span class="tag">{t}</span>
					{/each}
				</div>
			</a>
		{/each}
	</div>
</Modal>

<style lang="postcss">
	.head {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 18px;
		gap: 20px;
	}
	.eyebrow {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		letter-spacing: 0.16em;
		color: var(--accent);
		margin-bottom: 12px;
	}
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 7px;
	}
	.pill {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		height: 30px;
		padding: 0 13px;
		border-radius: 99px;
		border: 1px solid var(--bd);
		background: transparent;
		color: var(--tx2);
		font-weight: 600;
		font-size: 11px;
		cursor: pointer;
		font-family: inherit;
		transition: all 0.15s;
	}
	.pill:hover {
		border-color: color-mix(in srgb, var(--accent) 50%, var(--bd));
		color: var(--tx);
	}
	.pill.active {
		border-color: transparent;
		background: var(--accent);
		color: var(--accent-ink);
		font-weight: 700;
	}

	.grid {
		flex: 1;
		min-height: 0;
		overflow: auto;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 14px;
		align-content: start;
		padding-right: 4px;
	}
	.card {
		display: flex;
		flex-direction: column;
		gap: 9px;
		padding: 18px;
		border-radius: 18px;
		background: var(--tile2);
		border: 1px solid var(--bd);
		color: var(--tx);
		text-decoration: none;
		transition:
			transform 0.16s,
			border-color 0.16s,
			box-shadow 0.16s;
	}
	.card:hover {
		transform: translateY(-4px);
		border-color: var(--accent);
		box-shadow: 0 18px 36px -20px var(--accent);
	}
	.card-head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 8px;
	}
	.card-icon {
		color: var(--accent);
		flex: 0 0 auto;
		display: inline-flex;
		margin-top: 1px;
	}
	.card-name {
		font-weight: 800;
		font-size: 15px;
		line-height: 1.15;
		margin-right: auto;
	}
	.arrow {
		color: var(--accent);
		font-size: 15px;
		flex: 0 0 auto;
	}
	.card-desc {
		margin: 0;
		font-size: 12.5px;
		line-height: 1.45;
		color: var(--tx2);
		display: -webkit-box;
		-webkit-line-clamp: 4;
		line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
		margin-top: auto;
	}
	.tag {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		padding: 4px 8px;
		border-radius: 99px;
		background: color-mix(in srgb, var(--accent) 14%, transparent);
		color: var(--tx);
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 560px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
