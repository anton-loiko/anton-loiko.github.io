import { json } from '@sveltejs/kit';
import type { WorkbenchMetadata } from '$lib/types';
import qs from 'querystring';

type Filters = Record<'limit', string>;

async function getWorkbench(filters: Filters) {
	let posts: WorkbenchMetadata[] = [];
	const limit = parseInt(filters.limit, 10);

	const paths = import.meta.glob('/src/workbench/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<WorkbenchMetadata, 'slug'>;
			const post = { ...metadata, slug } satisfies WorkbenchMetadata;
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
		const url = request.url.split('?')[1] || '';
		const parsed = qs.parse(url);
		const limit = Array.isArray(parsed.limit) ? parsed.limit[0] : parsed.limit || '';

		const workbench = await getWorkbench({ limit });

		return json(workbench);
	} catch (error) {
		return json([]);
	}
}
