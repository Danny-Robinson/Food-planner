<script lang="ts">
	import { superForm, defaultValues } from 'sveltekit-superforms/client';
	import type { OperationResult, AnyVariables } from '@urql/svelte';

	import { page } from '$app/stores';

	import { ingredientsStore } from '$lib/stores/ingredientsStore';
	import { getClient } from '$lib/utils/getClient';

	import {
		ADD_INGREDIENT_MUTATION,
		DELETE_INGREDIENT_MUTATION,
		GET_INGREDIENTS_QUERY
	} from '$lib/queries/index';
	import type {
		GetIngredientsQuery,
		AddIngredientMutation,
		DeleteIngredientMutation,
		Ingredients
	} from '../../generated/graphql';
	import { ingredientSchema } from '$lib/validationSchemas/ingredientSchema';
	import { getFormBlur } from '$lib/utils/getFormBlur';
	import { EDIT_INGREDIENT_MUTATION } from '$lib/queries/editIngredient';

	let ingredients: Ingredients[] = [];
	$: ingredients = $ingredientsStore;

	const client = getClient();
	const result = $page.data.props;

	type ValidationErrors = Record<string, string>;

	const { form, errors, constraints } = superForm(result.form, {
		validators: ingredientSchema,
		validationMethod: 'auto'
	});

	const { blur, handleBlur } = getFormBlur<typeof $form>($form);

	const fetchIngredients = async () => {
		const { data } = await client.query<GetIngredientsQuery>(
			GET_INGREDIENTS_QUERY,
			{},
			{
				requestPolicy: 'network-only' //note: works around unwanted caching
			}
		);

		ingredientsStore.set(data?.ingredients || []);
	};

	let backendErrors: ValidationErrors = {};

	const handleBackendError = (
		error: OperationResult<AddIngredientMutation, AnyVariables>['error']
	) => {
		if (error?.message.includes('ingredients_name_key')) {
			backendErrors.name = 'Ingredient with this name already exists!';
		} else {
			console.error('Failed to add ingredient:', error);
		}
	};

	const addOrUpdate = async () => {
		backendErrors = {};

		if (isEditing && editingId) {
			const result = await client.mutation(EDIT_INGREDIENT_MUTATION, {
				id: editingId,
				...$form
			});

			if (!result.error) {
				fetchIngredients();
				isEditing = false;
				editingId = null;
				$form = defaultValues(ingredientSchema);
			} else {
				handleBackendError(result.error);
			}
		} else {
			const result = await client.mutation(ADD_INGREDIENT_MUTATION, $form);

			if (!result.error) {
				fetchIngredients();
			} else {
				handleBackendError(result.error);
			}
		}
	};

	const deleteIngredientById = async (id: any) => {
		const confirmed = confirm('Are you sure you want to delete this recipe?');

		if (!confirmed) {
			return;
		}
		const result = await client.mutation<DeleteIngredientMutation>(DELETE_INGREDIENT_MUTATION, {
			id
		});

		if (result.error) {
			console.error('Failed to delete ingredient:', result.error);
		} else {
			fetchIngredients();
		}
	};

	let isEditing = false;
	let editingId: number | null = null;

	const startEditing = (ingredient: Ingredients) => {
		$form.name = ingredient.name;
		$form.unit = ingredient.unit;
		editingId = ingredient.id;
		isEditing = true;
	};
	const cancelEditing = () => {
		isEditing = false;
		editingId = null;
		$form = defaultValues(ingredientSchema);
	};
</script>

{#if !result}
	<p>Loading...</p>
{:else if result.error}
	<p>Error: {result.error.message}</p>
{:else}
	<form on:submit|preventDefault={addOrUpdate}>
		<div style="display: flex;">
			<label for="name">Ingredient Name:</label>

			<input
				type="text"
				id="name"
				bind:value={$form.name}
				on:blur={handleBlur('name')}
				{...$constraints.name}
				class:error={($errors.name || backendErrors.name) && $blur?.name}
			/>

			{#if $errors.name && $blur?.name}
				<p class="error">{$errors.name}</p>
			{:else if backendErrors.name && $blur?.name}
				<p class="error">{backendErrors.name}</p>
			{/if}
		</div>
		<div style="display: flex;">
			<label for="unit">Unit:</label>
			<input
				type="text"
				id="unit"
				bind:value={$form.unit}
				placeholder="e.g., g, ml, pcs"
				on:blur={handleBlur('unit')}
				{...$constraints.unit}
				class:error={$errors.unit || backendErrors.unit}
			/>

			{#if $errors.unit}
				<p class="error">{$errors.unit}</p>
			{:else if backendErrors.unit}
				<p class="error">{backendErrors.unit}</p>
			{/if}
		</div>
		<button type="submit">{isEditing ? 'Commit edit' : 'Add Ingredient'}</button>
	</form>

	<ul>
		{#each ingredients as ingredient}
			<li>
				{ingredient.name}
				{#if ingredient.unit}
					({ingredient.unit})
				{/if}
				<button on:click={() => startEditing(ingredient)}>Edit</button>
				{#if isEditing}
					<button type="button" on:click={cancelEditing}>Cancel</button>
				{/if}
				<button on:click={() => deleteIngredientById(ingredient.id)}>Delete</button>
			</li>
		{/each}
	</ul>
{/if}

<style>
	input.error {
		border: 1px solid red;
		background-color: #ffe6e6;
	}

	.error {
		color: red;
		font-size: 12px;
		margin-top: 4px;
	}
</style>
