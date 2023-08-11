import { writable } from 'svelte/store';
import { getClient } from '$lib/utils/getClient';
 import type { GetRecipesQuery, Recipes } from '../../generated/graphql';
import { getRecipes } from '$lib/queries/getRecipes';

async function fetchData() {
    const client = getClient();
    const { data } = await client.query<GetRecipesQuery>(getRecipes, {});
    return data?.recipes;
}

const createRecipesStore = () => {
    const store = writable<Recipes[]>([]);

    fetchData().then((recipe) => {
        store.set(recipe || []);
    });

    return store;
}

export const recipesStore = createRecipesStore();
