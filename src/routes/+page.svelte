<script>
	import { page } from '$app/stores';

	const result = $page.data.props;
</script>

{#if !result}
	<p>Loading...</p>
{:else if result.error}
	<p>Error: {result.error.message}</p>
{:else}
	<ul>
		{#each result.ingredients as ingredient}
			<li>{ingredient.name}</li>
		{/each}
	</ul>
{/if}
