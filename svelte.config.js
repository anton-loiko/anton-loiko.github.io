import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { escapeSvelte, mdsvex } from 'mdsvex';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import { getHighlighter } from 'shiki';

import { SKIP, visit } from 'unist-util-visit';

const remarkCustomComponent = (tag, componentName) => () => (tree) => {

	if (!tag || !componentName) {
		throw new Error('"tag" and "componentName" are Mandatory')
	}

	visit(tree, 'paragraph', (node, index, parent) => {
		const regex = new RegExp(`^({${tag}::})([^]+)({::END})$`, 'g');
		const firstChild = node.children[0];

		let match = null;

		if (firstChild.type === 'text') {
			match = regex.exec(firstChild.value);
		}

		if (match) {
			// eslint-disable-next-line no-unused-vars
			const [fullMatch, _, url] = match;

			// Create a new node for video
			const videoNode = `<Components.${componentName} src="${url}" />`;

			// Replace the found text with a new node
			firstChild.value = firstChild.value.replace(fullMatch, videoNode);

			// Remove the wrapping
			parent.children.splice(index, 1, firstChild);
			return [SKIP, index];
		}
	});
}

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/components/layouts/MdsvexLayout.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getHighlighter({
				themes: ['poimandres'],
				langs: ['javascript', 'typescript', 'cpp', 'csharp', 'dockerfile', 'bash']
			});
			await highlighter.loadLanguage('javascript', 'typescript');
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }));
			return `{@html \`${html}\` }`;
		}
	},
	remarkPlugins: [
		remarkCustomComponent("VIMEO", "vimeo"),
		remarkCustomComponent("GAME", "game"),
		remarkUnwrapImages,
		[remarkToc, { tight: true }]
	],
	rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		alias: {
			$components: path.resolve('./src/components'),
			$hooks: path.resolve('./src/hooks'),
			$stores: path.resolve('./src/stores')
		},
		prerender: {
			handleHttpError: ({ path, referrer, message, referenceType, status }) => {
				console.error(
					{ path, referrer, message, referenceType, status },
					'<=== handleHttpError ==='
				);

				// otherwise fail the build
				throw new Error(message);
			}
		},

		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	},
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)]
};

export default config;
