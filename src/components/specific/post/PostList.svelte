<script lang="ts">
	import Empty from '$components/shared/Empty.svelte';
	import type { Post } from '$lib/types';
	import PostItem from './PostItem.svelte';

	export let posts: Post[] = [];
	export let fallbackPath: string = '';
	export let fallbackLabel: string = '';
</script>

{#if posts.length}
	<ul class="posts flex flex-col gap-6 mb-4">
		{#each posts as post}
			<PostItem {post} />
		{/each}
	</ul>
{:else}
	<Empty {fallbackLabel} {fallbackPath} />
{/if}
