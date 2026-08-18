<script lang="ts">
	import { onMount } from 'svelte';
	import portrait from '$lib/images/bigLogo.png';
	import {
		activeModal,
		theme,
		openModal,
		closeModal,
		toggleTheme,
		type Section
	} from '$lib/portfolio';

	import AboutMe from '../components/AboutMe.svelte';
	import ProfessionalBackground from '../components/ProfessionalBackground.svelte';
	import Projects from '../components/Projects.svelte';
	import SkillsInterests from '../components/SkillsInterests.svelte';
	import Contact from '../components/Contact.svelte';
	import Toast from '../components/Toast.svelte';
	import Icon from '../components/Icon.svelte';
	import projectsData from '$lib/data/projects.json';

	const projectCount = Object.keys(projectsData).length;

	const sections: { key: Section; n: string; title: string; teaser: string; icon: string }[] = [
		{ key: 'about', n: '01', title: 'About Me', teaser: 'Who I am & where I’m headed', icon: 'user' },
		{ key: 'background', n: '02', title: 'Background', teaser: 'Work experience & education', icon: 'briefcase' },
		{ key: 'projects', n: '03', title: 'Projects', teaser: `${projectCount} things I’ve built`, icon: 'folder' },
		{ key: 'skills', n: '04', title: 'Skills & Interests', teaser: 'What I’m good at & into', icon: 'sparkles' },
		{ key: 'contact', n: '05', title: 'Contact', teaser: 'Let’s connect', icon: 'mail' }
	];

	// --- typing intro ---
	const nouns = [
		'a programmer',
		'a computer science graduate',
		'a UP graduate',
		'a software developer',
		'a gymbro',
		'a geek',
		'a conyo',
		'a data nerd',
		'a Masters TFT player',
		'a Bebop main',
		'a switch axe main',
		'a DOTA addict',
		'a middle class Filipino',
		'an android enjoyer',
		'a Davaoenyo',
		'a Jordan Peele fanatic',
		'a romance enjoyer',
		'an aspiring marathon runner',
		'an Urban Revivo fanatic',
		'a sweets enjoyer',
		'a laagan',
		'a masochist',
		'a genetically balding man',
		'someone whose chronically online',
		'a lazy person',
		'a switch owner',
		'a Hololive enthusiast',
		'a vtuber enabler',
		'a Jhin main',
		'a Graves abuser',
		'a Jarvan enjoyer',
		'a washed dota player',
		'an ability draft enjoyer',
		'a lazy tiktok vlogger',
		'a gambling addict',
		'an efficiency enjoyer',
		'a former alcoholic',
		'a big back',
		'a food enjoyer',
		'a former obese boy',
		'a giant weeb',
		'a dairy queen addict',
		'a chronic walker',
		'a gymrat',
		'a laufey enjoyer',
		'a book buyer',
		'a ChatGPT abuser'
	];

	// Sentence pieces — only `job` and the noun are accentuated.
	const introPre = 'Currently working as a ';
	const job = 'Cloud Engineer';
	const introMid = ', also I’m ';
	const introPrefix = introPre + job + introMid;

	// Boundaries within the typed string (a prefix of the full sentence).
	const bJobStart = introPre.length;
	const bJobEnd = bJobStart + job.length;
	const bNounStart = introPrefix.length;

	let typed = '';
	let caretVisible = true;

	function pickNoun(exclude: string) {
		let n = exclude;
		while (n === exclude) n = nouns[Math.floor(Math.random() * nouns.length)];
		return n;
	}

	// --- portrait parallax ---
	let px = 0;
	let py = 0;
	let reduceMotion = false;

	function onHeroMove(e: MouseEvent) {
		if (reduceMotion) return;
		const t = e.currentTarget as HTMLElement;
		const r = t.getBoundingClientRect();
		px = ((e.clientX - r.left) / r.width - 0.5) * 26;
		py = ((e.clientY - r.top) / r.height - 0.5) * 20;
	}
	function onHeroLeave() {
		px = 0;
		py = 0;
	}

	function onKey(e: KeyboardEvent) {
		if (e.key === 'Escape') closeModal();
	}

	onMount(() => {
		reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		let cancelled = false;
		const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

		async function runTyping() {
			let current = '';
			if (reduceMotion) {
				// No animation: just show one static sentence.
				typed = introPrefix + pickNoun('');
				caretVisible = false;
				return;
			}
			while (!cancelled) {
				const noun = pickNoun(current);
				current = noun;
				const full = introPrefix + noun;
				// type
				for (let i = typed.length; i <= full.length; i++) {
					if (cancelled) return;
					typed = full.slice(0, i);
					await sleep(45);
				}
				// hold ~5s
				await sleep(5000);
				if (cancelled) return;
				// erase back to just after the prefix
				for (let i = full.length; i >= introPrefix.length; i--) {
					if (cancelled) return;
					typed = full.slice(0, i);
					await sleep(25);
				}
			}
		}

		// blinking caret
		const caretTimer = setInterval(() => {
			caretVisible = !caretVisible;
		}, 500);

		runTyping();

		return () => {
			cancelled = true;
			clearInterval(caretTimer);
		};
	});
