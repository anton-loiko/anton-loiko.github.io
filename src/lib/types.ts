export enum CategoriesEnum {
	'updates' = 'my_updates'
}

export type Categories = keyof typeof CategoriesEnum;

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

export type NavigationConfig = {
	name: string;
	pathname: string;

	selfHide?: boolean;
	hide?: boolean;
	hideOnHome?: boolean;
	showOnParentPage?: boolean;
	children?: Omit<NavigationConfig, 'children'>[];
};

export type FooterLinksConfig = {
	name: string;
	url: string | null;

	icon?: any;
	className?: string;
	img?: string;
	alt?: string;
	hide?: boolean;
	hideOnHome?: boolean;
};
