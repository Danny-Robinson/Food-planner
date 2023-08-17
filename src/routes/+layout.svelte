<script>
	import { goto } from '$app/navigation';
	import '../app.css';
</script>

<header>
	<nav>
		<a href="/" on:click|preventDefault={() => goto('/')}>Home</a>
		<a href="/recipes" on:click|preventDefault={() => goto('/recipes')}>Recipes</a>
		<a href="/recipes/add" on:click|preventDefault={() => goto('/recipes/add')}>Add Recipe</a>
		<a href="/ingredients" on:click|preventDefault={() => goto('/ingredients')}>Ingredients</a>
	</nav>
</header>

<main>
	<slot />
</main>

<style>
	header {
		background-color: #333;
		padding: 10px 0;
		margin-bottom: 8px;
	}

	nav a {
		color: white;
		margin: 0 15px;
		text-decoration: none;
	}

	nav a:hover {
		text-decoration: underline;
	}
</style>
