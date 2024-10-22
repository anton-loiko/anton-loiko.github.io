<script lang="ts">
	import cls from 'classnames';
	import { onDestroy } from 'svelte';
	import { aboutAnchorRef } from '$stores/global/refs';

	export let className: string = '';

	let localRef: HTMLElement | null = null;

	$: aboutAnchorRef.set(localRef);

	onDestroy(() => {
		aboutAnchorRef.set(null);
	});
</script>

<div bind:this={localRef} id="about" class={cls('pt-4', className)}>
	<h4 class="text-center text-xl text-principal-red mb-3">A Little</h4>
	<h2 class="text-center text-4xl text-gray-600 font-lilita mb-8">About me</h2>

	<p class="font-roboto text-white mb-4 text-sm md:text-base">
		As a Senior Frontend Engineer and Fullstack Developer, I bring over 7 years of experience in
		crafting dynamic and responsive user interfaces. My focus is on UI/UX design, where I merge
		creativity with technical expertise to build engaging, user-friendly applications.
	</p>

	<p class="font-roboto text-white mb-4 text-sm md:text-base">
		Currently, I am deeply immersed in GoLang for backend development, exploring efficient
		microservices and scalable application architecture. My journey in tech has been driven by a
		relentless curiosity and a commitment to continuous learning, which has led me to work on
		diverse projects, from simple SPA apps to complex web systems.
	</p>

	<p class="font-roboto text-white mb-4 text-sm md:text-base">
		I strive to contribute to UI/UX design by leveraging my skills to create intuitive and effective
		user interfaces. Let's connect if you're looking for someone who is not only technically adept
		but also passionate about creating exceptional user experiences.
	</p>
</div>
