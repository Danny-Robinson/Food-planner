<script lang="ts">
	import { superForm, defaultValues } from 'sveltekit-superforms/client';
	import type { OperationResult, AnyVariables } from '@urql/svelte';

	import { page } from '$app/stores';

	import { ingredientsStore } from '$lib/stores/ingredientsStore';
	import { getClient } from '$lib/utils/getClient';

	import { ADD_INGREDIENT_MUTATION, DELETE_INGREDIENT_MUTATION, GET_INGREDIENTS_QUERY } from '$lib/queries/index';
	import type { GetIngredientsQuery, AddIngredientMutation, DeleteIngredientMutation, Ingredients } from '../../generated/graphql';
	import { ingredientSchema } from '$lib/validationSchemas/ingredientSchema';

	let ingredients: Ingredients[] = [];
	$: ingredients = $ingredientsStore;

	const client = getClient();
	const result = $page.data.props;

	type ValidationErrors = Record<string, string[]>;
	type GenericSuperFormFields = {valid: boolean;
		posted: boolean;
		errors: ValidationErrors;
		data: {};
		constraints: {}
	};
		
	let formData: {
		name: string;
		unit?: string;
		nameError?: string;
		unitError?: string;
		hasInteracted: boolean;
		hasSubmitted: boolean;  
	} & GenericSuperFormFields = {
 		valid: false,
		posted: false,
		errors: {},
		data: {},
		constraints: {},
		hasInteracted: false,
		hasSubmitted: false,
		...defaultValues(ingredientSchema)
	};
 
	const { form, constraints } = superForm(formData);
 	const validateForm = (formD: typeof formData) => {
		formD.nameError = undefined;
		formD.unitError = undefined;

		if (formD.hasInteracted && validationResult && !validationResult.success) {
			backendErrors = {};
			validationResult.error.errors.forEach(error => {
				if (error.path[0] === 'name') {
					formD.nameError = error.message;
				}
				if (error.path[0] === 'unit') {
					formD.unitError = error.message;
				}
			});
		}
	}

	const fetchIngredients = async () => {
		const { data } = await client.query<GetIngredientsQuery>(GET_INGREDIENTS_QUERY, {}, {
			requestPolicy: 'network-only' //note: works around unwanted caching
		});
 			
		ingredientsStore.set(data?.ingredients || []);
	};

	let backendErrors: ValidationErrors = {};   
 	$: validationResult = ingredientSchema.safeParse($form);
	$: validateForm(formData);

	const handleBackendError = (error: OperationResult<AddIngredientMutation, AnyVariables>['error']) => {
		if (error?.message.includes("ingredients_name_key")) {
			backendErrors.name = ["Ingredient with this name already exists!"];
		} else {
			console.error('Failed to add ingredient:', error);
		}
	}

	const add = async () => {
		formData.hasSubmitted = true;

		if (!validationResult.success) {
			formData.hasSubmitted = false;
			return;   
		}

		const result = await client.mutation<AddIngredientMutation>(ADD_INGREDIENT_MUTATION, $form);
		
		backendErrors = {};

		if (result.error) {
			handleBackendError(result.error);
		}
  
		fetchIngredients();
		formData.hasSubmitted = false;
	};


  
	const deleteIngredientById = async (id: any) => {
		const result = await client.mutation<DeleteIngredientMutation>(DELETE_INGREDIENT_MUTATION, { id });

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

	<form on:submit|preventDefault={add}>
		<div style="display: flex;">
			<label for="ingredientName">Ingredient Name:</label>
		
			<input 
				type="text" 
				id="ingredientName" 
				bind:value={$form.name} 
				class:error={formData.nameError || backendErrors.name}
				on:input={() => {
					formData.hasInteracted = true;
					formData.hasSubmitted = false;
				}}
			/>
	 
			{#if formData.nameError}
				<p class="error">{formData.nameError}</p>
			{:else if backendErrors.name}
				<p class="error">{backendErrors.name}</p>
			{/if}
		</div>
		<div style="display: flex;">
			<label for="ingredientUnit">Unit:</label>
			<input 
				type="text" 
				id="ingredientUnit" 
				bind:value={$form.unit} 
				placeholder="e.g., g, ml, pcs" 
				class:error={formData.unitError || backendErrors.unit}
				on:input={() => {
					formData.hasInteracted = true;
				}}
			/>
	 
			{#if formData.unitError}
				<p class="error">{formData.unitError}</p>
			{:else if backendErrors.unit}
				<p class="error">{backendErrors.unit}</p>
			{/if}
			
		</div>
		<button type="submit">Add Ingredient</button>
	</form>


	<ul>
		{#each ingredients as ingredient}
			<li>
				{ingredient.name}
				{#if ingredient.unit}
					({ingredient.unit})
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