import type { CardProps, Post, WorkbenchMetadata } from '$lib/types.js';
import { workbenchToCards } from '$lib/utils.js';

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

const MAX_WORKBENCH_ON_HOME = 6;
const MAX_POSTS_ON_HOME = 2;

export async function load({ fetch }) {
	try {
		const workbenchResponse = await fetch(`/api/workbench-limit/${MAX_WORKBENCH_ON_HOME}`);
		const workbenchData: WorkbenchMetadata[] = await workbenchResponse.json();
		const cards: CardProps[] = workbenchToCards(workbenchData);

		const postsResponse = await fetch(`/api/posts-limit/${MAX_POSTS_ON_HOME}`);
		const posts: Post[] = await postsResponse.json();

		return { cards, posts };
	} catch (error) {
		console.error('error', error);

		return {
			status: 200,
			error,
			cards: [],
			posts: []
		};
	}
}
