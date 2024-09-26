export enum CategoriesEnum {
	'UPDATES' = 'UPDATES',
	'DEV_LOGS' = 'DEV_LOGS'
}
export enum WorkbenchTagsEnum {
	'INDEPENDENT' = 'INDEPENDENT',
	'COMMERCIAL' = 'COMMERCIAL',
	'WEB' = 'WEB',
	'2D_GAME' = '2D_GAME',
	'3D_GAME' = '3D_GAME'
}

export type Categories = keyof typeof CategoriesEnum;

export type WorkbenchTags = keyof typeof WorkbenchTagsEnum;

export type TagSize = 'xs' | 'sm';
export type TagVariant = 'default' | 'light';

type Image = [string, string];

export type CardProps = {
	title: string;
	description: string;
	slug: string;

	img?: Image;
	tags?: WorkbenchTags[];
};

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

export type WorkbenchMetadata = {
	title: string;
	slug: string;
	description: string;
	date: string;
	tags: WorkbenchTags[];
	published: boolean;

	img?: Image;
};

export type Workbench = {
	content: any;
	meta: WorkbenchMetadata;
};

export type NavigationConfig = {
	name: string;
	pathname: string;

	selfHide?: boolean;
	hide?: boolean;
	hideOnHome?: boolean;
	showOnParentPage?: boolean;
	children?: Omit<NavigationConfig, 'children'>[];
	onClick?: (e: MouseEvent) => void;
};

export type SocialLinksName = 'github' | 'linkedin' | 'email';

export type SocialLinks = {
	name: SocialLinksName;
	url: string | null;
	icon?: any;
};

export type FooterLinksConfig = Pick<SocialLinks, 'icon' | 'url'> & {
	name: string;

	className?: string;
	img?: string;
	alt?: string;
	hide?: boolean;
	hideOnHome?: boolean;
};

export type HeroIconVariant = 'gamepad' | 'terminal' | 'battery';

export type HeroTitleOptions = {
	tag: string;
	attrs?: {
		class?: string;
		iconProps?: {
			variant: HeroIconVariant;
			className?: string;
		};
	};
	children?: string | HeroTitleOptions[];
	icon?: any;
};

export type PostItemVariant = 'invert' | 'default';
