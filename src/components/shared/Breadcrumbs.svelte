<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import Container from '$components/layout/Container.svelte';
	import RightIcon from '$components/icons/Right.svelte';

	const getBreadcrumbs = (pathname: string) => {
		return pathname.split('/').map((breadcrumb, index, arr) => ({
			href:
				breadcrumb === ''
					? '/'
					: arr.slice(0, index + 1).reduce((prev, current) => prev + '/' + current),
			breadcrumb: breadcrumb === '' ? '🥑' : breadcrumb.replaceAll('-', ' '),
			isHome: breadcrumb === ''
		}));
	};

	export let className = '';
</script>

<Container {className}>
	<ul class="flex items-center gap-2 flex-wrap">
		{#each getBreadcrumbs($page.url.pathname) as item}
			{#if !item.isHome}
				<li class="text-primary-dark"><RightIcon /></li>
			{/if}

			<li class="font-lilita uppercase hover:text-white flex-shrink-0">
				<a
					href="{base}{item.href}"
					class={`block min-w-5 min-h-5 py-1 ${$page.url.pathname === item.href ? 'pointer-events-none text-primary-dark' : ''}`}
				>
					{item.breadcrumb}
				</a>
			</li>
		{/each}
	</ul>
</Container>
