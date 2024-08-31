<script lang="ts">
	import cls from 'classnames';
	import CategoryItem from './CategoryItem.svelte';
	import CategoryList from './CategoryList.svelte';

	export let categories: string[];
	export let classes: Partial<Record<'category' | 'root', string>> = {};
</script>

<CategoryList {categories} let:category let:className>
	<CategoryItem {category} className={cls(classes?.category ?? '', className)} />
</CategoryList>
