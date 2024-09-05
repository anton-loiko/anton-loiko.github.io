<script lang="ts">
	import Container from '$components/shared/Container.svelte';
	import Tags from '$components/specific/Tags/Tags.svelte';
	import type { Workbench } from '$lib/types';
	import { formatDate } from '$lib/utils';

	export let data: Workbench;
</script>

<svelte:head>
	<title>{`AL | Workbench | ${data.meta.title}`}</title>
</svelte:head>

<Container title={data.meta.title}>
	<p class="text-xs text-primary-dark opacity-60 pb-1">Published at {formatDate(data.meta.date)}</p>

	<Tags variant="light" size="xs" classes={{ root: 'pb-2 mb-8' }} tags={data.meta.tags} />

	<svelte:component this={data.content} />
</Container>
