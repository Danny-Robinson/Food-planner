<script>
	import { goto } from '$app/navigation';
	import '../app.css';
</script>

<div class="page-container">
	<header>
		<nav>
			<a href="/" on:click|preventDefault={() => goto('/')}>Home</a>
			<a href="/recipes" on:click|preventDefault={() => goto('/recipes')}>Recipes</a>
			<a href="/recipes/add" on:click|preventDefault={() => goto('/recipes/add')}>Add Recipe</a>
			<a href="/ingredients" on:click|preventDefault={() => goto('/ingredients')}>Ingredients</a>
		</nav>
	</header>

	<main class="content">
		<!-- adding padding around my page content -->
		<div class="container">
			<slot />
		</div>
	</main>

	<footer style="position: fixed; bottom: 0; width: 100%;">
		<div class="footer-content">
			<p>Food Planner PoC</p>
		</div>
	</footer>
</div>

<style>
	body,
	html {
		height: 100%;
	}

	body {
		position: relative;
		margin: 0;
	}

	.page-container {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.content {
		flex: 1 0 auto;
	}

	footer {
		flex-shrink: 0;
	}

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

	.container {
		padding: 0 15px 50px 15px;
	}

	.footer-content {
		background-color: #333;
		color: white;
		padding: 10px 0;
		text-align: center;
	}
</style>
