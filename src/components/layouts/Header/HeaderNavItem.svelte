<script lang="ts">
	import { page } from '$app/stores';
	import type { NavigationConfig } from '$lib/types';
	import { getBasePath } from '$lib/utils';
	import cls from 'classnames';

	export let className = '';
	export let item: NavigationConfig;
</script>

{#if !item.hide && !(item.hideOnHome && $page.url.pathname === '/')}
	<div class={cls({ relative: !!item.children?.length })}>
		<a
			class={cls(
				'text-lg font-roboto font-bold uppercase tracking-widest decoration-primary-dark underline-offset-2',
				{
					hidden: item.selfHide && $page.url.pathname === item.pathname,
					'hover:underline': $page.url.pathname !== item.pathname,
					'pointer-events-none': $page.url.pathname === item.pathname
				},
				className
			)}
			href={getBasePath(item.pathname)}
			on:click={item.onClick}
		>
			<span
				class={cls({
					'opacity-75 text-primary-dark': $page.url.pathname === item.pathname
				})}>{item.name}</span
			>
		</a>

		<!--  (item.showOnParentPage && new RegExp(`^${item.pathname}`).test($page.url.pathname)) -->
		{#if item.children && item.showOnParentPage && item.pathname === $page.url.pathname}
			<div
				class={cls(
					'flex items-center gap-2 absolute pointer-events-auto text-primary right-full top-8 sm:top-9'
				)}
			>
				<!-- decoration line -->
				<div
					class="absolute -top-1.5 -right-6 w-4 h-5 border-r border-b rounded-br-md border-primary sm:-top-2.5 sm:h-6"
				/>

				{#each item.children as subItem}
					<svelte:self item={subItem} className="text-sm" />
				{/each}
			</div>
		{/if}
	</div>
{/if}
