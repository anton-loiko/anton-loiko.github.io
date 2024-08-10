<script>
	import { page } from '$app/stores';

	import Header from '$components/layout/Header/Header.svelte';
	import Footer from '$components/layout/Footer/Footer.svelte';
	import Main from '$components/layout/Main.svelte';
	import '../app.css';
</script>

<div
	class={`grid-custom-layout text-primary ${$page.url.pathname === '/' ? 'bg-secondary' : 'bg-secondary-dark'}`}
>
	<Header />

	<Main>
		<slot />
	</Main>

	<Footer />
</div>
