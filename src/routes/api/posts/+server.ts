import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';
import { getFilterFromURLBy } from '$lib/utils';

type Filters = Record<'limit', string>;

async function getPosts(filters: Filters) {
	let posts: Post[] = [];
	const limit = parseInt(filters.limit, 10);

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			post.published && posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	if (!isNaN(limit)) {
		posts = posts.filter((_, idx) => limit > idx);
	}

	return posts;
}

export async function GET({ request }) {
	try {
		const limit = getFilterFromURLBy(request.url, 'limit');

		const posts = await getPosts({ limit });

		return json(posts);
	} catch (error) {
		return json([]);
	}
}
