<script lang="ts">
	import cls from 'classnames';

	export let src = '';
	export let alt = '';
	export let className = '';
</script>

<img
	{src}
	{alt}
	loading="lazy"
	class={cls(
		'relative w-full h-full rounded',
		"before:absolute before:content-['Trick_for_creased_image'] before:text-center before:min-h-16 before:pt-10 before:text-black before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-principal-purple before:h-full before:w-full before:rounded",
		className
	)}
/>
