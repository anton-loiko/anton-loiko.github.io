<script lang="ts">
	import { CategoriesEnum, type Categories } from '$lib/types';
	import Container from '$components/layout/Container.svelte';
	import CategoryList from '$components/shared/Category/CategoryList.svelte';

	const categories: Categories[] = Object.values(CategoriesEnum);
</script>

<svelte:head>
	<title>AL | Blog | Categories</title>
</svelte:head>

<Container title="Categories">
	<CategoryList classes={{ category: 'text-2xl' }} {categories} />
</Container>
