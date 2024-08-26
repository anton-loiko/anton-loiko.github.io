<script lang="ts">
	import { base } from '$app/paths';
	import DecorateDescription from '$components/shared/DecorateDescription.svelte';
	import RightIcon from '$components/icons/Right.svelte';
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';

	export let post: Post;
</script>

<li class="group border-b border-primary-dark hover:border-white">
	<a
		href="{base}/blog/{post.slug}"
		class="relative font-bold font-roboto text-xl flex flex-col py-4 md:text-2xl underline-offset-4 group-hover:text-white"
	>
		{post.title}
		<RightIcon
			className="top-5 -left-3 w-4 h-4 md:-left-6 md:w-6 md:h-6 absolute hidden group-hover:block"
		/>

		<p class="mb-2 text-xs text-primary-dark opacity-60 group-hover:text-white">
			{formatDate(post.date)}
		</p>

		<DecorateDescription
			className="-ml-1 !min-w-min group-hover:text-white group-hover:before:bg-white"
		>
			{post.description}
		</DecorateDescription>
	</a>
</li>
