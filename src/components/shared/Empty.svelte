<script lang="ts">
	import { page } from '$app/stores';
	import { getBasePath } from '$lib/utils';

	export let title: string = 'Not found';
	export let fallbackPath: string = '';
	export let fallbackLabel: string = '';
</script>

<section class="text-center">
	<h2 class="text-3xl font-roboto mb-4">{title}</h2>

	{#if fallbackPath && fallbackLabel && $page.url.pathname !== fallbackPath}
		<a href={getBasePath(fallbackPath)} class="text-lg text-principal-blue hover:underline">
			{fallbackLabel}
		</a>
	{/if}
</section>
