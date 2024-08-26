<script lang="ts">
	import { onMount } from 'svelte';

	export let onOutsideClick: () => void;
	export let className = '';

	let ref: HTMLDivElement;

	onMount(() => {
		const handler = (e: any) => {
			if (ref && !ref.contains(e.target)) {
				onOutsideClick && onOutsideClick();
			}
		};

		document?.addEventListener('click', handler);

		return () => document?.removeEventListener('click', handler);
	});
</script>

<div bind:this={ref} class={className}>
	<slot />
</div>
