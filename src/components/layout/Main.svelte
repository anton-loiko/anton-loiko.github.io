<script lang="ts">
	import { page } from '$app/stores';
	import Breadcrumbs from '$components/custom/Breadcrumbs.svelte';

	const ignorePaths = ['/', '/blog', '/about'];
</script>

<main class="area-main">
	{#if !ignorePaths.includes($page.url?.pathname ?? '')}
		<Breadcrumbs className="mb-10 py-3 sm:py-0" />
	{/if}

	<slot />
</main>
