import { json } from '@sveltejs/kit';

import { getPosts } from './getPosts';

export async function GET() {
	try {
		const posts = await getPosts();

		return json(posts);
	} catch (error) {
		return json([]);
	}
}
