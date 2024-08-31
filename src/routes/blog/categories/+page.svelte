<script lang="ts">
	import Container from '$components/shared/Container.svelte';
	import Categories from '$components/shared/Category/Categories.svelte';
	import { getCategories } from '$lib/utils';

	const categories = getCategories();
</script>

<svelte:head>
	<title>AL | Blog | Categories</title>
</svelte:head>

<Container title="Categories">
	<Categories classes={{ category: 'text-2xl' }} {categories} />
</Container>
