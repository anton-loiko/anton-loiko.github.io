<script lang="ts">
	import cls from 'classnames';
	import CategoryList from '$components/shared/Category/CategoryList.svelte';
	import type { TagSize, TagVariant, WorkbenchTags } from '$lib/types';
	import Tag from './Tag.svelte';

	export let tags: WorkbenchTags[];
	export let size: TagSize = 'sm';
	export let variant: TagVariant = 'default';
	export let classes: Partial<Record<'tag' | 'root', string>> = {};
</script>

<CategoryList
	classes={{ root: cls('!gap-2', classes.root), li: 'py-0' }}
	categories={tags}
	let:category
>
	<Tag {size} {variant} tag={category} className={cls(classes.tag)} />
</CategoryList>
