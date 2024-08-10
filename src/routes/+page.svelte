<script>
	import DecorateDescription from '$components/custom/DecorateDescription.svelte';
</script>

<svelte:head>
	<title>AL | Home</title>
</svelte:head>

<section class="h-full w-full">
	<div
		class="app-avatar-bg brightness-75 relative h-full w-full bg-no-repeat bg-contain bg-center bg-fixed mix-blend-screen mix-blend-lighten"
	/>

	<div class="h-1 w-1 fixed z-10 left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
		<h1
			class="absolute text-7xl font-lilita right-0 translate-y-3/4 translate-x-4 md:translate-x-0 md:translate-y-0 md:-top-20 md:text-9xl"
		>
			Hello

			<DecorateDescription className="!absolute -bottom-2 md:bottom-0 left-0">
				Empowering UI through Engineering Magic
			</DecorateDescription>
		</h1>
	</div>

	<div class="h-1 w-1 fixed z-10 left-2/4 bottom-1 -translate-x-2/4 -rotate-90">
		<DecorateDescription className="before:!w-6 !absolute !pl-9">Anton Loiko</DecorateDescription>
	</div>
</section>

<style>
	.app-avatar-bg {
		background-image: url('/images/avatar.jpg');
		/* filter: brightness(0.8); */
	}
</style>
