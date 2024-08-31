<script lang="ts">
	export let src = '';
</script>

<svelte:head>
	<script src="https://player.vimeo.com/api/player.js"></script>
</svelte:head>

<iframe
	title="vimeo-player"
	src="https://player.vimeo.com/video/{src}"
	class="w-full h-64 mb-5 sm:h-96 lg:h-[420px]"
	frameborder="0"
	allowfullscreen
/>
