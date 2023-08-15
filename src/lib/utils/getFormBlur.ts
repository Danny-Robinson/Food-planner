import { writable } from 'svelte/store';

export const getFormBlur = <T extends Record<string, any>>(form: T) => {
    let initialState = Object.keys(form).reduce((accumulator, key) => ({
        ...accumulator, 
        [key]: false
    }), {} as Record<keyof T, boolean>);

    const blur = writable(initialState);

    const handleBlur = (key: keyof T) => () => {
        blur.update(state => ({ ...state, [key]: true }));
    }

    return { blur, handleBlur };
}