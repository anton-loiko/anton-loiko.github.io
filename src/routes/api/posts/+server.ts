import { json } from '@sveltejs/kit';
import type { Categories, Post } from '$lib/types';

async function getPosts(filter?: Record<'category', string | null>) {
	const category = filter?.category;

	let posts: Post[] = [];

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

	if (category) {
		posts = posts.filter((item) => item.categories.includes(category as Categories));
	}

	return posts;
}

export async function GET({ url }) {
	let category: string | null = null;

	try {
		category = url.searchParams.get('category');
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error, '<=== error ===');
	}

	const posts = await getPosts({ category });

	return json(posts);
}
