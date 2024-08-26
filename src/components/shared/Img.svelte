<script lang="ts">
	import cls from 'classnames';

	export let src = '';
	export let alt = '';
	export let className = '';
</script>

<img {src} {alt} loading="lazy" class={cls(className)} />
