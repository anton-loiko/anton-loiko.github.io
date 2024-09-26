<script lang="ts">
	import About from '$components/specific/Home/About/About.svelte';
	import Hero from '$components/specific/Home/Hero/Hero.svelte';
	import Skills from '$components/specific/Home/Skills/Skills.svelte';
	import Contacts from '$components/specific/Home/Contacts/Contacts.svelte';
	import Workbench from '$components/specific/Home/Workbench/Workbench.svelte';
	import LatestBlog from '$components/specific/Home/LatestBlog/LatestBlog.svelte';

	export let data;

	const { cards, posts } = data;
</script>

<svelte:head>
	<title>AL | Home</title>
</svelte:head>

<Hero classes={{ root: 'mb-28' }} />

<section class="mx-auto max-w-5xl px-4">
	<Workbench className="mb-28" {cards} />
	<About className="mb-28" />
	<Skills className="mb-36" />
	<LatestBlog className="mb-28" {posts} />
</section>

<Contacts />
