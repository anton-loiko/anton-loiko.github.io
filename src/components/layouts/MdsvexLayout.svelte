<script lang="ts" context="module">
	import img from '$components/specific/MdxImag.svelte';
	import vimeo from '$components/specific/MdxVimeo.svelte';
	import game from '$components/specific/MdxGame.svelte';

	export { img, vimeo, game };
</script>

<div class="prose prose-invert mb-8 lg:mb-16">
	<slot />
</div>
