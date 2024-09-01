import { writable } from 'svelte/store';

export const aboutAnchorRef = writable<HTMLElement | null>(null);

export const workbenchAnchorRef = writable<HTMLElement | null>(null);
