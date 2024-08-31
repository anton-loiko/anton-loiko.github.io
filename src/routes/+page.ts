import type { CardProps, WorkbenchMetadata } from '$lib/types.js';
import { workbenchToCards } from '$lib/utils.js';

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

const MAX_WORKBENCH_ON_HOME = 6;

export async function load({ fetch }) {
	try {
		const response = await fetch(`/api/workbench?limit=${MAX_WORKBENCH_ON_HOME}`);
		const data: WorkbenchMetadata[] = await response.json();
		const cards: CardProps[] = workbenchToCards(data);

		return { cards };
	} catch (error) {
		console.error('error', error);

		return { status: 200, error, cards: [] };
	}
}
