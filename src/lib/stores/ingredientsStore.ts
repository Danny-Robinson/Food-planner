import { writable } from 'svelte/store';
import { getClient } from '$lib/utils/getClient';
import { getIngredients } from '$lib/queries/getIngredients';
import type { GetIngredientsQuery, Ingredients } from '../../generated/graphql';

async function fetchData() {
    const client = getClient();
    const { data } = await client.query<GetIngredientsQuery>(getIngredients, {});
    return data?.ingredients;
}

const createIngredientsStore = () => {
    const store = writable<Ingredients[]>([]);

    fetchData().then((ingredients) => {
        store.set(ingredients || []);
    });

    return store;
}

export const ingredientsStore = createIngredientsStore();
