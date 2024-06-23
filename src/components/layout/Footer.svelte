<script>
	import GitHubIcon from '$components/icons/GitHub.svelte';
	import LinkedinIcon from '$components/icons/Linkedin.svelte';

	const socialConfig = [
		{
			name: 'github',
			url: 'https://github.com/dementeey',
			className: 'w-5 h-5',
			icon: GitHubIcon
		},
		{
			name: 'linkedin',
			url: 'https://www.linkedin.com/in/antonloiko',
			icon: LinkedinIcon
		}
	];
</script>

<footer class="area-footer flex justify-end items-center gap-2 px-4 py-6 xl:px-40 xl:pb-14 xl:pt-0">
	{#each socialConfig as item (item.name)}
		<a href={item.url} target="_blank" class="cursor-pointe">
			<svelte:component this={item.icon} />
		</a>
	{/each}
</footer>

<style>
</style>
