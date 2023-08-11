
<script lang='ts'>
 	import { recipesStore } from '$lib/stores/recipesStore';
    type Recipe = {
        id: number;
        name: string;
        cooking_time: number; 
      };

    let recipes: Recipe[] = [];
	$: recipes = $recipesStore;

	recipesStore.subscribe((value) => {
		recipes = value;
	});
</script>


 
{#if recipes && recipes.length}
  {#each recipes as recipe}
    <div>
      <a href={"/recipes/" + recipe.id}>{recipe.name}</a>
      <p>Cooking time: {recipe.cooking_time} mins</p>
    </div>
  {/each}
{/if}
