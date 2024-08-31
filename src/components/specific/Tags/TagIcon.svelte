<script lang="ts">
	import { WorkbenchTagsEnum } from '$lib/types';
	import { ICON_MAP } from './Tag.mappings';

	export let tagEnumValue: WorkbenchTagsEnum;
	export let className: string = '';
</script>

<svelte:component this={ICON_MAP.get(tagEnumValue)} {className} />
