<script>
    import { ingredientsStore } from '$lib/stores/ingredientsStore';
    import { get } from 'svelte/store';

    let recipeName = '';
    let cookingTime = '';
    let servings = 1;
    let instructions = [''];
    let ingredients = [{ name: '', quantity: '', unit: '' }];

    function addInstruction() {
        instructions.push('');
        instructions = instructions; // Trigger reactivity
    }

    function addIngredient() {
        ingredients.push({ name: '', quantity: '', unit: '' });
        ingredients = ingredients; // Trigger reactivity
    }

    async function handleSubmit() {
        const recipeData = {
        name: recipeName,
        cookingTime,
        servings, // Currently hardcoded to 1
        instructions,
        ingredients
    };

    console.log("Submitted Recipe Data:", recipeData);
    } 

    function removeIngredient(index) {
        ingredients.splice(index, 1);
        ingredients = ingredients; // Trigger reactivity
    }   

    function removeInstruction(index) {
        instructions.splice(index, 1);
        instructions = instructions; // Trigger reactivity
    }

    let allIngredients = []; // This will store the fetched ingredients list

    // On mount, get ingredients from the store
    import { onMount } from 'svelte';
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


    {#each ingredients as ingredient, i}
    <div class="ingredient-item">
        <input bind:value={ingredient.name} placeholder="Ingredient Name" list="ingredient-list" />
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
