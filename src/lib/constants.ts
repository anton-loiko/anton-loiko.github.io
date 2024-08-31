import type { SocialLinks, SocialLinksName } from './types';
import GitHubIcon from '$components/icons/GitHub.svelte';
import LinkedinIcon from '$components/icons/Linkedin.svelte';

export const SOCIAL_LINKS_MAP = new Map<SocialLinksName, SocialLinks>([
	[
		'github',
		{
			name: 'github',
			url: 'https://github.com/anton-loiko',
			icon: GitHubIcon
		}
	],
	[
		'linkedin',
		{
			name: 'linkedin',
			url: 'https://www.linkedin.com/in/antonloiko',
			icon: LinkedinIcon
		}
	],
	[
		'email',
		{
			name: 'email',
			url: 'mailto:anton.loiko.engineer@gmail.com',
			icon: LinkedinIcon
		}
	]
]);
