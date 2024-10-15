import { json } from '@sveltejs/kit';
import { getPosts } from '../../posts/getPosts';


export async function GET({ params }) {
	try {
		const posts = await getPosts({ limit: params.size });

		return json(posts);
	} catch (error) {
		return json([]);
	}
}
