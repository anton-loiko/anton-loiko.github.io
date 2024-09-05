<script>
	import Container from '$components/shared/Container.svelte';
	import PostList from '$components/specific/post/PostList.svelte';

	export let data;
</script>

<svelte:head>
	<title>{`AL | Blog | Categories | ${data.category}`}</title>
</svelte:head>

<Container title={`List of #${data.category.toLowerCase()}`}>
	<PostList posts={data.posts} fallbackPath="/blog" fallbackLabel="Browse all posts" />
</Container>
