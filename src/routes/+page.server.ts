import { getClient } from '$lib/utils/getClient';
import type { Load } from '@sveltejs/kit';
import type { GetAllRecipeDetailsQuery } from '../generated/graphql';
import { GET_ALL_RECIPE_DETAILS_QUERY } from '$lib/queries/getAllRecipeDetails';

export const load: Load = async () => {
	const client = getClient();
	const { data } = await client.query<GetAllRecipeDetailsQuery>(GET_ALL_RECIPE_DETAILS_QUERY, {});

	console.log(data);
	return {
		props: { recipes: data?.recipes }
	};
};
