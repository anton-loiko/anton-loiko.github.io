import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { escapeSvelte, mdsvex } from 'mdsvex';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import { getHighlighter } from 'shiki';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getHighlighter({
				themes: ['poimandres'],
				langs: ['javascript', 'typescript', 'cpp', 'csharp', 'dockerfile']
			});
			await highlighter.loadLanguage('javascript', 'typescript');
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }));
			return `{@html \`${html}\` }`;
		}
	},
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		alias: {
			$components: path.resolve('./src/components')
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
