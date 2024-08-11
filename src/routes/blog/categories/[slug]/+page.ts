import { dev } from '$app/environment';
import type { Categories, Post } from '$lib/types';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

export async function load({ fetch, params }) {
	const response = await fetch('/api/posts');
	let posts: Post[] = await response.json();

	if (params.slug) {
		posts = posts.filter((item) => item.categories.includes(params.slug as Categories));
	}

	return {
		category: params.slug,
		posts
	};
}
