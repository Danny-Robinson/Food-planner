import { writable } from 'svelte/store';
import { getClient } from '$lib/utils/getClient';
 import type { GetIngredientsQuery, Ingredients } from '../../generated/graphql';
import { GET_INGREDIENTS_QUERY } from '$lib/queries';

async function fetchData() {
    const client = getClient();
    const { data } = await client.query<GetIngredientsQuery>(GET_INGREDIENTS_QUERY, {});
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
