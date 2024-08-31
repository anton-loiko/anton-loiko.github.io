<script lang="ts">
	import ButtonLink from '$components/shared/ButtonLink.svelte';
	import CardList from '$components/specific/Card/CardList.svelte';

	import About from '$components/specific/About.svelte';
	import Hero from '$components/specific/Hero/Hero.svelte';

	export let data;

	let anchorRef: HTMLDivElement | null = null;
	let aboutAnchorRef: HTMLDivElement | null = null;
</script>

<svelte:head>
	<title>AL | Home</title>
</svelte:head>

<section class="">
	<Hero classes={{ root: 'mb-28' }} {anchorRef} />

	<h5 bind:this={anchorRef} class="text-xl text-principal-red text-center pt-5 mb-2">My work</h5>
	<h3 class="text-2xl text-gray-600 text-center mb-14">Take a look at the featured projects</h3>

	<div class="mx-auto mb-28 max-w-5xl px-4">
		<CardList classes={{ root: 'mb-24' }} cards={data.cards} />

		<ButtonLink className="mx-auto" path="/workbench">Explore my Workbench</ButtonLink>
	</div>

	<div class="mx-auto mb-36 max-w-5xl px-4">
		<About anchorRef={aboutAnchorRef} />
	</div>
</section>
