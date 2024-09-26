<script lang="ts">
	import Empty from '$components/shared/Empty.svelte';
	import type { Post, PostItemVariant } from '$lib/types';
	import PostItem from './PostItem.svelte';
	import cls from 'classnames';

	export let posts: Post[] = [];
	export let fallbackPath: string = '';
	export let fallbackLabel: string = '';
	export let className: string = '';
	export let variant: PostItemVariant = 'default';
</script>

{#if posts.length}
	<ul class={cls('posts flex flex-col gap-6 mb-4', className)}>
		{#each posts as post}
			<PostItem {post} {variant} />
		{/each}
	</ul>
{:else}
	<Empty {fallbackLabel} {fallbackPath} />
{/if}
