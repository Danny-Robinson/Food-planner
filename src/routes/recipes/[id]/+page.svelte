<script lang='ts'>
    import { page } from '$app/stores';
    import type { DetailedRecipe } from '$lib/types/recipeDetailed';
    import { goto } from '$app/navigation';
    import { getClient } from '$lib/utils/getClient';
    import { DELETE_RECIPE_MUTATION } from '$lib/queries/deleteRecipe';
    import { recipesStore } from '$lib/stores/recipesStore';

    let recipe: DetailedRecipe | null;
    const client = getClient();

    // Subscribe to page store to get the recipe data
    $: recipe = $page.data.props.recipe;
    async function deleteRecipe() {
        const confirmed = confirm("Are you sure you want to delete this recipe?");
        if (confirmed && recipe) {
            const result = await client.mutation(DELETE_RECIPE_MUTATION, { id: recipe.id });

            console.log(result);
            if (result && result.data.delete_recipes_by_pk) {
                console.log(`Recipe with ID ${recipe.id} was successfully deleted.`);
                recipesStore.update(existingRecipes => existingRecipes.filter(r => r.id !== recipe?.id));
                goto('/recipes');
            } else {
                console.error("Error deleting the recipe.");
            }
        }
    }

    $: console.log(recipe);
     
</script>
 
{#if recipe && recipe.recipes_recipe_ingredients && recipe.recipes_instructions}
    <h1>{recipe.name}</h1>
    <p>Cooking Time: {recipe.cooking_time} mins</p>
    <h2>Ingredients</h2>
    <ul>
         {#each recipe.recipes_recipe_ingredients as ingredient}
             <li>{ingredient.quantity}{ingredient.recipe_ingredients_ingredient.unit ? `${ingredient.recipe_ingredients_ingredient.unit} of `: ' '}{ingredient.recipe_ingredients_ingredient.name}</li>
        {/each}
    </ul>
    <h2>Instructions</h2>
    <ol>
        {#each recipe.recipes_instructions as instruction}
            <li>{instruction.description}</li>
        {/each}
    </ol>

    <!-- Edit and Delete Buttons -->
    <a href={`/recipe/edit/${recipe.id}`}>Edit</a>
    <button on:click={deleteRecipe}>Delete</button>
{/if}