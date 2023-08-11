<script lang='ts'>
    import { page } from '$app/stores';
    import type { DetailedRecipe } from '$lib/types/recipeDetailed';

    let recipe: DetailedRecipe | null;
    
    // Subscribe to page store to get the recipe data
    $: recipe = $page.data.props.recipe;
     function deleteRecipe() {
        const confirmed = confirm("Are you sure you want to delete this recipe?");
        if (confirmed) {
            // Execute your delete mutation here
            // After deletion, you might want to redirect the user back to the recipes list
        }
    }
    $: console.log(recipe?.recipes_instructions);
     
</script>
 
{#if recipe && recipe.recipes_recipe_ingredients && recipe.recipes_instructions}
    <h1>{recipe.name}</h1>
    <p>Cooking Time: {recipe.cooking_time} mins</p>
    <h2>Ingredients</h2>
    <ul>
         {#each recipe.recipes_recipe_ingredients as ingredient}
             <li>{ingredient.quantity} {ingredient.unit ? `${ingredient.unit} of `: ''}{ingredient.recipe_ingredients_ingredient.name}</li>
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