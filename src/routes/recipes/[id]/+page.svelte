<script lang="ts">
	import { page } from '$app/stores';
	import type { DetailedRecipe } from '$lib/types/recipeDetailed';
	import { goto } from '$app/navigation';
	import { getClient } from '$lib/utils/getClient';
	import { DELETE_RECIPE_MUTATION } from '$lib/queries/deleteRecipe';
	import { recipesStore } from '$lib/stores/recipesStore';

	let recipe: DetailedRecipe | null;
	const client = getClient();

	$: servings = 4;
	$: recipe = $page.data.props.recipe;
	async function deleteRecipe() {
		const confirmed = confirm('Are you sure you want to delete this recipe?');
		if (confirmed && recipe) {
			const result = await client.mutation(DELETE_RECIPE_MUTATION, { id: recipe.id });

			if (result && result.data.delete_recipes_by_pk) {
				console.log(`Recipe with ID ${recipe.id} was successfully deleted.`);
				recipesStore.update((existingRecipes) =>
					existingRecipes.filter((r) => r.id !== recipe?.id)
				);
				goto('/recipes');
			} else {
				console.error('Error deleting the recipe.');
			}
		}
	}

	function updateServings(event: Event) {
		const target = event.target as HTMLSelectElement;
		servings = +target?.value;
	}

	function formatIngredientForServings(ingredient: string, servings: number): string {
		const regex = /{(\d+\.?\d*)([a-zA-Z]*)}/g;
		return ingredient.replace(regex, (_, amount, unit) => {
			const newAmount = parseFloat(amount) * servings;
			return `${roundToTwoDecimal(newAmount)}${unit}`; // Updated here
		});
	}

	function roundToTwoDecimal(value: number): string {
		return parseFloat(value.toFixed(2)).toString();
	}

	$: formattedInstructions = [] as string[];
	$: checkedSteps = [] as boolean[];

	$: if (recipe?.recipes_instructions) {
		formattedInstructions = recipe.recipes_instructions.map((instruction) =>
			formatIngredientForServings(instruction.description, servings)
		);

		if (checkedSteps?.length !== formattedInstructions?.length) {
			checkedSteps = new Array(formattedInstructions.length).fill(false);
		}
	}
</script>

{#if recipe && recipe.recipes_recipe_ingredients && recipe.recipes_instructions}
	<h1>{recipe.name}</h1>
	<p>Cooking Time: {recipe.cooking_time} mins</p>
	<label for="servings">Servings: </label>
	<select id="servings" on:change={updateServings}>
		{#each [1, 2, 3, 4, 5, 6] as serving}
			<option value={serving} selected={serving === servings}>{serving}</option>
		{/each}
	</select>
	<h2>Ingredients</h2>
	<ul>
		{#each recipe.recipes_recipe_ingredients as ingredient}
			<li>
				{roundToTwoDecimal(ingredient.quantity * servings)}{ingredient.recipe_ingredients_ingredient
					.unit
					? `${ingredient.recipe_ingredients_ingredient.unit} of `
					: ' '}{ingredient.recipe_ingredients_ingredient.name}
			</li>
		{/each}
	</ul>
	<h2>Instructions</h2>
	<ol>
		{#each formattedInstructions as instruction, index}
			<li>
				<input type="checkbox" bind:checked={checkedSteps[index]} />
				<span style="text-decoration: {checkedSteps[index] ? 'line-through' : 'none'};"
					>{@html instruction}</span
				>
			</li>
		{/each}
	</ol>

	<a href={`/recipes/${recipe.id}/edit`}>Edit</a>
	<button on:click={deleteRecipe}>Delete</button>
{/if}
