<script lang="ts">
	import { base } from '$app/paths';
	import DecorateDescription from '$components/shared/DecorateDescription.svelte';
	import RightIcon from '$components/icons/Right.svelte';
	import type { Post, PostItemVariant } from '$lib/types';
	import { formatDate } from '$lib/utils';
	import cls from 'classnames';

	export let post: Post;
	export let variant: PostItemVariant = 'default';
</script>

<li
	class={cls('group border-b border-primary-dark hover:border-white', {
		'border-white hover:border-primary-dark': variant === 'invert'
	})}
>
	<a
		href="{base}/blog/{post.slug}"
		class={cls(
			'relative font-bold font-roboto text-xl flex flex-col py-4 md:text-2xl underline-offset-4 group-hover:text-white',
			{
				'text-white group-hover:text-primary': variant === 'invert'
			}
		)}
	>
		{post.title}
		<RightIcon
			className="top-5 -left-3 w-4 h-4 md:-left-6 md:w-6 md:h-6 absolute hidden group-hover:block"
		/>

		<p
			class={cls('mb-2 text-xs text-primary-dark opacity-60 group-hover:text-white', {
				'text-white group-hover:text-primary': variant === 'invert'
			})}
		>
			{formatDate(post.date)}
		</p>

		<DecorateDescription
			className={cls('-ml-1 !min-w-min group-hover:text-white group-hover:before:bg-white', {
				'before:bg-white text-white group-hover:text-primary group-hover:before:bg-primary':
					variant === 'invert'
			})}
		>
			{post.description}
		</DecorateDescription>
	</a>
</li>
