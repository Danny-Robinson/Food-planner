import { goto } from "$app/navigation";
import type { Client } from "@urql/svelte";

type IngredientInput = {
    ingredient_id: number;
    quantity: number;
 };

type InstructionInput = {
    step_number: number;
    description: string;
};

type RecipeData = {
    name: string;
    cookingTime: number;
    ingredients: IngredientInput[];
    instructions: InstructionInput[];
};

export const createRecipeWithDetails = async (client: Client, recipeData: RecipeData) => {
    // Destructure the input data
    const { name, cookingTime, ingredients, instructions } = recipeData;

    // Create the recipe first
    const createRecipeMutation = `
        mutation CreateRecipe($name: String!, $cookingTime: Int!) {
            insert_recipes_one(object: {name: $name, cooking_time: $cookingTime}) {
                id
            }
        }
    `;

    const response = await client.mutation(createRecipeMutation, {
        name,
        cookingTime,
     });

    const recipeId = response.data.insert_recipes_one.id;

    // Now insert the recipe's associated ingredients
    const createRecipeIngredientsMutation = `
        mutation InsertRecipeIngredients($objects: [recipe_ingredients_insert_input!]!) {
            insert_recipe_ingredients(objects: $objects) {
                affected_rows
            }
        }
    `;

    const recipeIngredientsObjects = ingredients.map(ing => ({
        ingredient_id: ing.ingredient_id,
        recipe_id: recipeId,
        quantity: ing.quantity,
     }));

     console.log(recipeIngredientsObjects)

    await client.mutation(createRecipeIngredientsMutation, {
        objects: recipeIngredientsObjects
    });

    // Now insert the instructions
    const createInstructionsMutation = `
        mutation InsertInstructions($objects: [instructions_insert_input!]!) {
            insert_instructions(objects: $objects) {
                affected_rows
            }
        }
    `;

    const instructionObjects = instructions.map(instr => ({
        ...instr,
        recipe_id: recipeId
    }));

    await client.mutation(createInstructionsMutation, {
        objects: instructionObjects
    });

    goto(`/recipes/${recipeId}`)
    return recipeId; // Return the ID of the created recipe
}
