import { writable } from 'svelte/store';

export type Section = 'about' | 'background' | 'projects' | 'skills' | 'contact';
export type Theme = 'dark' | 'light';

/** Which section modal is currently open (null = none). */
export const activeModal = writable<Section | null>(null);

/**
 * Current colour theme. Initialised from the value the inline <head> script
 * resolved (localStorage → prefers-color-scheme), so the store agrees with
 * what's already painted. Falls back to dark during SSR.
 */
function initialTheme(): Theme {
	if (typeof document !== 'undefined') {
		const attr = document.documentElement.dataset.theme;
		if (attr === 'light' || attr === 'dark') return attr;
	}
	return 'dark';
}

export const theme = writable<Theme>(initialTheme());

// Persist the theme and keep the document attribute in sync (client only).
if (typeof window !== 'undefined') {
	theme.subscribe((t) => {
		document.documentElement.dataset.theme = t;
		try {
			localStorage.setItem('theme', t);
		} catch {
			/* storage unavailable (private mode, etc.) — theme still applies for the session */
		}
	});
}

/** Transient toast message (null = hidden). */
export const toast = writable<string | null>(null);

let toastTimer: ReturnType<typeof setTimeout>;

export function showToast(message: string): void {
	clearTimeout(toastTimer);
	toast.set(message);
	toastTimer = setTimeout(() => toast.set(null), 1900);
}

/** Copy text to the clipboard and flash a toast that reflects the real outcome. */
export function copyToClipboard(text: string, label: string): void {
	const succeeded = () => showToast(`${label} copied to clipboard`);
	const failed = () => showToast(`Couldn't copy ${label}`);
	try {
		const result = navigator.clipboard?.writeText(text);
		if (result) result.then(succeeded, failed);
		else failed();
	} catch {
		failed();
	}
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
