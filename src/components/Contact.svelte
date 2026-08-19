<script lang="ts">
	import { scale } from 'svelte/transition';
	import Modal from './Modal.svelte';
	import CloseButton from './CloseButton.svelte';
	import Icon from './Icon.svelte';
	import { closeModal, copyToClipboard } from '$lib/portfolio';

	type Contact = {
		icon: string;
		label: string;
		value: string;
		hint: 'open' | 'copy';
		type: 'link' | 'copy';
		target: string;
	};

	const contacts: Contact[] = [
		{ icon: 'linkedin', label: 'LinkedIn', value: '/in/wilyanse', hint: 'open', type: 'link', target: 'https://www.linkedin.com/in/wilyanse/' },
		{ icon: 'mail', label: 'Email', value: 'willjose51@gmail.com', hint: 'copy', type: 'copy', target: 'willjose51@gmail.com' },
		{ icon: 'phone', label: 'Phone', value: '+63 939 198 6763', hint: 'copy', type: 'copy', target: '+639391986763' },
		{ icon: 'skype', label: 'Skype', value: 'join.skype.com', hint: 'open', type: 'link', target: 'https://join.skype.com/invite/tHKbT7LoOati' },
		{ icon: 'twitter-x', label: 'Twitter / X', value: '@Wilyanse', hint: 'open', type: 'link', target: 'https://x.com/Wilyanse' },
		{ icon: 'discord', label: 'Discord', value: 'wilyanse', hint: 'copy', type: 'copy', target: 'wilyanse' }
	];

</script>

<Modal
	width="680px"
	label="Contact"
	background="linear-gradient(160deg, color-mix(in srgb, var(--accent) 14%, transparent), var(--bg2) 55%)"
	on:close={closeModal}
>
	<div class="head">
		<div class="eyebrow">05 &mdash; CONTACT</div>
		<CloseButton on:close={closeModal} />
	</div>

	<h2>That&rsquo;s me. Let&rsquo;s connect!</h2>
	<p class="sub">Reach me on any of these &mdash; click to copy or open.</p>

	<div class="grid">
		{#each contacts as c, i}
			<!-- svelte:element resolves to <a> or <button>, both interactive — no explicit role needed. -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<svelte:element
				this={c.type === 'link' ? 'a' : 'button'}
				class="contact"
				href={c.type === 'link' ? c.target : undefined}
				target={c.type === 'link' ? '_blank' : undefined}
				rel={c.type === 'link' ? 'noopener noreferrer' : undefined}
				type={c.type === 'copy' ? 'button' : undefined}
				aria-label={c.type === 'copy'
					? `Copy ${c.label}: ${c.value}`
					: `Open ${c.label} (opens in a new tab)`}
				on:click={() => c.type === 'copy' && copyToClipboard(c.target, c.label)}
				in:scale={{ duration: 240, start: 0.92, delay: i * 45 }}
			>
				<span class="icon"><Icon name={c.icon} size={20} /></span>
				<span class="text">
					<span class="c-label">{c.label}</span>
					<span class="c-value">{c.value}</span>
				</span>
				<span class="hint" title={c.hint === 'copy' ? 'Click to copy' : 'Open link'}>
					<Icon name={c.hint === 'copy' ? 'copy' : 'external-link'} size={15} />
				</span>
			</svelte:element>
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
	h2 {
		margin: 18px 0 6px;
		font-size: 30px;
		font-weight: 900;
		letter-spacing: -0.02em;
	}
	.sub {
		margin: 0 0 26px;
		font-size: 15px;
		color: var(--tx2);
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 11px;
	}
	.contact {
		text-align: left;
		cursor: pointer;
		font-family: inherit;
		color: var(--tx);
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 15px 16px;
		border-radius: 16px;
		background: var(--tile2);
		border: 1px solid var(--bd);
		transition: transform 0.15s, border-color 0.15s;
	}
	.contact:hover {
		transform: translateY(-3px);
		border-color: var(--accent);
	}
	.icon {
		width: 38px;
		height: 38px;
		flex: 0 0 auto;
		border-radius: 12px;
		background: color-mix(in srgb, var(--accent) 18%, transparent);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--accent);
		font-weight: 800;
		font-size: 15px;
		font-family: 'JetBrains Mono', monospace;
	}
	.text {
		display: flex;
		flex-direction: column;
		min-width: 0;
	}
	.c-label {
		font-size: 14px;
		font-weight: 700;
	}
	.c-value {
		font-size: 12px;
		color: var(--tx2);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.hint {
		margin-left: auto;
		font-size: 10px;
		font-family: 'JetBrains Mono', monospace;
		color: var(--tx2);
	}

	@media (max-width: 560px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
