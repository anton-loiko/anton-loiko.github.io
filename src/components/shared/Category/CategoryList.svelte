<script lang="ts">
	import cls from 'classnames';

	export let categories: string[];
	export let classes: Partial<Record<'category' | 'root' | 'li', string>> = {};
</script>

<ul class={cls('flex gap-4 items-center flex-wrap', classes.root)}>
	{#each categories as category}
		<li class={cls('py-2 leading-none', classes.li)}>
			<!-- svelte-ignore invalid-html-attribute -->
			<slot {category} className={classes.category} />
		</li>
	{/each}
</ul>
