<script lang="ts">
	import { page } from '$app/stores';
	import Img from '$components/shared/Img.svelte';
	import type { FooterLinksConfig } from '$lib/types';

	export let item: FooterLinksConfig;
</script>

{#if !item.hide && !(item.hideOnHome && $page.url.pathname === '/')}
	<li class="inline-flex flex-shrink-0">
		<svelte:element
			this={item.url ? 'a' : 'div'}
			target="_blank"
			href={item.url}
			class={'cursor-pointe text-primary inline-flex'}
		>
			{#if item.icon}
				<svelte:component this={item.icon} />
			{:else if item.img}
				<Img src={item.img} alt={item.alt} />
			{/if}
		</svelte:element>
	</li>
{/if}
