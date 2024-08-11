import { dev } from '$app/environment';
import type { Post } from '$lib/types';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function load({ fetch, params }) {
	const response = await fetch(`/api/posts?category=${params.slug}`);
	console.log(response, '<=== /routes/blog/categories/[slug]/+page.ts -> response ===');

	const posts: Post[] = await response.json();
	console.log(posts, '<=== /routes/blog/categories/[slug]/+page.ts  -> posts ===');

	return {
		category: params.slug,
		posts
	};
}
