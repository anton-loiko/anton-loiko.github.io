type LocalRef = HTMLElement | string | null;

export function useScrollToAnchor() {
	const scrollToAnchor = (anchorRef: LocalRef) => {
		const element = typeof anchorRef === 'string' ? document.querySelector(anchorRef) : anchorRef;

		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	};

	return { scrollToAnchor };
}
