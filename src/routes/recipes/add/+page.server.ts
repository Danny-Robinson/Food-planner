import { ingredientsStore } from '$lib/stores/ingredientsStore';
import { getClient } from '$lib/utils/getClient';
import type { Load } from '@sveltejs/kit';
import type { GetIngredientsQuery } from '../../../generated/graphql';
import { GET_INGREDIENTS_QUERY } from '$lib/queries';
import { recipeSchema } from '$lib/validationSchemas/recipeSchema';
import { defaultValues, superValidate } from 'sveltekit-superforms/server';
import { getIngredientDisplayName } from '$lib/utils/getIngredientDisplayName';

export const load: Load = async () => {
	const client = getClient();
	const { data } = await client.query<GetIngredientsQuery>(GET_INGREDIENTS_QUERY, {});
	ingredientsStore.set(data?.ingredients || []);

	const form = await superValidate(
		{
			...defaultValues(recipeSchema),
			instructions: [
				{
					step_number: 1,
					description: ''
				}
			],
			ingredients: [
				{
					displayName: '',
					ingredient_id: 0,
					quantity: 0
				}
			]
		},
		recipeSchema
	);

	return {
		props: data,
		form
	};
};
