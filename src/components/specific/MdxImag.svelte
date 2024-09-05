<script lang="ts">
	import Img from '$components/shared/Img.svelte';
	import cls from 'classnames';

	export let src = '';
	export let alt = '';
</script>

<Img {src} {alt} className={cls('min-h-60 h-auto')} />
