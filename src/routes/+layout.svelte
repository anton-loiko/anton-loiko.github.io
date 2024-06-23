<script>
	import Header from '$components/layout/Header.svelte';
	import Footer from '$components/layout/Footer.svelte';
	import '../app.css';
</script>

<div class="grid-custom-layout">
	<Header />

	<main class="area-main">
		<slot />
	</main>

	<Footer />
</div>