</script>

<svelte:window on:keydown={onKey} />

<div class="app" data-theme={$theme}>
	<!-- ambient blobs -->
	<div class="blobs" aria-hidden="true">
		<div class="blob blob1" />
		<div class="blob blob2" />
		<div class="blob blob3" />
	</div>

	<header class="header">
		<div class="brand">
			<div class="mark"><Icon name="terminal" size={20} /></div>
			<div class="brand-name">WILL&rsquo;S PORTFOLIO</div>
		</div>
		<button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle theme">
			<Icon name={$theme === 'dark' ? 'sun' : 'moon'} size={15} />
			{$theme === 'dark' ? 'Light' : 'Dark'}
		</button>
	</header>

	<main class="main">
		<!-- HERO -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<section class="hero" on:mousemove={onHeroMove} on:mouseleave={onHeroLeave}>
			<div class="hero-copy">
				<div class="eyebrow rise d1">HELLO, WORLD &mdash; WELCOME</div>
				<h1 class="rise d2">Hi, I&rsquo;m<br /><span class="accent">Will.</span></h1>
				<p class="lead rise d3">
					You&rsquo;ve made it to my portfolio.<br />
					<span>{typed.slice(0, bJobStart)}</span><span class="accent"
						>{typed.slice(bJobStart, bJobEnd)}</span
					><span>{typed.slice(bJobEnd, bNounStart)}</span><span class="accent"
						>{typed.slice(bNounStart)}</span
					><span class="caret" class:on={caretVisible} aria-hidden="true">|</span>
				</p>
				<div class="cta rise d4">
					<button class="btn btn-primary" on:click={() => openModal('projects')}>
						<Icon name="folder" size={17} /> See my work <Icon name="arrow-right" size={17} />
					</button>
					<button class="btn btn-ghost" on:click={() => openModal('contact')}>
						<Icon name="mail" size={17} /> Get in touch
					</button>
				</div>
			</div>
			<div class="portrait-parallax" style="transform:translate({px}px,{py}px);">
				<div class="portrait-float">
					<div class="portrait-glow" />
					<img src={portrait} alt="Illustrated portrait of Will" />
				</div>
			</div>
		</section>

		<!-- SECTION LAUNCHERS -->
		<nav class="launchers">
			{#each sections as sec, i}
				<button
					class="launcher rise"
					style="animation-delay:{(0.15 + i * 0.07).toFixed(2)}s;"
					on:click={() => openModal(sec.key)}
				>
					<div class="launcher-top">
						<span class="launcher-icon"><Icon name={sec.icon} size={20} /></span>
						<span class="launcher-n">{sec.n}</span>
						<span class="launcher-arrow"><Icon name="arrow-right" size={16} /></span>
					</div>
					<div>
						<div class="launcher-title">{sec.title}</div>
						<div class="launcher-teaser">{sec.teaser}</div>
					</div>
				</button>
			{/each}
		</nav>
	</main>

	{#if $activeModal === 'about'}
		<AboutMe />
	{:else if $activeModal === 'background'}
		<ProfessionalBackground />
	{:else if $activeModal === 'projects'}
		<Projects />
	{:else if $activeModal === 'skills'}
		<SkillsInterests />
	{:else if $activeModal === 'contact'}
		<Contact />
	{/if}

	<Toast />
</div>

<style lang="postcss">
	.app {
		--bg1: #191919;
		--bg2: #242424;
		--tile: rgba(255, 255, 255, 0.04);
		--tile2: rgba(255, 255, 255, 0.07);
		--bd: rgba(255, 255, 255, 0.1);
		--tx: #ededed;
		--tx2: #9c9c9c;
		--teal: #7fb7be;
		--gold: #d4c5a1;
		--accent: #22d3e6;
		--accent-ink: #06232a;
		--blob: 0.55;
		color-scheme: dark;

		position: relative;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		gap: 18px;
		padding: 22px 26px;
		font-family: Inter, system-ui, sans-serif;
		font-size: 15px;
		color: var(--tx);
		background: radial-gradient(140% 120% at 15% 0%, var(--bg2), var(--bg1) 60%);
	}

	.app[data-theme='light'] {
		--bg1: #e7e7ea;
		--bg2: #f5f5f6;
		--tile: rgba(255, 255, 255, 0.72);
		--tile2: #ffffff;
		--bd: rgba(0, 0, 0, 0.09);
		--tx: #242424;
		--tx2: #5c5c5c;
		--teal: #1d6d77;
		--gold: #8a7647;
		--accent: #0b9aa6;
		--blob: 0.3;
		color-scheme: light;
	}

	.accent {
		color: var(--accent);
	}

	/* ambient blobs */
	.blobs {
		position: absolute;
		inset: 0;
		z-index: 0;
		overflow: hidden;
		pointer-events: none;
		opacity: var(--blob);
	}
	.blob {
		position: absolute;
		border-radius: 50%;
	}
	.blob1 {
		top: -12%;
		left: 8%;
		width: 38vw;
		height: 38vw;
		background: radial-gradient(circle, var(--accent), transparent 68%);
		filter: blur(60px);
		animation: drift 26s ease-in-out infinite;
	}
	.blob2 {
		bottom: -16%;
		right: 4%;
		width: 34vw;
		height: 34vw;
		background: radial-gradient(circle, var(--teal), transparent 66%);
		filter: blur(60px);
		animation: drift 32s ease-in-out infinite reverse;
	}
	.blob3 {
		top: 24%;
		left: 42%;
		width: 26vw;
		height: 26vw;
		background: radial-gradient(circle, var(--gold), transparent 66%);
		filter: blur(70px);
		opacity: 0.5;
		animation: drift 40s ease-in-out infinite;
	}

	/* header */
	.header {
		position: relative;
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex: 0 0 auto;
	}
	.brand {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.mark {
		width: 36px;
		height: 36px;
		border-radius: 12px;
		background: var(--accent);
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 800;
		color: var(--accent-ink);
		font-size: 16px;
		box-shadow: 0 4px 20px -6px var(--accent);
	}
	.brand-name {
		font-weight: 800;
		letter-spacing: 0.14em;
		font-size: 13px;
	}
	.theme-toggle {
		display: flex;
		align-items: center;
		gap: 8px;
		height: 36px;
		padding: 0 15px;
		border-radius: 99px;
		border: 1px solid var(--bd);
		background: var(--tile);
		color: var(--tx);
		cursor: pointer;
		font-size: 12px;
		font-weight: 600;
		font-family: inherit;
	}

	/* main layout */
	.main {
		position: relative;
		z-index: 2;
		flex: 1 1 auto;
		min-height: 0;
		display: grid;
		grid-template-rows: 1fr auto;
		gap: 20px;
	}

	/* hero */
	.hero {
		position: relative;
		overflow: hidden;
		border: 1px solid var(--bd);
		border-radius: 30px;
		background: linear-gradient(
			150deg,
			color-mix(in srgb, var(--accent) 15%, transparent),
			var(--tile) 55%
		);
		display: flex;
		align-items: center;
		padding: 0 clamp(30px, 5vw, 72px);
		animation: rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both;
	}
	.hero-copy {
		position: relative;
		z-index: 2;
		max-width: 60%;
	}
	.eyebrow {
		font-family: 'JetBrains Mono', monospace;
		font-size: 12px;
		letter-spacing: 0.16em;
		color: var(--tx2);
		margin-bottom: 8px;
	}
	.hero h1 {
		margin: 0;
		font-size: clamp(38px, min(5.2vw, 8vh), 98px);
		line-height: 0.92;
		font-weight: 900;
		letter-spacing: -0.03em;
	}
	.lead {
		margin: 12px 0 0;
		font-size: clamp(15px, 1.5vw, 21px);
		font-weight: 600;
		line-height: 1.35;
		max-width: 30ch;
		min-height: 4.05em; /* 3 lines — keeps layout steady while text types/erases */
	}
	.caret {
		color: var(--accent);
		font-weight: 400;
		opacity: 0;
		margin-left: 1px;
	}
	.caret.on {
		opacity: 1;
	}
	.cta {
		margin-top: 22px;
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
	}
	.btn {
		height: 46px;
		padding: 0 24px;
		cursor: pointer;
		font-family: inherit;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		border-radius: 99px;
		font-size: 14px;
		transition: transform 0.15s, filter 0.15s;
	}
	.btn:hover {
		transform: translateY(-2px);
	}
	.btn-primary {
		border: none;
		background: var(--accent);
		color: var(--accent-ink);
		font-weight: 700;
	}
	.btn-primary:hover {
		filter: brightness(1.05);
	}
	.btn-ghost {
		border: 1px solid var(--bd);
		background: var(--tile);
		color: var(--tx);
		font-weight: 600;
	}

	.portrait-parallax {
		position: absolute;
		right: clamp(10px, 3vw, 64px);
		bottom: 0;
		top: 8%;
		z-index: 1;
		transition: transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1);
	}
	.portrait-float {
		position: relative;
		height: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.4));
		animation: floaty 7s ease-in-out infinite;
	}
	.portrait-glow {
		position: absolute;
		right: 6%;
		bottom: 10%;
		width: 78%;
		aspect-ratio: 1;
		border-radius: 50%;
		background: radial-gradient(circle, color-mix(in srgb, var(--accent) 42%, transparent), transparent 66%);
		filter: blur(12px);
	}
	.portrait-float img {
		position: relative;
		height: 100%;
		width: auto;
		max-width: 46vw;
		object-fit: contain;
		object-position: bottom;
		display: block;
	}

	/* launchers */
	.launchers {
		flex: 0 0 auto;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 14px;
	}
	.launcher {
		text-align: left;
		cursor: pointer;
		font-family: inherit;
		color: var(--tx);
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 16px;
		min-height: 132px;
		padding: 18px 20px;
		border-radius: 22px;
		border: 1px solid var(--bd);
		background: var(--tile);
		transition: transform 0.18s cubic-bezier(0.2, 0.7, 0.2, 1), border-color 0.18s, background 0.18s;
	}
	.launcher:hover {
		transform: translateY(-6px);
		border-color: var(--accent);
		background: var(--tile2);
	}
	.launcher-top {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.launcher-icon {
		width: 38px;
		height: 38px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: color-mix(in srgb, var(--accent) 16%, transparent);
		color: var(--accent);
		transition: background 0.18s, color 0.18s;
	}
	.launcher:hover .launcher-icon {
		background: var(--accent);
		color: var(--accent-ink);
	}
	.launcher-n {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		letter-spacing: 0.1em;
		color: var(--tx2);
	}
	.launcher-arrow {
		margin-left: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--tx2);
		transform: translateX(-4px);
		opacity: 0;
		transition: transform 0.18s, opacity 0.18s, color 0.18s;
	}
	.launcher:hover .launcher-arrow {
		opacity: 1;
		transform: translateX(0);
		color: var(--accent);
	}
	.launcher-title {
		font-size: 17px;
		font-weight: 800;
		letter-spacing: -0.01em;
		margin-bottom: 4px;
	}
	.launcher-teaser {
		font-size: 12px;
		color: var(--tx2);
		line-height: 1.35;
	}

	/* entrance */
	.rise {
		animation: rise 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) both;
	}
	.d1 {
		animation-delay: 0.12s;
	}
	.d2 {
		animation-delay: 0.16s;
	}
	.d3 {
		animation-delay: 0.3s;
	}
	.d4 {
		animation-delay: 0.42s;
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(22px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
	@keyframes floaty {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-14px);
		}
	}
	@keyframes drift {
		0% {
			transform: translate(0, 0) scale(1);
		}
		33% {
			transform: translate(6vw, -4vh) scale(1.12);
		}
		66% {
			transform: translate(-4vw, 3vh) scale(0.94);
		}
		100% {
			transform: translate(0, 0) scale(1);
		}
	}

	/* responsive */
	@media (max-width: 900px) {
		.app {
			height: auto;
			min-height: 100vh;
			overflow: auto;
		}
		.launchers {
			grid-template-columns: repeat(2, 1fr);
		}
		.hero-copy {
			max-width: 100%;
		}
		.portrait-parallax {
			display: none;
		}
	}
	@media (max-width: 480px) {
		.app {
			padding: 16px;
		}
		.launchers {
			grid-template-columns: 1fr;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.blob,
		.portrait-float {
			animation: none;
		}
		.portrait-parallax {
			transition: none;
		}
	}
</style>
