<script>
	export let description = '';
	export let className = '';
</script>

<p
	class={'before:absolute before:w-8 before:h-1 before:bg-primary before:left-1 before:top-2/4 before:-translate-y-2/4 relative pl-10 text-xs text-primary-dark tracking-wide font-roboto min-w-max ' +
		className}
>
	{description}
</p>
