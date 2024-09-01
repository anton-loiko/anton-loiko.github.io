<script lang="ts">
	import cls from 'classnames';
	import { createPath } from '$lib/utils';

	export let path: string;
	export let className: string = '';
</script>

<a
	href={createPath(path)}
	class={cls(
		'transition-colors flex flex-shrink-0 py-2 px-12 rounded-full bg-primary bg-opacity-90 text-secondary text-opacity-90 justify-center max-w-max',
		'hover:bg-primary hover:text-secondary active:bg-opacity-70 active:text-opacity-70',
		className
	)}
>
	<slot />
</a>
