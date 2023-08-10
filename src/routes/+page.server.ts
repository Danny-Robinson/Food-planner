import { getClient } from '$lib/utils/getClient';
import { getIngredients } from '$lib/queries/getIngredients';
import type { Load } from '@sveltejs/kit';

export const load: Load = async () => {
	const client = getClient();

	const { data } = await client.query(getIngredients, {});

	return {
		props: data
	};
};
