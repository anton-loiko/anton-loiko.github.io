<script>
	import Container from '$components/layout/Container.svelte';
	import PostList from '$components/post/PostList.svelte';

	export let data;
</script>

<svelte:head>
	<title>{`AL | Blog | Categories | ${data.category}`}</title>
</svelte:head>

<Container title={`List of #${data.category}`}>
	<PostList posts={data.posts} fallbackPath="/blog" fallbackLabel="Browse all posts" />
</Container>
