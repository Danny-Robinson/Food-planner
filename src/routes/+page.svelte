<script lang="ts">
	import { page } from '$app/stores';
	import type { GetAllRecipeDetailsQuery } from '../generated/graphql';

	type Recipe = GetAllRecipeDetailsQuery['recipes'][0] & { servings: number }; // Added servings
	let allRecipes: Recipe[] = $page.data.props.recipes?.map((r) => ({ ...r, servings: 4 })) || []; // Default servings to 4
	let selectedRecipeIds: number[] = [];

	function toggleRecipeSelection(recipeId: number) {
		if (selectedRecipeIds.includes(recipeId)) {
			selectedRecipeIds = selectedRecipeIds.filter((id) => id !== recipeId);
		} else {
			selectedRecipeIds = [...selectedRecipeIds, recipeId];
		}
	}

	let shoppingList: string[] = [];

	$: {
		const selectedRecipes = allRecipes.filter((recipe) => selectedRecipeIds.includes(recipe.id));
		const ingredients = selectedRecipes.flatMap((recipe) =>
			recipe.recipes_recipe_ingredients.map((ing) => ({
				...ing,
				quantity: ing.quantity * recipe.servings // Adjust for servings
			}))
		);

		const aggregatedIngredients = new Map<string, { quantity: number; unit: string | null }>();

		ingredients.forEach((ing) => {
			const key = `${ing.recipe_ingredients_ingredient.name}-${ing.recipe_ingredients_ingredient.unit}`;
			const existing = aggregatedIngredients.get(key);
			if (existing) {
				existing.quantity += ing.quantity;
			} else {
				aggregatedIngredients.set(key, {
					quantity: ing.quantity,
					unit: ing.recipe_ingredients_ingredient.unit || ''
				});
			}
		});

		shoppingList = Array.from(aggregatedIngredients.entries()).map(([key, ingredient]) => {
			const [name, unit] = key.split('-');
			return `${ingredient.quantity} ${unit} of ${name}`;
		});
	}
</script>

<h1>Select Recipes</h1>
<ul>
	{#each allRecipes as recipe}
		<li>
			<label>
				<input
					type="checkbox"
					checked={selectedRecipeIds.includes(recipe.id)}
					on:change={() => toggleRecipeSelection(recipe.id)}
				/>
				{recipe.name}
			</label>
			<label>
				Servings:
				<input type="number" bind:value={recipe.servings} min="1" style="width: 50px;" />
			</label>
		</li>
	{/each}
</ul>

<h2>Your Shopping List</h2>
<ul>
	{#each shoppingList as ingredient}
		<li>{ingredient}</li>
	{/each}
</ul>

<style>
	h1,
	h2 {
		font-family: Arial, sans-serif;
		margin-bottom: 20px;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		font-family: Arial, sans-serif;
		font-size: 16px;
		margin-bottom: 10px;
		display: flex;
		align-items: center;
	}

	input[type='checkbox'] {
		margin-right: 10px;
	}

	input[type='number'] {
		margin-left: 10px;
		padding: 5px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	label {
		margin-right: 20px;
	}
</style>
