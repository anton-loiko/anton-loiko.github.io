<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import CaretDoubleDown from '$components/icons/CaretDoubleDown.svelte';
	import { useScrollToAnchor } from '$hooks/useScrollToAnchor';
	import { workbenchAnchorRef } from '$stores/global/refs';

	export let className: string = '';

	const { scrollToAnchor } = useScrollToAnchor();

	let animationRef: HTMLElement | null = null;

	onMount(() => {
		if (animationRef) {
			gsap.to(animationRef, {
				y: 20,
				repeat: -1,
				yoyo: true,
				duration: 1,
				ease: 'power1.inOut'
			});
		}
	});

	const handleClick = () => scrollToAnchor($workbenchAnchorRef);
</script>

<button bind:this={animationRef} class={className} on:click={handleClick}>
	<CaretDoubleDown className="text-primary w-8 h-8" />
</button>
