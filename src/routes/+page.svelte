<script lang="ts">
	import { page } from '$app/stores';
	import type { GetAllRecipeDetailsQuery } from '../generated/graphql';
	import { createCheckbox, melt } from '@melt-ui/svelte';

	const {
		elements: { root: checkboxRoot, input: checkboxInput }
	} = createCheckbox();

	type Recipe = GetAllRecipeDetailsQuery['recipes'][0] & { servings: number };
	let allRecipes: Recipe[] =
		$page.data.props.recipes?.map((r: GetAllRecipeDetailsQuery['recipes']) => ({
			...r,
			servings: 4
		})) || []; // Default servings to 4
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

	let checkedStates: boolean[] = [];

	$: checkedStates = shoppingList.map(() => false);

	const handleCheckboxChange = (index: number) => {
		checkedStates[index] = !checkedStates[index];
	};
</script>

<h1>Select Recipes</h1>
<div use:melt={$checkboxRoot}>
	{#each allRecipes as recipe}
		<div>
			<input
				use:melt={$checkboxInput}
				type="checkbox"
				checked={selectedRecipeIds.includes(recipe.id)}
				on:change={() => toggleRecipeSelection(recipe.id)}
			/>
			<label>{recipe.name}</label>
			<div>
				<label>Servings:</label>
				<input type="number" bind:value={recipe.servings} min="1" style="width: 50px;" />
			</div>
		</div>
	{/each}
</div>

<h2>Your Shopping List</h2>
<ul>
	{#each shoppingList as ingredient, index}
		<li class={checkedStates[index] ? 'crossed-out' : ''}>
			<input type="checkbox" on:change={() => handleCheckboxChange(index)} />
			{ingredient}
		</li>
	{/each}
</ul>

<style>
	.crossed-out {
		text-decoration: line-through;
		opacity: 0.6;
	}
</style>
