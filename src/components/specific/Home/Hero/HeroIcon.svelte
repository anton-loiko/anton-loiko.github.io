<script lang="ts">
	import BatteryCharging from '$components/icons/BatteryCharging.svelte';
	import Gamepad from '$components/icons/Gamepad.svelte';
	import Palette from '$components/icons/Palette.svelte';
	import TerminalBox from '$components/icons/TerminalBox.svelte';
	import type { HeroIconVariant } from '$lib/types';

	export let variant: HeroIconVariant;
	export let className: string = '';

	const ICON_MAP = new Map<
		typeof variant,
		typeof Gamepad | typeof TerminalBox | typeof BatteryCharging
	>([
		['gamepad', Gamepad],
		['terminal', TerminalBox],
		['battery', BatteryCharging],
		['palette', Palette]
	]);
</script>

{#if ICON_MAP.has(variant)}
	<svelte:component this={ICON_MAP.get(variant)} {className} />
{/if}
