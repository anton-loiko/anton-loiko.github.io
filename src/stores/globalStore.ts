import { writable } from 'svelte/store';

export const aboutAnchorRef = writable<HTMLElement | null>(null);
