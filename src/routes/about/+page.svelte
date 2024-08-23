<script>
	import Container from '$components/layout/Container.svelte';
	import DownloadResume from '$components/DownloadResume.svelte';
</script>

<svelte:head>
	<title>AL | About me</title>
</svelte:head>

<Container title="About me">
	// TODO: Create new logic "request-resume"

	<!-- <DownloadResume isIconOnly={false} className="mb-6" /> -->

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
</Container>
