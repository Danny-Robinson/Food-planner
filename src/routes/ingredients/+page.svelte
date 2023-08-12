<script lang="ts">
	import { page } from '$app/stores';
	import { addIngredient } from '$lib/queries/addIngredient';
	import { deleteIngredient } from '$lib/queries/deleteIngredient';
	import { getIngredients } from '$lib/queries/getIngredients';
	import { ingredientsStore } from '$lib/stores/ingredientsStore';
	import { getClient } from '$lib/utils/getClient';
	import type { GetIngredientsQuery, AddIngredientMutation, DeleteIngredientMutation, Ingredients } from '../../generated/graphql';
 
	let ingredients: Ingredients[] = [];
	$: ingredients = $ingredientsStore;

	ingredientsStore.subscribe((value) => {
		ingredients = value;
	});

	const client = getClient();
	const result = $page.data.props;

	let ingredientName = '';
	let ingredientUnit = '';
	const fetchIngredients = async () => {
		const client = getClient();
		const { data } = await client.query<GetIngredientsQuery>(getIngredients, {});
		ingredientsStore.set(data?.ingredients || []);
	};

	const add = async () => {
		const result = await client.mutation<AddIngredientMutation>(addIngredient, { name: ingredientName, unit: ingredientUnit });
 		if (result.error) {
			console.error('Failed to add ingredient:', result.error);
		} else {
			fetchIngredients();
		}
	};

	const deleteIng = async (id: any) => {
		const result = await client.mutation<DeleteIngredientMutation>(deleteIngredient, { id });

		if (result.error) {
			console.error('Failed to delete ingredient:', result.error);
		} else {
			fetchIngredients();
		}
	};
</script>
<!-- add unit to ingredient -->
{#if !result}
	<p>Loading...</p>
{:else if result.error}
	<p>Error: {result.error.message}</p>
{:else}
	<!-- Ingredient Addition Form -->
	<form on:submit|preventDefault={add}>
		<label for="ingredientName">Ingredient Name:</label>
		<input type="text" id="ingredientName" bind:value={ingredientName} required />
	
		<label for="ingredientUnit">Unit:</label>
		<input type="text" id="ingredientUnit" bind:value={ingredientUnit} placeholder="e.g., g, ml, pcs" />
	
		<button type="submit">Add Ingredient</button>
	</form>

	<!-- Ingredient List -->
	<ul>
		{#each ingredients as ingredient}
			<li>
				{ingredient.name}
				{#if ingredient.unit}
					({ingredient.unit})
				{/if}
				<button on:click={() => deleteIng(ingredient.id)}>Delete</button>
			</li>
		{/each}
	</ul>
{/if}
