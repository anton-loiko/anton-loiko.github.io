import { dev } from '$app/environment';
import type { CardProps, WorkbenchMetadata } from '$lib/types.js';
import { workbenchToCards } from '$lib/utils.js';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function load({ fetch }) {
	try {
		const response = await fetch('/api/workbench');
		const data: WorkbenchMetadata[] = await response.json();
		const cards: CardProps[] = workbenchToCards(data);

		return { cards };
	} catch (error) {
		console.error('error', error);

		return { status: 200, error, cards: [] };
	}
}
