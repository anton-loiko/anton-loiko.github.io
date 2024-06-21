<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="w-10 h-10">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === `${base}/` ? 'page' : undefined}>
				<a href="{base}/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === `${base}/about` ? 'page' : undefined}>
				<a href="{base}/about">About</a>
			</li>
		</ul>
	</nav>

	<div class="w-8 h-8">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
</style>
