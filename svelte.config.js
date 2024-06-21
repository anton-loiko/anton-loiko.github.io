import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		prerender: {
			handleHttpError: ({ path, referrer, message, referenceType, status }) => {
				console.log(path, '<=== path ===');
				console.log(referrer, '<=== referrer ===');
				console.log(message, '<===  message ===');

				console.log({ referenceType, status }, '<=== {referenceType,status} ===');

				// otherwise fail the build
				throw new Error(message);
			}
		},

		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	},
	preprocess: vitePreprocess()
};

export default config;
