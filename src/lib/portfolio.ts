import { writable } from 'svelte/store';

export type Section = 'about' | 'background' | 'projects' | 'skills' | 'contact';
export type Theme = 'dark' | 'light';

/** Which section modal is currently open (null = none). */
export const activeModal = writable<Section | null>(null);

/** Current colour theme. */
export const theme = writable<Theme>('dark');

/** Transient toast message (null = hidden). */
export const toast = writable<string | null>(null);

let toastTimer: ReturnType<typeof setTimeout>;

export function showToast(message: string): void {
	clearTimeout(toastTimer);
	toast.set(message);
	toastTimer = setTimeout(() => toast.set(null), 1900);
}

/** Copy text to the clipboard and flash a confirmation toast. */
export function copyToClipboard(text: string, label: string): void {
	// writeText resolves a promise; swallow rejections (denied permission, no API).
	Promise.resolve(navigator.clipboard?.writeText(text)).catch(() => {
		/* clipboard unavailable — the toast still confirms intent */
	});
	showToast(`${label} copied to clipboard`);
}

export function openModal(section: Section): void {
	activeModal.set(section);
}

export function closeModal(): void {
	activeModal.set(null);
}

export function toggleTheme(): void {
	theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
}
