<script lang="ts">
	import CardList from '$components/specific/Card/CardList.svelte';
	import Container from '$components/shared/Container.svelte';

	export let data;
</script>

<svelte:head>
	<title>AL | Workbench</title>
</svelte:head>

<Container title="Workbench">
	<CardList isTwoColumnLayout cards={data.cards} classes={{ root: 'mb-36' }} />
</Container>
