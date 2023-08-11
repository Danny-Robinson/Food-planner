<script lang='ts'>
    import { ingredientsStore } from '$lib/stores/ingredientsStore';
    import { get } from 'svelte/store';
    import { onMount } from 'svelte';
    import type { Recipe_Ingredients, Ingredients } from '../../../generated/graphql';
	import { createRecipeWithDetails } from '$lib/utils/createRecipeWithDetails';
	import { getClient } from '$lib/utils/getClient';

    let recipeName = '';
    let cookingTime = '';
    let instructions = [''];

    // Ingredients added to the recipe
    let recipeIngredients: (Partial<Recipe_Ingredients> & {name: string})[] = [{ id: 0, name: '', quantity: 0, unit: '' }];

    // All available ingredients (from the BE)
    let allIngredients: Ingredients[] = [];

    const addInstruction = () => {
        instructions.push('');
        instructions = [...instructions];
    }

    const addIngredient = () => {
        recipeIngredients.push({ id: 0, quantity: 0, unit: '', name: '' });
        recipeIngredients = [...recipeIngredients];
    }

    
    const handleSubmit = async () => {
        const recipeData = {
            name: recipeName,
            cookingTime: parseInt(cookingTime, 10),
             instructions: instructions.map(
                (instruction, index) => ({ step_number: index + 1, description: instruction })),
            ingredients: recipeIngredients
        };

        createRecipeWithDetails(getClient(), recipeData)
        console.log("Submitted Recipe Data:", recipeData);
    }

    const removeIngredient = (index: number) => {
        recipeIngredients.splice(index, 1);
        recipeIngredients = [...recipeIngredients];
    }

    const removeInstruction = (index: number) => {
        instructions.splice(index, 1);
        instructions = [...instructions];
    }

    const getIngredientIdByName = (name: string): number => {
        const ingredient = allIngredients.find(ing => ing.name === name);
        return ingredient ? ingredient.id : 0;
    }

    onMount(() => {
        allIngredients = get(ingredientsStore);
    });
    $: allIngredients = $ingredientsStore;
 </script>

<form on:submit|preventDefault={handleSubmit}>
    <input bind:value={recipeName} placeholder="Recipe Name" />
    <input type="number" bind:value={cookingTime} placeholder="Cooking Time (mins)" />

    <!-- Instructions -->
    <ul>
        {#each instructions as instruction, i}
            {#if i !== instructions.length - 1}
                <li>
                    {instruction}
                    <button on:click|preventDefault={() => removeInstruction(i)}>Delete</button>
                </li>
            {:else}
                <input bind:value={instructions[i]} placeholder={`Instruction ${i + 1}`} />
            {/if}
        {/each}
    </ul>
    <button on:click|preventDefault={addInstruction}>Add Instruction</button>

    {#each recipeIngredients as ingredient, i}
    <div class="ingredient-item">
        <input bind:value={ingredient.name} on:input={() => { ingredient.id = getIngredientIdByName(ingredient.name); }} placeholder="Ingredient Name" list="ingredient-list" />
        <input type="number" bind:value={ingredient.quantity} placeholder="Quantity" />
        <input bind:value={ingredient.unit} placeholder="Unit (e.g. cup, tsp, g)" />
        <button on:click|preventDefault={() => removeIngredient(i)}>Delete</button>
    </div>
    {/each}

    <datalist id="ingredient-list">
        {#each allIngredients as item}
            <option value={item.name}></option>
        {/each}
    </datalist>

    <button on:click|preventDefault={addIngredient}>Add Ingredient</button>
    <button type="submit">Save Recipe</button>
</form>

