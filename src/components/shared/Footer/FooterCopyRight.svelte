<script lang="ts">
	import { page } from '$app/stores';

	export let className = '';
</script>

{#if $page.url.pathname !== '/'}
	<div class="flex items-center justify-start flex-shrink-0 {className}">
		<span class="text-white">&#169;</span>
		<span class="text-gray-100 text-sm">Anton Loiko, {new Date().getFullYear()}</span>
	</div>
{/if}
