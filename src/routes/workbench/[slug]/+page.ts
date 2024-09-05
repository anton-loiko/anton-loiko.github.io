import { dev } from '$app/environment';
import type { Workbench } from '$lib/types.js';
import { error } from '@sveltejs/kit';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function load({ params }) {
	try {
		const post = await import(`../../../workbench/${params.slug}.md`);

		const data: Workbench = {
			content: post.default,
			meta: post.metadata
		};

		return data;
	} catch (e) {
		console.error(e);
		error(404, `Could not find ${params.slug}`);
	}
}
