import { goto } from '$app/navigation';
import type { RecipeData } from '$lib/types/recipeDetailed';
import type { Client } from '@urql/svelte';

export const editRecipeWithDetails = async (
	client: Client,
	recipeId: number,
	recipeData: RecipeData
) => {
	const { name, cookingTime, ingredients, instructions } = recipeData;

	// 1. Update the base recipe data
	const updateRecipeMutation = `
        mutation UpdateRecipe($id: Int!, $name: String!, $cookingTime: Int!) {
            update_recipes_by_pk(pk_columns: { id: $id }, _set: {name: $name, cooking_time: $cookingTime}) {
                id
            }
        }
    `;

	const response = await client.mutation(updateRecipeMutation, {
		id: recipeId,
		name,
		cookingTime
	});

	console.log('Response after updating recipe:', response);

	// 2. Update the ingredients associated with the recipe
	// This example assumes you want to completely replace the ingredients for simplicity. Another strategy might be to determine which ones need to be updated or deleted.
	const deleteExistingIngredientsMutation = `
        mutation DeleteExistingIngredients($recipeId: Int!) {
            delete_recipe_ingredients(where: {recipe_id: {_eq: $recipeId}}) {
                affected_rows
            }
        }
    `;

	await client.mutation(deleteExistingIngredientsMutation, {
		recipeId
	});

	const insertRecipeIngredientsMutation = `
        mutation InsertRecipeIngredients($objects: [recipe_ingredients_insert_input!]!) {
            insert_recipe_ingredients(objects: $objects) {
                affected_rows
            }
        }
    `;

	const recipeIngredientsObjects = ingredients.map((ing) => ({
		ingredient_id: ing.ingredient_id,
		recipe_id: recipeId,
		quantity: ing.quantity
	}));

	const ingredientsResponse = await client.mutation(insertRecipeIngredientsMutation, {
		objects: recipeIngredientsObjects
	});

	console.log('Response after inserting ingredients:', ingredientsResponse);

	// 3. Update the instructions associated with the recipe
	// Similarly, this example assumes you're replacing the instructions.
	const deleteExistingInstructionsMutation = `
        mutation DeleteExistingInstructions($recipeId: Int!) {
            delete_instructions(where: {recipe_id: {_eq: $recipeId}}) {
                affected_rows
            }
        }
    `;

	await client.mutation(deleteExistingInstructionsMutation, {
		recipeId
	});

	const insertInstructionsMutation = `
        mutation InsertInstructions($objects: [instructions_insert_input!]!) {
            insert_instructions(objects: $objects) {
                affected_rows
            }
        }
    `;

	const instructionObjects = instructions.map((instr) => ({
		...instr,
		recipe_id: recipeId
	}));

	const instructionsResponse = await client.mutation(insertInstructionsMutation, {
		objects: instructionObjects
	});

	console.log('Response after inserting instructions:', instructionsResponse);

	goto(`/recipes/${recipeId}`);
	return recipeId;
};
