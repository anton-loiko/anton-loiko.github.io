<script>
	import { base } from '$app/paths';
	import FileDownloadIcon from '$components/icons/FileDownload.svelte';
	export let isIconOnly = false;
	export let className = '';

	const baseClassName = `cursor-pointer hover:text-primary-dark active:text-primary ${className} `;
	const buttonClassName =
		'border rounded-md py-2 px-4 inline-flex items-center gap-1 text-sm uppercase font-bold font-roboto';
</script>

<a
	href="{base}/resume.pdf"
	download="Anton_Loiko_Resume.pdf"
	class={isIconOnly ? baseClassName : baseClassName + buttonClassName}
	title="Download my resume"
>
	<FileDownloadIcon className="w-5 h-5" />
	{#if !isIconOnly}
		Download resume
	{/if}
</a>
