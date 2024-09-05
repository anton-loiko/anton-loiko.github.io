<script lang="ts">
	import SunIcon from '$components/icons/Sun.svelte';
	import MoonIcon from '$components/icons/Moon.svelte';
	import ComputerIcon from '$components/icons/Computer.svelte';
	import BrightnessIcon from '$components/icons/Brightness.svelte';
	import OutSideClick from '$components/shared/OutSideClick.svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	let isShow = false;

	const handleToggle = () => (isShow = !isShow);
	const handleClose = () => (isShow = false);

	const handleSelect: MouseEventHandler<HTMLButtonElement> = (e) => {
		handleClose();
	};

	const config = [
		{ icon: SunIcon, label: 'Light' },
		{ icon: MoonIcon, label: 'Dark' },
		{ icon: ComputerIcon, label: 'System' }
	];
</script>

<OutSideClick className="inline-flex" onOutsideClick={handleClose}>
	<div class="relative inline-flex text-left">
		<button
			on:click={handleToggle}
			type="button"
			class="inline-flex w-full justify-center gap-x-1.5 border-none shadow-none"
			id="menu-button"
			aria-expanded="true"
			aria-haspopup="true"
		>
			<BrightnessIcon
				className="h-6 w-6 text-primary hover:text-primary-dark active:text-primary "
			/>
		</button>

		<div
			class={`absolute left-0 bottom-8 z-10 mb-2 w-32 origin-bottom-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isShow ? '' : 'hidden'}`}
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
		>
			{#each config as item, index}
				<div
					class={`cursor-pointer text-sm text-gray-700 hover:bg-gray-100 active:bg-gray-200 active:text-gray-900
         ${index === 0 ? 'rounded-t-md' : ''} 
         ${index === config.length - 1 ? 'rounded-b-md' : ''}
        `}
					role="menuitem"
					tabindex="-1"
					id="menu-item-0"
				>
					<button
						type="button"
						class="flex w-full items-center gap-2 px-4 py-2"
						on:click={handleSelect}
						data-value={item.label.toLowerCase()}
					>
						<svelte:component this={item.icon} className="h-5 w-5" />{item.label}
					</button>
				</div>
			{/each}
		</div>
	</div>
</OutSideClick>
