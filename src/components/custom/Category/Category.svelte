<script lang="ts">
	import { base } from '$app/paths';
	import type { Categories } from '$lib/types';

	export let category: Categories;
	export let className: string = '';
</script>

<a href="{base}/blog/categories/{category}">
	<span
		class={`font-bold font-lilita cursor-pointer underline-offset-8 hover:text-white hover:underline ${className}`}
	>
		&num;{category}
	</span>
</a>
