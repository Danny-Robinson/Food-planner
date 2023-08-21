<script lang="ts">
	import { createCombobox, melt, type ComboboxFilterFunction } from '@melt-ui/svelte';
	import { ingredientsStore } from '$lib/stores/ingredientsStore';
	import type { Ingredients } from '../../../generated/graphql';

	export let ingredient: {
		displayName: string;
		ingredient_id: number;
		quantity: number;
	};
	export let index: number;
	export let setIngredientDetailsByObject: (index: number, ingredient: Ingredients) => void;

	let allIngredients: Ingredients[] = $ingredientsStore;
	console.log('Initial ingredients:', allIngredients);

	const getIngredientLabel = (ingredient: Ingredients) =>
		`${ingredient.name}${ingredient.unit ? ` (${ingredient.unit})` : ''}`;

	const filterFunction: ComboboxFilterFunction<Ingredients> = ({ itemValue, input }) => {
		const normalize = (str: string) => {
			return str.normalize().toLowerCase();
		};
		const normalizedInput = normalize(input);
		const nameMatch = normalize(itemValue.name).includes(normalizedInput);
		const unitMatch = itemValue.unit ? normalize(itemValue.unit).includes(normalizedInput) : false;

		console.log(`Filtering for input: ${normalizedInput}`);
		console.log(`Name Match for ${itemValue.name}: ${nameMatch}`);
		console.log(`Unit Match for ${itemValue.unit}: ${unitMatch}`);

		return normalizedInput === '' || nameMatch || unitMatch;
	};

	import { writable } from 'svelte/store';

	const selectedIngredient = writable<Ingredients | undefined>({
		id: ingredient.ingredient_id,
		name: ingredient.displayName
	});

	const handleValueChange = ({
		next,
		curr
	}: {
		curr: Ingredients | undefined;
		next: Ingredients | undefined;
	}): Ingredients | undefined => {
		console.log('Next value:', next);
		if (next) {
			ingredient.ingredient_id = next.id;
			ingredient.displayName = getIngredientLabel(next);
			selectedIngredient.set(next);
			return next;
		}
		return curr;
	};

	const {
		elements: { menu, input, item, label },
		states: { open, isEmpty, inputValue, value },
		helpers: { isSelected }
	} = createCombobox({
		filterFunction,
		forceVisible: true,
		onValueChange: handleValueChange,
		value: selectedIngredient
	});

	let ingredientName: string = ingredient.displayName;

	$: if ($selectedIngredient) {
		console.log('Selected ingredient:', $selectedIngredient);
		ingredientName = $selectedIngredient.name;
	}

	$: if ($selectedIngredient) {
		ingredient.ingredient_id = $selectedIngredient.id;
		ingredient.displayName = getIngredientLabel($selectedIngredient);
	}
</script>

<div class="flex flex-col gap-1">
	<label use:melt={$label} for={`ingredient-${index}`}>Ingredient:</label>
	<div class="relative">
		<input
			use:melt={$input}
			bind:value={ingredientName}
			id={`ingredient-${index}`}
			class="input-style"
			placeholder="Ingredient Name"
		/>
	</div>

	{#if $open}
		<ul class="z-10 flex max-h-[300px] flex-col overflow-hidden rounded-lg" use:melt={$menu}>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div
				class="flex max-h-full flex-col gap-0 overflow-y-auto bg-white px-2 py-2 text-black"
				tabindex="0"
			>
				{#each allIngredients as ing, index (index)}
					<li
						use:melt={$item({
							value: ing,
							label: getIngredientLabel(ing)
						})}
						class="relative cursor-pointer scroll-my-2 rounded-md py-2 pl-4 pr-4
        data-[highlighted]:bg-magnum-200 data-[highlighted]:text-magnum-900
          data-[disabled]:opacity-50"
					>
						{#if $isSelected(ing)}
							<div class="check">sel</div>
						{/if}
						<div>
							<span class="font-medium">{getIngredientLabel(ing)}</span>
						</div>
					</li>
				{/each}
				{#if $isEmpty}
					<li
						class="relative cursor-pointer rounded-md py-1 pl-8 pr-4
        data-[highlighted]:bg-magnum-100 data-[highlighted]:text-magnum-700"
					>
						No results found
					</li>
				{/if}
			</div>
		</ul>
	{/if}
</div>

<style>
	.input-style {
		/* Your input styles here */
	}
	.dropdown-style {
		/* Your dropdown styles here */
	}
	.list-item-style {
		/* Your list item styles here */
	}
</style>
