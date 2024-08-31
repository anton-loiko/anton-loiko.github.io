<script lang="ts">
	import cls from 'classnames';

	export let tag = 'p';
	export let twoLine: boolean = false;
	export let className: string = '';
</script>

<svelte:element
	this={tag}
	class={cls(
		'w-full  overflow-hidden text-ellipsis',
		{ 'two-line': twoLine, 'whitespace-nowrap': !twoLine },
		className
	)}
>
	<slot />
</svelte:element>

<style>
	.two-line {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
