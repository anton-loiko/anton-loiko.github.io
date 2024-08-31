import { writable } from 'svelte/store';

export function useScrollToAnchor() {
	const anchor = writable<HTMLElement | null>(null);

	function getElement(): HTMLElement | null {
		let value: HTMLElement | null = null;

		const unsubscribe = anchor.subscribe((v) => (value = v));
		unsubscribe();
		return value;
	}

	const scrollToAnchor =
		(anchorRef: HTMLElement | string | null = null) =>
		() => {
			anchor.set(typeof anchorRef === 'string' ? document.querySelector(anchorRef) : anchorRef);

			const element = getElement();

			if (element) {
				element.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		};

	return { anchor, scrollToAnchor };
}
