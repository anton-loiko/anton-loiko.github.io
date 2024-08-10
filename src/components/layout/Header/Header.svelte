<script lang="ts">
	import { base } from '$app/paths';
	import logo from '$lib/images/logo.svg';
	import DownloadResume from '$components/DownloadResume.svelte';
	import type { NavigationConfig } from '$lib/types';
	import HeaderNavItem from './HeaderNavItem.svelte';

	const navigationConfig: NavigationConfig[] = [
		{
			selfHide: true,
			name: 'home',
			pathname: '/'
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
			pathname: '/about'
		}
	];
</script>

<header class="area-header flex justify-between items-center px-4 py-6 xl:px-40 xl:pt-14 xl:pb-0">
	<a href="{base}/" class="w-6 h-6 md:w-8 md:h-8 flex flex-shrink-0">
		<img src={logo} alt="Logo" />
	</a>

	<nav class="flex items-center gap-2">
		{#each navigationConfig as item (item.name)}
			<HeaderNavItem {item} />
		{/each}

		<DownloadResume isIconOnly={true} className="ml-1" />
	</nav>
</header>

<style>
</style>
