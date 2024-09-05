<script lang="ts">
	import cls from 'classnames';
	import { base } from '$app/paths';
	import logo from '$lib/images/logo.svg';
	import type { NavigationConfig } from '$lib/types';
	import HeaderNavItem from './HeaderNavItem.svelte';
	import Img from '$components/shared/Img.svelte';
	import { aboutAnchorRef } from '$stores/global/refs';
	import { useScrollToAnchor } from '$hooks/useScrollToAnchor';

	const { scrollToAnchor } = useScrollToAnchor();

	const handleAboutClick = (e: MouseEvent) => {
		if ($aboutAnchorRef) {
			e.preventDefault();
			e.stopPropagation();

			scrollToAnchor($aboutAnchorRef);
		}
	};

	export let className: string = '';

	const navigationConfig: NavigationConfig[] = [
		{
			name: 'workbench',
			pathname: '/workbench',
			showOnParentPage: true
		},
		{
			name: 'blog',
			pathname: '/blog',
			showOnParentPage: true,
			children: [
				{
					name: 'categories',
					pathname: '/blog/categories'
				}
			]
		},
		{
			name: 'about',
			pathname: '/#about',
			onClick: handleAboutClick
		}
	];
</script>

<header
	class={cls(
		'area-header flex justify-between items-center px-4 py-6',
		'xl:px-40 xl:pt-14 xl:pb-0',
		className
	)}
>
	<a href="{base}/" class="w-6 h-6 md:w-8 md:h-8 flex flex-shrink-0 z-10">
		<Img src={logo} alt="Logo" />
	</a>

	<nav class="flex items-center gap-2">
		{#each navigationConfig as item (item.name)}
			<HeaderNavItem {item} />
		{/each}

		<!-- TODO: Create new logic "request-resume" -->
		<!-- <DownloadResume isIconOnly={true} className="ml-1" /> -->
	</nav>
</header>

<style>
</style>
