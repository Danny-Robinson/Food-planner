import { writable } from 'svelte/store';

export const getFormBlur = <T extends Record<string, any>>(form: T) => {
	const initialState = Object.keys(form).reduce(
		(accumulator, key) => ({
			...accumulator,
			[key]: false
		}),
		{} as Record<keyof T, boolean>
	);

	const blur = writable(initialState);

	const handleBlur = (key: keyof T | string) => () => {
		blur.update((state) => {
			// If the key contains an underscore, use the first part of the key to update the blur state
			if (typeof key === 'string' && key.includes('_')) {
				const mainKey = key.split('_')[0];
				return { ...state, [mainKey]: true };
			}
			return { ...state, [key]: true };
		});
	};

	return { blur, handleBlur };
};
