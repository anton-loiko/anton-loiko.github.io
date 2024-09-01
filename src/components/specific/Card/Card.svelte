<script lang="ts">
	import cls from 'classnames';
	import type { CardProps } from '$lib/types';
	import Img from '$components/shared/Img.svelte';
	import TruncText from '$components/shared/TruncText.svelte';
	import { getBasePath } from '$lib/utils';
	import Tags from '../Tags/Tags.svelte';

	export let description: CardProps['description'];
	export let img: CardProps['img'] = ['', 'N/A'];
	export let path: CardProps['path'];
	export let title: CardProps['title'];
	export let tags: CardProps['tags'] = [];
	export let isTwoColumnLayout: boolean = false;
	export let className: string = '';

	const src = img![0];
	const alt = img![1];
</script>

<a
	href={getBasePath(`/workbench/${path}`)}
	class={cls(
		'flex flex-col gap-5 w-full h-auto p-3 pb-4 bg-gray-300 cursor-pointer border border-transparent rounded-lg transition-colors',
		'hover:border-gray-400',
		{ 'lg:w-80 ': !isTwoColumnLayout }
	)}
>
	<div
		class={cls(
			'flex-1 w-full h-full border border-red-100 rounded-md max-h-72 min-h-24',
			'lg:max-h-48 lg:min-h-20'
		)}
	>
		<Img className="w-full h-auto object-cover rounded-md" {src} {alt} />
	</div>

	<div class="flex flex-col gap-2">
		{#if tags?.length}
			<Tags size="xs" variant="light" {tags} />
		{/if}

		<h3 class={cls('font-bold font-lilita text-gray-600 underline-offset-8', className)}>
			{title}
		</h3>

		<TruncText className="font-roboto text-sm text-gray-500" twoLine>
			{description}
		</TruncText>
	</div>
</a>
