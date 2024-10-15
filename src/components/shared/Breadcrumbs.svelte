<script lang="ts">
	import { page } from '$app/stores';
	import RightIcon from '$components/icons/Right.svelte';
	import Container from './Container.svelte';
	import { createPath } from '$lib/utils';
	import cls from 'classnames';

	const getBreadcrumbs = (pathname: string) => {
		return pathname.split('/').map((breadcrumb, index, arr) => ({
			href:
				breadcrumb === ''
					? '/'
					: arr.slice(0, index + 1).reduce((prev, current) => prev + '/' + current),
			breadcrumb: breadcrumb === '' ? '🏠' : breadcrumb.replaceAll('-', ' '),
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

			<li class="font-lilita uppercase hover:text-white">
				<a
					href={createPath(item.href)}
					class={cls('block min-w-5 min-h-5 py-1 flex-shrink-0', {
						'pointer-events-none text-primary-dark focus:outline-none':
							$page.url.pathname === item.href
					})}
				>
					{item.breadcrumb}
				</a>
			</li>
		{/each}
	</ul>
</Container>
