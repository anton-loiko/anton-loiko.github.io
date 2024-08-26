<script lang="ts">
	import GitHubIcon from '$components/icons/GitHub.svelte';
	import LinkedinIcon from '$components/icons/Linkedin.svelte';
	import ThemeSwitcher from '$components/specific/ThemeSwitcher.svelte';
	import FooterItem from './FooterItem.svelte';
	import { page } from '$app/stores';
	import type { FooterLinksConfig } from '$lib/types';
	import FooterCopyRight from './FooterCopyRight.svelte';
	import cls from 'classnames';

	const items: FooterLinksConfig[] = [
		{
			// Unlock in future features,
			hide: true,
			name: 'codewars',
			url: 'https://www.codewars.com/users/anton.loiko',
			className: 'w-5 h-5',
			img: 'https://www.codewars.com/users/anton.loiko/badges/micro',
			alt: 'codewars'
		},
		{
			// Unlock in future features
			hide: true,
			name: 'theme',
			url: null,
			icon: ThemeSwitcher,
			hideOnHome: true
		}
	];

	const socialConfig: FooterLinksConfig[] = [
		{
			name: 'github',
			url: 'https://github.com/anton-loiko',
			className: 'w-5 h-5',
			icon: GitHubIcon
		},
		{
			name: 'linkedin',
			url: 'https://www.linkedin.com/in/antonloiko',
			icon: LinkedinIcon
		}
	];
</script>

<footer
	class={cls(
		'area-footer grid grid-cols-none grid-flow-col items-start  sm:items-center gap-4 px-4 py-6 xl:px-40 xl:pb-14 xl:pt-0',
		$page.url.pathname === '/' ? 'sm:grid-cols-2' : 'sm:grid-cols-3'
	)}
>
	<div class="flex flex-col gap-2 sm:block">
		{#if items.filter((item) => !item.hide).length}
			<ul class="flex items-center gap-2">
				{#each items as item (item.name)}
					<FooterItem {item} />
				{/each}
			</ul>
		{/if}

		<FooterCopyRight className="flex sm:hidden" />
	</div>

	<FooterCopyRight className="hidden sm:flex sm:justify-center" />

	<ul class="flex justify-end items-center gap-2">
		{#each socialConfig as item (item.name)}
			<FooterItem {item} />
		{/each}
	</ul>
</footer>
