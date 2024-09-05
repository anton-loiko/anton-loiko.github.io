<script lang="ts">
	import cls from 'classnames';
	import TagIcon from './TagIcon.svelte';
	import { WorkbenchTagsEnum, type TagSize, type TagVariant } from '$lib/types';
	import { COLOR_MAP } from './Tag.mappings';

	export let tag: string;
	export let className: string = '';
	export let size: TagSize = 'sm';
	export let variant: TagVariant = 'default';

	const tagEnumValue = tag as unknown as WorkbenchTagsEnum;
	const formattedTag = tag.toLowerCase().replace('2d', '2D').replace('3d', '3D').replace('_', ' ');

	export let onClick: (() => void) | null = null;
</script>

<button
	tabindex={onClick ? null : -1}
	type="button"
	class={cls(
		'inline-flex justify-center font-roboto py-1 bg-gray-300 rounded-full',
		{
			'cursor-pointer ': !!onClick,
			'focus:outline-none cursor-default': !onClick,
			'gap-2 px-6': size === 'sm',
			'gap-1 px-3 text-xs': size === 'xs',
			'bg-gray-50': variant === 'light'
		},
		COLOR_MAP.get(tagEnumValue),
		className
	)}
	on:click={onClick}
>
	<TagIcon {tagEnumValue} className={cls({ '!w-4 !h-4': size === 'xs' })} />
	<span class="capitalize">{formattedTag}</span>
</button>
