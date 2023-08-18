<script lang="ts">
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

<a href="/recipes/add">add recipe</a>
{#if recipes && recipes.length}
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		{#each recipes as recipe}
			<div class="recipe-card">
				<a href={'/recipes/' + recipe.id} class="text-xl font-bold">{recipe.name}</a>
				<p>Cooking time: {recipe.cooking_time} mins</p>
			</div>
		{/each}
	</div>
{/if}

<style>
	/* Additional styles to enhance the look using Melt UI */
	.recipe-card {
		padding: 1rem;
		border: 1px solid #e2e8f0;
		border-radius: 0.5rem;
		transition: transform 0.3s;
	}
	.recipe-card:hover {
		transform: scale(1.02);
	}
</style>
