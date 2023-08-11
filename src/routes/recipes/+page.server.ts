 import { getClient } from '$lib/utils/getClient';
 import type { Load } from '@sveltejs/kit';
import type {   GetRecipesQuery } from '../../generated/graphql';
import { getRecipes } from '$lib/queries/getRecipes';
import { recipesStore } from '$lib/stores/recipesStore';

export const load: Load = async () => {
	const client = getClient();
	const { data } = await client.query<GetRecipesQuery>(getRecipes, {});
	recipesStore.set(data?.recipes || []);
	return {
		props: data
	};
};
