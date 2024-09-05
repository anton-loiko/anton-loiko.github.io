<script lang="ts">
	import type { HeroTitleOptions } from '$lib/types';
	import cls from 'classnames';

	export let title: string | HeroTitleOptions;
	export let className: string = '';

	export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
</script>

<svelte:element this={tag} class={cls(className)}>
	{#if typeof title === 'string'}
		{title}
	{:else if title?.tag && typeof title?.children === 'object'}
		<svelte:element this={title.tag} class={cls(title.attrs?.class)}>
			{#each title?.children as child}
				<svelte:element this={child.tag} class={cls(child.attrs?.class)}>
					{#if typeof child.icon}
						<svelte:component this={child.icon} {...child.attrs?.iconProps} />
					{/if}

					{child.children || ''}
				</svelte:element>
			{/each}
		</svelte:element>
	{/if}
</svelte:element>
