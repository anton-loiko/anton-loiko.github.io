<script lang="ts">
	import cls from 'classnames';
	import Img from '$components/shared/Img.svelte';
	import HeroTitle from './HeroTitle.svelte';
	import type { HeroTitleOptions } from '$lib/types';
	import HeroScrollButton from './HeroScrollButton.svelte';
	import HeroIcon from './HeroIcon.svelte';
	import { onMount } from 'svelte';

	function setVh() {
		document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
	}

	onMount(() => {
		setVh();
		window.addEventListener('resize', setVh);

		return () => window.removeEventListener('resize', setVh);
	});

	const defaultSubtitle: HeroTitleOptions = {
		tag: 'span',
		children: [
			{ tag: 'span', children: 'Hello World! ' },
			{ tag: 'span', children: 'My name is ' },
			{ tag: 'span', children: 'Anton Loiko', attrs: { class: 'text-principal-red' } },
			{ tag: 'span', children: "and I'm" }
		]
	};

	const divider = { tag: 'span', children: '|', attrs: { class: 'hidden xl:inline' } };
	const iconWrapper = 'flex items-center gap-2';
	const iconSize = cls('w-9 h-9', 'xl:w-12 xl:h-12');
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
			divider,
			{
				tag: 'div',
				icon: HeroIcon,
				children: 'Pragmatic',
				attrs: {
					class: cls(iconWrapper, 'order-3', 'xl:order-none'),
					iconProps: { variant: 'battery', className: cls('text-principal-green', iconSize) }
				}
			},
			divider,
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
		attrs: { class: cls('flex flex-col items-start gap-1', 'xl:flex-row xl:items-center') }
	};

	const defaultDescription =
		'UI development is my forte, and I love the creative process of blending technology and design to build engaging interfaces.';
	const defaultAvatar = '/images/avatar.jpeg';

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
		'root relative flex flex-col bg-no-repeat bg-contain bg-top pt-12',
		'xl:bg-center xl:pt-48 xl:bg-cover',
		classes?.root
	)}
>
	<div class={cls('flex flex-col items-center flex-1 min-h-0 min-w-0', classes.container)}>
		{#if avatar}
			<Img
				className={cls(
					'rounded-full border-2 p-1 border-principal-red !w-24 !h-24 object-cover mb-14',
					'sm:!w-28 sm:!h-28',
					classes?.avatar
				)}
				src={avatar}
				alt="avatar"
			/>
		{/if}

		<HeroTitle
			tag="h4"
			title={subtitle}
			className={cls('text-sm text-gray-500 mb-5', 'md:mb-3 sm:text-xl', classes.subtitle)}
		/>

		<HeroTitle
			tag="h1"
			{title}
			className={cls(
				'text-2xl text-gray-600 font-lilita mb-8',
				'sm:mb-5 sm:text-3xl md:text-4xl',
				classes.title
			)}
		/>

		<p class={cls('text-gray-400 px-4 text-center', classes.description)}>{description}</p>

		<HeroScrollButton className={cls('absolute p1 m0 bottom-5')} />
	</div>
</div>

<style>
	.root {
		min-height: 450px;
		height: calc(calc(var(--vh, 1vh) * 100) - 88px);
		background-image: url('/images/bg-hero.jpg');
		/* max-height: 600px; */
	}

	@media (min-width: 768px) {
		.root {
			max-height: 750px;
		}
	}
</style>
