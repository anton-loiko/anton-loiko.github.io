<script lang="ts">
	import cls from 'classnames';
	import { SOCIAL_LINKS_MAP } from '$lib/constants';
	import ArrowUpRight from '$components/icons/ArrowUpRight.svelte';

	export let classes: Partial<
		Record<'root' | 'container' | 'subtitle' | 'title' | 'description', string>
	> = {};

	const links = [
		SOCIAL_LINKS_MAP.get('github')!,
		SOCIAL_LINKS_MAP.get('linkedin')!,
		SOCIAL_LINKS_MAP.get('email')!
	];
</script>

<div
	class={cls(
		'root relative flex flex-col bg-no-repeat bg-contain bg-center px-4 mb-32',
		'xl:bg-cover md:pt-48 lg:px-0',
		classes.root
	)}
>
	<div class={cls('flex flex-col items-center flex-1 min-h-0 min-w-0', classes.container)}>
		<h4 class={cls('text-center text-xl text-principal-purple mb-3', classes.subtitle)}>Contact</h4>
		<h2
			class={cls(
				'text-2xl text-gray-600 font-lilita mb-8',
				'sm:mb-5 sm:text-3xl md:text-4xl',
				classes.title
			)}
		>
			Did you like my work?
		</h2>

		<p class={cls('text-gray-400 mb-14', classes.description)}>
			Get in touch or follow me on social media!
		</p>

		<div class="flex flex-col gap-4 w-full max-w-96">
			{#each links as link}
				<a
					class={cls(
						'transition-colors capitalize flex items-center justify-start gap-2 rounded-lg p-5 bg-gray-300 w-full text-gray-500 border border-transparent',
						'hover:text-principal-blue hover:border-principal-blue'
					)}
					target="_blank"
					href={link.url}
				>
					<svelte:component this={link.icon} className="w-6 h-6" />{link.name}

					<ArrowUpRight className="ml-auto text-principal-blue" />
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.root {
		height: 100vh;
		max-height: 400px;
	}

	@media (min-width: 768px) {
		.root {
			background-image: url('/images/bg-contacts.jpg');
			min-height: 450px;
			max-height: 750px;
		}
	}
</style>
