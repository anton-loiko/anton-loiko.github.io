<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import CaretDoubleDown from '$components/icons/CaretDoubleDown.svelte';
	import { useScrollToAnchor } from '$hooks/useScrollToAnchor';

	export let anchorRef: HTMLElement | null = null;
	export let className: string = '';

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

	const { scrollToAnchor } = useScrollToAnchor();
</script>

<button bind:this={animationRef} class={className} on:click={scrollToAnchor(anchorRef)}>
	<CaretDoubleDown className="text-primary w-8 h-8" />
</button>
