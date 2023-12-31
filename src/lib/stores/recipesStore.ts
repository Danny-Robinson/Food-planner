import { writable } from 'svelte/store';
import { getClient } from '$lib/utils/getClient';
 import type { GetRecipesQuery, Recipes } from '../../generated/graphql';
import { GET_RECIPES_QUERY } from '$lib/queries/getRecipes';

async function fetchData() {
    const client = getClient();
    const { data } = await client.query<GetRecipesQuery>(GET_RECIPES_QUERY, {});
    return data?.recipes;
}

type RecipesStore = {
    id: Recipes['id'];
    name: Recipes['name']
    cooking_time: Recipes['cooking_time']
}[]

const createRecipesStore = () => {
    const store = writable<RecipesStore>([]);

    fetchData().then((recipe) => {
        store.set(recipe || []);
    });

    return store;
}

export const recipesStore = createRecipesStore();
