<script lang="ts">
	import cls from 'classnames';
	import { createPath } from '$lib/utils';

	export let path: string;
	export let className: string = '';
</script>

<a
	href={createPath(path)}
	class={cls(
		'transition-colors flex flex-shrink-0 py-2 px-12 rounded-full text-gray-50 justify-center max-w-max bg-gradient-to-r',
		'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
		'hover:from-orange-500 hover:to-pink-500',
		className
	)}
>
	<slot />
</a>
