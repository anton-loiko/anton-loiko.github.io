<script>
	import CategoryList from '$components/shared/Category/CategoryList.svelte';
	import Container from '$components/layout/Container.svelte';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>{`AL | Blog | ${data.meta.title}`}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={`AL | Blog | ${data.meta.title}`} />
</svelte:head>

<Container tag="article" title={data.meta.title} className="mb-10">
	<p class="text-xs text-primary-dark opacity-60">Published at {formatDate(data.meta.date)}</p>

	<CategoryList classes={{ root: 'pb-2 mb-8' }} categories={data.meta.categories} />

	<svelte:component this={data.content} />
</Container>
