<script>
	export let title = '';
	export let className = '';
</script>

<section class={'container mx-auto px-4 max-w-3xl ' + className}>
	{#if title}
		<h1 class="text-4xl font-lilita mb-4">{title}</h1>
	{/if}
	<slot></slot>
</section>
