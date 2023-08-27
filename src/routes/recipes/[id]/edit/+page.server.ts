import { GET_RECIPE_DETAILS_QUERY } from '$lib/queries/getRecipeDetails';
import { getClient } from '$lib/utils/getClient';
import { getIngredientDisplayName } from '$lib/utils/getIngredientDisplayName';
import { recipeSchema } from '$lib/validationSchemas/recipeSchema';
import type { Load } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

const transformRecipeDataForForm = (recipe) => {
	return {
		name: recipe.name,
		cookingTime: recipe.cooking_time,
		ingredients: recipe.recipes_recipe_ingredients.map((ing) => ({
			ingredient_id: ing.recipe_ingredients_ingredient.id,
			quantity: ing.quantity,
			displayName: getIngredientDisplayName({
				name: ing.recipe_ingredients_ingredient.name,
				unit: ing.recipe_ingredients_ingredient.unit
			})
		})),
		instructions: recipe.recipes_instructions.map((instr) => ({
			step_number: instr.step_number,
			description: instr.description
		}))
	};
};

/** @type {import('./$types').PageLoad} */
export const load: Load = async ({ params }) => {
	const client = getClient();
	const id = params.id;

	const response = await client.query(GET_RECIPE_DETAILS_QUERY, {
		id: id
	});

	const { data } = response;
	const recipe = transformRecipeDataForForm(data.recipes_by_pk);
	const form = await superValidate(recipe, recipeSchema);

	if (data && data.recipes_by_pk && form) {
		return {
			props: {
				recipe: data.recipes_by_pk
			},
			form
		};
	} else {
		return {
			status: 404,
			props: {
				message: 'Recipe not found'
			}
		};
	}
};
