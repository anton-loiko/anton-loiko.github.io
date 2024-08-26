import { CategoriesEnum, type Categories } from './types';

type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}

export const getCategories = (): Categories[] =>
	Object.values(CategoriesEnum) as unknown as Categories[];
