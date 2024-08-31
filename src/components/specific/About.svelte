<script lang="ts">
	import { aboutAnchorRef } from '$stores/globalStore';
	import { onDestroy } from 'svelte';

	let localRef: HTMLElement | null = null;

	$: aboutAnchorRef.set(localRef);

	onDestroy(() => {
		aboutAnchorRef.set(null);
	});
</script>

<div bind:this={localRef} id="about" class="pt-20 pb-32">
	<h4 class="text-center text-xl text-principal-red mb-3">A Little</h4>
	<h2 class="text-center text-4xl text-gray-600 font-lilita mb-8">About me</h2>

	<p class="font-roboto text-white mb-4 text-sm md:text-base">
		As a Senior Frontend Engineer and Fullstack Developer, I bring over 6 years of experience in
		crafting dynamic and responsive user interfaces. My passion lies in UI/UX design, where I merge
		creativity with technical prowess to build engaging, user-friendly applications.
	</p>

	<p class="font-roboto text-white mb-4 text-sm md:text-base">
		Currently, I am deeply immersed in C++ and Unreal Engine, exploring the intricate world of game
		development and UI programming. My journey in tech has been driven by a relentless curiosity and
		a commitment to continuous learning, which has led me to work on diverse projects from mobile
		apps to complex web systems.
	</p>

	<p class="font-roboto text-white mb-4 text-sm md:text-base">
		I'm excited about opportunities that allow me to leverage my skills in frontend and fullstack
		development, while also diving deeper into the realm of game development. Let's connect if
		you're looking for someone who is not only technically adept but also passionate about creating
		exceptional user experiences.
	</p>
</div>
