import { CategoriesEnum, type CardProps, type Categories, type WorkbenchMetadata } from './types';
import { base } from '$app/paths';
import qs from 'querystring';

type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}

export const getCategories = (): Categories[] =>
	Object.values(CategoriesEnum) as unknown as Categories[];

export const createPath = (path: string): string =>
	`${base}${path.charAt(0) === '/' ? path : `/${path}`}`;

export const workbenchToCards = (data: WorkbenchMetadata[]): CardProps[] => {
	return data.map<CardProps>((item) => ({
		description: item.description,
		img: item.img,
		slug: item.slug,
		title: item.title,
		tags: item.tags || []
	}));
};

export const getFilterFromURLBy = (rawUrl: string, key: string) => {
	try {
		const url = rawUrl.split('?')[1] || '';
		const parsed = qs.parse(url);

		if (!parsed[key]) {
			throw new Error(`${key}: not found`);
		}

		return Array.isArray(parsed[key]) ? parsed[key][0] : parsed[key] || '';
	} catch (error) {
		console.error(error);

		return '';
	}
};
