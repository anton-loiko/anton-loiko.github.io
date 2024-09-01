<script lang="ts">
	import { onDestroy } from 'svelte';
	import ButtonLink from '$components/shared/ButtonLink.svelte';
	import CardList from '$components/specific/Card/CardList.svelte';
	import type { CardProps } from '$lib/types';
	import { workbenchAnchorRef } from '$stores/global/refs';

	export let cards: CardProps[] = [];
	export let className: string = '';

	let localRef: HTMLElement | null = null;

	$: workbenchAnchorRef.set(localRef);

	onDestroy(() => {
		workbenchAnchorRef.set(null);
	});
</script>

<section class={className}>
	<h5 bind:this={localRef} class="text-xl text-principal-red text-center pt-5 mb-2">My work</h5>
	<h3 class="text-2xl text-gray-600 text-center mb-14">Take a look at the featured projects</h3>

	<CardList classes={{ root: 'mb-24' }} {cards} />

	<ButtonLink className="mx-auto" path="/workbench">Explore my Workbench</ButtonLink>
</section>
