<script lang="ts">
	import { page } from '$app/stores';
	import { addIngredient } from '$lib/queries/addIngredient';
	import { deleteIngredient } from '$lib/queries/deleteIngredient';
	import { getIngredients } from '$lib/queries/getIngredients';
	import { ingredientsStore } from '$lib/stores/ingredientsStore';
	import { getClient } from '$lib/utils/getClient';

	let ingredients: { name: string; id: string }[] = [];
	$: ingredients = $ingredientsStore;

	ingredientsStore.subscribe((value) => {
		ingredients = value;
	});

	const client = getClient();
	const result = $page.data.props;

	let ingredientName = '';

	const fetchIngredients = async () => {
		const client = getClient();
		const { data } = await client.query(getIngredients, {});
		ingredientsStore.set(data.ingredients);
	};

	const add = async () => {
		const result = await client.mutation(addIngredient, { name: ingredientName });

		if (result.error) {
			console.error('Failed to add ingredient:', result.error);
		} else {
			fetchIngredients();
		}
	};

	const deleteIng = async (id: any) => {
		const result = await client.mutation(deleteIngredient, { id });

		if (result.error) {
			console.error('Failed to delete ingredient:', result.error);
		} else {
			fetchIngredients();
		}
	};
</script>

{#if !result}
	<p>Loading...</p>
{:else if result.error}
	<p>Error: {result.error.message}</p>
{:else}
	<!-- Ingredient Addition Form -->
	<form on:submit|preventDefault={add}>
		<label for="ingredientName">Ingredient Name:</label>
		<input type="text" id="ingredientName" bind:value={ingredientName} required />

		<button type="submit">Add Ingredient</button>
	</form>

	<!-- Ingredient List -->
	<ul>
		{#each ingredients as ingredient}
			<li>
				{ingredient.name}
				<button on:click={() => deleteIng(ingredient.id)}>Delete</button>
			</li>
		{/each}
	</ul>
{/if}
