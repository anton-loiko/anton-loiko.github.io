<script lang="ts">
	import cls from 'classnames';
	import { page } from '$app/stores';
	import Breadcrumbs from './Breadcrumbs.svelte';

	export let className: string = '';

	const ignorePaths = ['/', '/blog', '/workbench'];
</script>

<main class={cls('area-main', className)}>
	{#if !ignorePaths.includes($page.url?.pathname ?? '')}
		<Breadcrumbs className={cls('mb-10 py-3 ', 'sm:py-0')} />
	{/if}

	<slot />
</main>
