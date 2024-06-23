<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import DownloadResume from '$components/DownloadResume.svelte';

	const navigationConfig = [
		{
			selfHide: true,
			name: 'home',
			pathname: '/'
		},
		{
			hide: true,
			name: 'blog',
			pathname: '/blog'
		},
		{
			name: 'about',
			pathname: '/about'
		}
	];
</script>

<header class="area-header flex justify-between items-center px-4 py-6 xl:px-40 xl:pt-14 xl:pb-0">
	<a href="{base}/" class="w-10 h-12 flex">
		<img src={logo} alt="SvelteKit" />
	</a>

	<nav class="flex items-center gap-2">
		{#each navigationConfig as item (item.name)}
			{#if !item.hide}
				<a
					class={`text-lg font-roboto font-bold uppercase tracking-widest decoration-primary-dark underline-offset-2  ${
						$page.url.pathname === item.pathname
							? 'pointer-events-none opacity-75 text-primary-dark'
							: 'hover:underline'
					} ${item.selfHide && $page.url.pathname === item.pathname ? 'hidden' : ''}`}
					href="{base}{item.pathname}"
				>
					{item.name}
				</a>
			{/if}
		{/each}

		<DownloadResume isIconOnly={true} className="ml-1" />
	</nav>
</header>

<style>
</style>
