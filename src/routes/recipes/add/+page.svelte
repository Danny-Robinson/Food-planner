<script>
    let recipeName = '';
    let cookingTime = '';
    let servings = 1;
    let instructions = [''];
    let ingredients = [{ name: '', quantity: '', unit: '' }];

    function addInstruction() {
        instructions.push('');
    }

    function addIngredient() {
        ingredients.push({ name: '', quantity: '', unit: '' });
    }

    async function handleSubmit() {
        // Here we'll handle the logic to send the data to the backend
        // Will fill this out soon!
    } 
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input bind:value={recipeName} placeholder="Recipe Name" />
    <input type="number" bind:value={cookingTime} placeholder="Cooking Time (mins)" />
    
    <!-- Loop through instructions and create an input for each one -->
    {#each instructions as instruction, i}
        <input bind:value={instructions[i]} placeholder={`Instruction ${i + 1}`} />
    {/each}
    <button on:click|preventDefault={addInstruction}>Add Instruction</button>

    <!-- Loop through ingredients and create inputs for each one -->
    {#each ingredients as ingredient, i}
        <input bind:value={ingredients[i].name} placeholder="Ingredient Name" />
        <input type="number" bind:value={ingredients[i].quantity} placeholder="Quantity" />
        <input bind:value={ingredients[i].unit} placeholder="Unit (e.g. cup, tsp, g)" />
    {/each}
    <button on:click|preventDefault={addIngredient}>Add Ingredient</button>

    <button type="submit">Save Recipe</button>
</form>
