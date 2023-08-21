<script lang="ts">
	import { ingredientsStore } from '$lib/stores/ingredientsStore';
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
	import IngredientCombobox from '$lib/components/form/IngredientCombobox.svelte';

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
		// Update the $form.ingredients list with the selected ingredients details
		$form.ingredients.forEach((ingredient, index) => {
			if (selectedIngredientObjects[index]) {
				ingredient.ingredient_id = selectedIngredientObjects[index].id;
				ingredient.displayName = getIngredientLabel(selectedIngredientObjects[index]);
			}
		});

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

	let selectedIngredientObjects: Record<number, Ingredients> = {}; // Using an object map here
	let highlightedIngredient: Ingredients | null = null;
	let selectedIngredientValue: string = ''; // This should be the display value of the ingredient, i.e., name

	function getIngredientLabel(ingredient: Ingredients) {
		return `${ingredient.name}${ingredient.unit ? ` (${ingredient.unit})` : ''}`;
	}

	$: extendedIngredients = allIngredients.map((ingredient) => ({
		...ingredient,
		displayName: getIngredientLabel(ingredient)
	}));

	function setIngredientDetailsByObject(selectedIngredient: Ingredients, index: number) {
		const ingredient = $form.ingredients[index];
		ingredient.ingredient_id = selectedIngredient.id;
		ingredient.displayName = getIngredientLabel(selectedIngredient);
	}
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

	{#each $form.ingredients as ingredient, index}
		<div class="ingredient-item">
			<IngredientCombobox {ingredient} {index} {setIngredientDetailsByObject} />
			<input type="float" bind:value={ingredient.quantity} placeholder="Quantity" />
			<button on:click|preventDefault={() => removeIngredient(index)}>Delete</button>
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
