<script lang="ts">
	import CardList from '$components/specific/Card/CardList.svelte';
	import Container from '$components/shared/Container.svelte';

	export let data;
</script>

<Container title="Workbench">
	<CardList isTwoColumnLayout cards={data.cards} classes={{ root: 'mb-36' }} />
</Container>
