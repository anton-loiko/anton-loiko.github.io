<script lang="ts">
	import cls from 'classnames';
	import type { CardProps } from '$lib/types';
	import Card from './Card.svelte';
	import Empty from '../../shared/Empty.svelte';

	export let cards: CardProps[];
	export let isTwoColumnLayout: boolean = false;
	export let classes: Partial<Record<'root' | 'card' | 'item', string>> = {};
	export let fallbackPath: string = '';
	export let fallbackLabel: string = '';
</script>

{#if cards.length}
	<div
		class={cls(
			'grid gap-x-6 gap-y-8 grid-cols-1',
			'sm:grid-cols-2',
			{ 'lg:grid-cols-[320px_320px_320px]': !isTwoColumnLayout },
			classes?.root
		)}
	>
		{#each cards as card}
			<Card {isTwoColumnLayout} className={cls(classes?.card)} {...card} />
		{/each}
	</div>
{:else}
	<Empty {fallbackLabel} {fallbackPath} />
{/if}
