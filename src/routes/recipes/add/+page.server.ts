 
import { getIngredients } from '$lib/queries/getIngredients';
import { ingredientsStore } from '$lib/stores/ingredientsStore';
import { getClient } from '$lib/utils/getClient';
import type { Load } from '@sveltejs/kit';

export const load: Load = async () => {
	const client = getClient();
	const { data } = await client.query(getIngredients, {});
	ingredientsStore.set(data.ingredients);
	return {
		props: data
	};
};
