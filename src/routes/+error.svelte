<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import Container from '$components/shared/Container.svelte';
</script>

<Container className="text-center">
	<h1 class="text-6xl mb-6">{$page.status}</h1>

	<p class="text-3xl mb-4 font-bold">{$page?.error?.message}</p>
	<p class=" mb-4">Oops! The page you are looking for does not exist.</p>

	<a href="{base}/" class="text-lg text-blue-500 hover:underline">Go back to the homepage</a>
</Container>
