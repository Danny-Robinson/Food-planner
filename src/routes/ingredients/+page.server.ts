import { ingredientsStore } from '$lib/stores/ingredientsStore';
import { getClient } from '$lib/utils/getClient';
import { getIngredients } from '$lib/queries/getIngredients';
import type { Load } from '@sveltejs/kit';
import type { GetIngredientsQuery } from '../../generated/graphql';

export const load: Load = async () => {
	const client = getClient();
	const { data } = await client.query<GetIngredientsQuery>(getIngredients, {});
	ingredientsStore.set(data?.ingredients || []);
	return {
		props: data
	};
};
