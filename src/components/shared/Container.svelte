<script>
	import cls from 'classnames';

	export let title = '';
	export let className = '';

	/** @type {'section' | 'article'} */
	export let tag = 'section';
</script>

<svelte:element this={tag} class={cls('container mx-auto px-4 max-w-3xl', className)}>
	{#if title}
		<h1 class="text-4xl font-lilita mb-4">{title}</h1>
	{/if}

	<slot />
</svelte:element>
