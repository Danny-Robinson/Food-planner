<script lang="ts">
	import { ingredientsStore } from '$lib/stores/ingredientsStore';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
	import type { Ingredients } from '../../../generated/graphql';
	import { createRecipeWithDetails } from '$lib/utils/createRecipeWithDetails';
	import { getClient } from '$lib/utils/getClient';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import { recipeSchema } from '$lib/validationSchemas/recipeSchema';
	import { getFormBlur } from '$lib/utils/getFormBlur';
	import TextInput from '$lib/components/form/TextInput.svelte';
	import type { NestedErrors } from '$lib/types/formTypes';
	import { getIngredientDisplayName } from '$lib/utils/getIngredientDisplayName';

	const addInstruction = () => {
		$form.instructions = [
			...$form.instructions,
			{ description: '', step_number: $form.instructions.length + 1 }
		];
	};

	const removeInstruction = (index: number) => {
		$form.instructions = $form.instructions.filter((_, idx) => idx !== index);
	};

	const addIngredient = () => {
		$form.ingredients = [
			...$form.ingredients,
			{
				displayName: '',
				ingredient_id: 0,
				quantity: 0
			}
		];
	};

	const removeIngredient = (index: number) => {
		$form.ingredients.splice(index, 1);
		$form.ingredients = [...$form.ingredients];
	};

	const handleSubmit = async () => {
		const recipeData = {
			name: $form.name,
			cookingTime: $form.cookingTime,
			instructions: $form.instructions.map(({ description, step_number }) => ({
				step_number,
				description
			})),
			ingredients: $form.ingredients.map((ingredient) => ({
				ingredient_id: ingredient.ingredient_id,
				quantity: ingredient.quantity
			}))
		};

		createRecipeWithDetails(getClient(), recipeData);
		console.log('Submitted Recipe Data:', recipeData);
	};

	const setIngredientDetailsByName = (ingredient: (typeof $form.ingredients)[0]) => {
		const matchedIngredient = allIngredients.find(
			(ing) => `${ing.name} (${ing.unit})` === ingredient.displayName
		);
		if (matchedIngredient) {
			ingredient.ingredient_id = matchedIngredient.id;
			ingredient.displayName = getIngredientDisplayName(matchedIngredient);
		} else {
			ingredient.ingredient_id = 0;
			ingredient.displayName = '';
		}
	};

	// All available ingredients (from the BE)
	let allIngredients: Ingredients[] = [];
	$: allIngredients = $ingredientsStore;

	export let data: PageData;
	const { form, errors, constraints } = superForm(data.form, {
		validators: recipeSchema,
		dataType: 'json'
	});

	const { blur, handleBlur } = getFormBlur<typeof $form>($form);

	const getInstructionErrorMessage = (errors: NestedErrors, index: number): string | undefined => {
		const instructionErrors = errors.instructions as unknown as { description: string[] }[];
		if (instructionErrors && instructionErrors[index]) {
			const errorArray = instructionErrors[index].description;
			if (Array.isArray(errorArray) && errorArray.length > 0) {
				return errorArray[0];
			}
		}
	};
	$: console.log(allIngredients);
</script>

<form on:submit|preventDefault={handleSubmit}>
	<TextInput
		bind:value={$form.name}
		label="Recipe Name"
		placeholder="Carbonara"
		name="name"
		errors={$errors}
		blur={$blur}
		handleBlur={handleBlur('name')}
		constraints={$constraints['name']}
	/>
	<TextInput
		bind:value={$form.cookingTime}
		label="Cooking Time"
		name="cookingTime"
		type="number"
		errors={$errors}
		blur={$blur}
		handleBlur={handleBlur('cookingTime')}
		constraints={$constraints['cookingTime']}
	/>

	<!-- <input type="number" bind:value={cookingTime} placeholder="Cooking Time (mins)" /> -->

	<!-- Instructions -->
	<ul>
		{#each $form.instructions as instruction, i}
			<li>
				<TextInput
					bind:value={instruction.description}
					label={`Instruction ${i + 1}`}
					name={`instructions_${i}`}
					errors={$errors}
					blur={$blur}
					handleBlur={handleBlur(`instructions_${i}`)}
					constraints={$constraints['instructions']}
				/>
				<button on:click|preventDefault={() => removeInstruction(i)}>Delete</button>
			</li>
			{#if getInstructionErrorMessage($errors, i)}
				<span class="invalid">{getInstructionErrorMessage($errors, i)}</span>
			{/if}
		{/each}
	</ul>

	<button on:click|preventDefault={addInstruction}>Add Instruction</button>

	{#each $form.ingredients as ingredient, i}
		<div class="ingredient-item">
			<input
				bind:value={ingredient.displayName}
				on:input={() => setIngredientDetailsByName(ingredient)}
				on:change={() => setIngredientDetailsByName(ingredient)}
				placeholder="Ingredient Name"
				list="ingredient-list"
			/>
			<input type="number" bind:value={ingredient.quantity} placeholder="Quantity" />
			<button on:click|preventDefault={() => removeIngredient(i)}>Delete</button>
		</div>
	{/each}

	<datalist id="ingredient-list">
		{#each allIngredients as item}
			<option value={getIngredientDisplayName(item)} />
		{/each}
	</datalist>

	<button on:click|preventDefault={addIngredient}>Add Ingredient</button>
	<button type="submit">Save Recipe</button>
</form>

<style>
	.invalid {
		color: red;
	}
</style>
