<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import type { Post } from '$lib/types';
	import PostItem from './PostItem.svelte';

	export let posts: Post[];
	export let fallbackPath: string = '';
	export let fallbackLabel: string = '';

	if (fallbackPath && fallbackPath.charAt(0) !== '/') {
		fallbackPath = `/${fallbackPath}`;
	}
</script>

{#if posts.length}
	<ul class="posts flex flex-col gap-6 mb-4">
		{#each posts as post}
			<PostItem {post} />
		{/each}
	</ul>
{:else}
	<section class="text-center">
		<h2 class="text-3xl font-roboto mb-4">Not found</h2>

		{#if fallbackPath && fallbackLabel && $page.url.pathname !== fallbackPath}
			<a href="{base}{fallbackPath}" class="text-lg text-blue-500 hover:underline">
				{fallbackLabel}
			</a>
		{/if}
	</section>
{/if}
