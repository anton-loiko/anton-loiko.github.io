<script lang="ts">
	import ButtonLink from '$components/shared/ButtonLink.svelte';
	import PostList from '$components/specific/post/PostList.svelte';
	import type { Post } from '$lib/types';

	export let posts: Post[] = [];
	export let className: string = '';
</script>

<section class={className}>
	<h5 class="text-xl text-principal-red text-center pt-5 mb-2">Latest from the Blog</h5>
	<h2 class="text-center text-4xl text-gray-600 font-lilita mb-14">Catch up on my recent posts</h2>

	<PostList
		{posts}
		className="!mb-24"
		fallbackPath="/blog"
		fallbackLabel="Browse all posts"
		variant="invert"
	/>

	<ButtonLink className="mx-auto" path="/blog">Browse the blog</ButtonLink>
</section>
