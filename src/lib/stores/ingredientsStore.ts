import { writable } from 'svelte/store';
import { getClient } from '$lib/utils/getClient';
import { getIngredients } from '$lib/queries/getIngredients';

async function fetchData() {
    const client = getClient();
    const { data } = await client.query(getIngredients, {});
    return data.ingredients;
}

const createIngredientsStore = () => {
    const store = writable([]);

    fetchData().then(ingredients => {
        store.set(ingredients);
    });

    return store;
}

export const ingredientsStore = createIngredientsStore();
