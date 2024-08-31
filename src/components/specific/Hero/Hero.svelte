<script lang="ts">
	import cls from 'classnames';
	import Img from '$components/shared/Img.svelte';
	import HeroTitle from './HeroTitle.svelte';
	import type { HeroTitleOptions } from '$lib/types';
	import HeroScrollButton from './HeroScrollButton.svelte';
	import HeroIcon from './HeroIcon.svelte';

	const defaultSubtitle: HeroTitleOptions = {
		tag: 'span',
		children: [
			{ tag: 'span', children: 'Hello World! ' },
			{ tag: 'span', children: 'My name is ' },
			{ tag: 'span', children: 'Anton Loiko', attrs: { class: 'text-principal-red' } },
			{ tag: 'span', children: "and I'm" }
		]
	};

	const iconWrapper = 'flex items-center gap-2';
	const iconSize = 'w-12 h-12';
	const defaultTitle: HeroTitleOptions = {
		tag: 'span',
		children: [
			{
				tag: 'div',
				icon: HeroIcon,
				children: 'Senior Fullstack Engineer',
				attrs: {
					class: iconWrapper,
					iconProps: { variant: 'terminal', className: cls('text-principal-purple', iconSize) }
				}
			},
			{ tag: 'span', children: '|' },
			{
				tag: 'div',
				icon: HeroIcon,
				children: 'Pragmatic',
				attrs: {
					class: iconWrapper,
					iconProps: { variant: 'battery', className: cls('text-principal-green', iconSize) }
				}
			},

			{ tag: 'span', children: '|' },
			{
				tag: 'div',
				icon: HeroIcon,
				children: 'Game Engine Enthusiast',
				attrs: {
					class: iconWrapper,
					iconProps: { variant: 'gamepad', className: cls('text-principal-blue', iconSize) }
				}
			}
		],
		attrs: { class: 'flex items-center gap-1' }
	};

	const defaultDescription =
		'UI development is my forte, and I love the creative process of blending technology and design to build engaging interfaces.';
	const defaultAvatar = '/images/avatar.jpeg';

	export let anchorRef: HTMLDivElement | null;
	export let subtitle: HeroTitleOptions = defaultSubtitle;
	export let title: HeroTitleOptions = defaultTitle;
	export let description: string = defaultDescription;
	export let avatar: string | null = defaultAvatar;
	export let classes: Partial<
		Record<'root' | 'container' | 'subtitle' | 'title' | 'description' | 'avatar', string>
	> = {};
</script>

<div
	class={cls(
		'root relative flex flex-col bg-no-repeat bg-contain bg-center pt-48',
		'xl:bg-cover',
		classes?.root
	)}
>
	<div class={cls('flex flex-col items-center flex-1 min-h-0 min-w-0', classes.container)}>
		{#if avatar}
			<Img
				className={cls(
					'rounded-full border-2 p-1 border-principal-red w-16 h-16 object-cover mb-14',
					'sm:w-28 sm:h-28',
					classes?.avatar
				)}
				src={avatar}
				alt="avatar"
			/>
		{/if}

		<HeroTitle
			tag="h4"
			title={subtitle}
			className={cls('text-xl text-gray-500 mb-3', classes.subtitle)}
		/>

		<HeroTitle
			tag="h1"
			{title}
			className={cls('text-4xl text-gray-600 font-lilita mb-5', classes.title)}
		/>

		<p class={cls('text-gray-400', classes.description)}>{description}</p>

		<HeroScrollButton className="absolute bottom-5 p1 m0" {anchorRef} />
	</div>
</div>

<style>
	.root {
		min-height: 450px;
		height: calc(100vh - 88px);
		max-height: 750px;
		background-image: url('/images/bg-hero.jpg');
	}
</style>
