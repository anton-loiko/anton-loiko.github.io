<script lang="ts">
	import cls from 'classnames';

	export let url: string;
	export let src: string;
	export let alt: string = '';
	export let classes: Partial<Record<'root' | 'img', string>> = {};
</script>

<a
	class={cls('inline-flex items-center flex-shrink-0 p-1 rounded-md bg-gray-50', classes.root)}
	href={url}
	target="_blank"
	rel="noreferrer"
>
	<img class={cls('w-9 h-9 flex-shrink-0', classes.img)} {src} {alt} />
</a>
