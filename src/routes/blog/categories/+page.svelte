<script lang="ts">
	import Container from '$components/shared/Container.svelte';
	import CategoryList from '$components/shared/Category/CategoryList.svelte';
	import { getCategories } from '$lib/utils';

	const categories = getCategories();
</script>

<svelte:head>
	<title>AL | Blog | Categories</title>
</svelte:head>

<Container title="Categories">
	<CategoryList classes={{ category: 'text-2xl' }} {categories} />
</Container>
