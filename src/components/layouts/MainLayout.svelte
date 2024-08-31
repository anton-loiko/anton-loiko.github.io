<script>
	import { page } from '$app/stores';
	import cls from 'classnames';

	import Header from '$components/layouts/Header/Header.svelte';
	import Footer from '$components/layouts/Footer/Footer.svelte';
	import Main from '$components/shared/Main.svelte';
	import '../../app.css';

	const containerClassName = 'xl:container xl:mx-auto xl:!px-0';
</script>

<div
	class={cls(
		'grid-custom-layout text-primary',
		$page.url.pathname === '/' ? 'bg-gray-200' : 'bg-secondary-dark'
	)}
>
	<Header className={containerClassName} />

	<Main className={containerClassName}>
		<slot />
	</Main>

	<Footer className={containerClassName} />
</div>
