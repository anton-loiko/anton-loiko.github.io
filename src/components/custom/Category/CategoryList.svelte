<script lang="ts">
	import type { Categories } from '$lib/types';
	import Category from './Category.svelte';

	export let categories: Categories[];
	export let classes: Partial<Record<'category' | 'root', string>> = {};
</script>

<ul class={`flex gap-6 flex-wrap ${classes?.root ?? ''}`}>
	{#each categories as category}
		<li class="py-2">
			<Category {category} className={classes?.category ?? ''} />
		</li>
	{/each}
</ul>
