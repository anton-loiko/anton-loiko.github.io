<script lang="ts">
	import { screenWidth, updateWidth } from '$lib/stores/screenWidth';
	import { onMount } from 'svelte';

	const MIN_GAME_WIDTH = 380;

	let width: number;
	$: $screenWidth = width;

	export let src = '';

	let playing = false;
	let loading = false;

	const play = () => {
		playing = true;
		loading = true;
	};

	const stop = () => (playing = false);

	const handleLoaded = () => (loading = false);

	onMount(() => {
		updateWidth();
	});
</script>

{#if $screenWidth >= MIN_GAME_WIDTH}
	<p class="!mb-1">
		Please click <span class="font-lilita text-principal-purple">Play</span> to try the game right here,
		or feel free to watch the video below.
	</p>
	<p class="!my-1">
		To exit the game, simply press <span class="font-lilita text-principal-red">Stop</span>.
	</p>
	<p class="font-lilita text-principal-green !mt-1">Enjoy your time!</p>

	<div class="flex flex-col gap-4 items-center justify-center w-full mb-5">
		{#if loading}
			<p class="font-roboto text-white">Loading...</p>
		{/if}

		{#if playing}
			<button
				on:click={stop}
				class="font-lilita text-white bg-principal-red py-1 px-3 rounded-lg hover:bg-opacity-50 active:bg-opacity-75"
			>
				Stop
			</button>

			<iframe
				on:load={handleLoaded}
				title="game-player"
				frameborder="0"
				class="border-0 mx-auto w-full h-auto max-w-[364px] aspect-[9/16]"
				{src}
			/>
		{:else}
			<button
				on:click={play}
				class="font-lilita text-white bg-principal-purple py-1 px-3 rounded-lg hover:bg-opacity-50 active:bg-opacity-75"
			>
				Play
			</button>
		{/if}
	</div>
{:else if typeof $screenWidth !== 'undefined'}
	<p class="text-principal-red">
		Your screen is below the minimum required width of {MIN_GAME_WIDTH}px.
		<br />
		Please use a different device or watch the video below.
	</p>
{:else}
	<p class="font-roboto text-white">Loading...</p>
{/if}
