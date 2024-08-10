<script>
	import Container from '$components/layout/Container.svelte';
	import PostList from '$components/post/PostList.svelte';

	export let data;
</script>

<svelte:head>
	<title>AL | Blog</title>
</svelte:head>

<Container title="Blog">
	<div class="py-4 px-6 mb-8 rounded-lg bg-gradient-to-r from-primary to-yellow-400">
		<h2 class="font-lilita text-2xl font-bold text-secondary-dark mb-4">
			Join Me on My learning Journey! <span class="ml-1"> 🌱</span>
		</h2>
		<p class="font-roboto text-secondary-dark mb-1">
			🚀 I’ll share insights on what I’m currently exploring and creating 🎮
		</p>

		<p class="font-roboto text-secondary-dark">
			🎨 Stay tuned for Portfolio and Project demos coming Soon! 🛠️
		</p>
	</div>

	<h2 class="font-lilita text-3xl font-bold mb-4">List of Posts:</h2>

	<PostList posts={data.posts} />
</Container>
