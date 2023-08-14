 
 import { ingredientsStore } from '$lib/stores/ingredientsStore';
import { getClient } from '$lib/utils/getClient';
import type { Load } from '@sveltejs/kit';
import type { GetIngredientsQuery } from '../../../generated/graphql';
import { GET_INGREDIENTS_QUERY } from '$lib/queries';

export const load: Load = async () => {
	const client = getClient();
	const { data } = await client.query<GetIngredientsQuery>(GET_INGREDIENTS_QUERY, {});
	ingredientsStore.set(data?.ingredients || []);
	return {
		props: data
	};
};
