<script lang='ts'>
    import { ingredientsStore } from '$lib/stores/ingredientsStore';
    import { get } from 'svelte/store';
    import { onMount } from 'svelte';
    import type {  Ingredients } from '../../../generated/graphql';
	import { createRecipeWithDetails } from '$lib/utils/createRecipeWithDetails';
	import { getClient } from '$lib/utils/getClient';
	import { superForm } from 'sveltekit-superforms/client';
    import type { PageData } from "./$types";
	import { recipeSchema } from '$lib/validationSchemas/recipeSchema';
	import { getFormBlur } from '$lib/utils/getFormBlur';

    let recipeName = '';
    let cookingTime = '';
    let instructions = [''];

    type UserIngredient = {
        displayName?: string,
        ingredient_id: number,
        quantity: number
    };    // Ingredients added to the recipe
    let recipeIngredients: UserIngredient[] = [{
        displayName: '',
        ingredient_id: 0,
        quantity: 0
    }];

    // All available ingredients (from the BE)
    let allIngredients: Ingredients[] = [];

    const addInstruction = () => {
        instructions.push('');
        instructions = [...instructions];
    }

    const addIngredient = () => {
        recipeIngredients.push({ ingredient_id: 0, quantity: 0 });
        recipeIngredients = [...recipeIngredients];
    }

    
    const handleSubmit = async () => {
        const recipeData = {
            name: recipeName,
            cookingTime: parseInt(cookingTime, 10),
            instructions: instructions.map(
                (instruction, index) => ({ step_number: index + 1, description: instruction })),
            ingredients: recipeIngredients.map(ri => ({
                ingredient_id: ri.ingredient_id,
                quantity: ri.quantity
            }))
        };

        createRecipeWithDetails(getClient(), recipeData);
        console.log("Submitted Recipe Data:", recipeData);
    };



    const removeIngredient = (index: number) => {
        recipeIngredients.splice(index, 1);
        recipeIngredients = [...recipeIngredients];
    }

    const removeInstruction = (index: number) => {
        instructions.splice(index, 1);
        instructions = [...instructions];
    }

    const setIngredientDetailsByName = (ingredient: UserIngredient) => {
        const matchedIngredient = allIngredients.find(ing => `${ing.name} (${ing.unit})` === ingredient.displayName);
        if (matchedIngredient) {
            ingredient.ingredient_id = matchedIngredient.id;
            ingredient.displayName = `${matchedIngredient.name} (${matchedIngredient.unit})`;
        } else {
            ingredient.ingredient_id = 0;
            ingredient.displayName = '';
        }
    };


    onMount(() => {
        allIngredients = get(ingredientsStore);
    });
    $: allIngredients = $ingredientsStore;

    export let data: PageData;
    const { form, errors, constraints } = superForm(data.form, {
        validators: recipeSchema,
    });

 const { blur, handleBlur } = getFormBlur<typeof $form>($form); 


 </script>

<form on:submit|preventDefault={handleSubmit}>
    <!-- <TextInput 
    bind:value={$form.name} 
    label="Name" 
    name="name" 
    errors={$errors} 
    blur={$blur} 
    handleBlur={handleBlur('name')} 
    constraints={$constraints} />
     -->
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
        <input bind:value={ingredient.displayName} 
            on:input={() => setIngredientDetailsByName(ingredient)} 
            on:change={() => setIngredientDetailsByName(ingredient)} 
            placeholder="Ingredient Name" list="ingredient-list"
        />
        <input type="number" 
            bind:value={ingredient.quantity} 
            placeholder="Quantity" 
        />
         <button on:click|preventDefault={() => removeIngredient(i)}>Delete</button>
    </div>
    {/each}

    <datalist id="ingredient-list">
        {#each allIngredients as item}
            <option value="{item.name} ({item.unit})"></option>
        {/each}
    </datalist>

    <button on:click|preventDefault={addIngredient}>Add Ingredient</button>
    <button type="submit">Save Recipe</button>
</form>

