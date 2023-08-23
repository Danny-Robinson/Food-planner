<script lang="ts">
	import { createCombobox, melt, type ComboboxFilterFunction } from '@melt-ui/svelte';
	import { ingredientsStore } from '$lib/stores/ingredientsStore';
	import type { Ingredients } from '../../../generated/graphql';
	import { fly } from 'svelte/transition';

	export let ingredient: {
		displayName?: string | undefined;
		ingredient_id: number;
		quantity: number;
	};
	export let index: number;
	export let setIngredientDetailsByObject: (selectedIngredient: Ingredients, index: number) => void;
	let allIngredients: Ingredients[] = $ingredientsStore;
	$: allIngredients = $ingredientsStore;

	const getIngredientLabel = (ingredient: Ingredients) =>
		`${ingredient.name}${ingredient.unit ? ` (${ingredient.unit})` : ''}`;

	const filterFunction: ComboboxFilterFunction<Ingredients> = ({ itemValue, input }) => {
		const normalize = (str: string) => str.normalize().toLowerCase();
		const normalizedInput = normalize(input);

		return !!(
			normalizedInput === '' ||
			normalize(itemValue.name).includes(normalizedInput) ||
			(itemValue.unit && normalize(itemValue.unit).includes(normalizedInput))
		);
	};

	const handleValueChange = ({
		next,
		curr
	}: {
		next: Ingredients | undefined;
		curr: Ingredients | undefined;
	}) => {
		if (next) {
			setIngredientDetailsByObject(next, index);
			return next;
		}
		return curr;
	};
	const {
		elements: { menu, input, item, label },
		states: { open, isEmpty }
	} = createCombobox({
		filterFunction,
		onValueChange: handleValueChange
	});
</script>

<div class="flex flex-col gap-1">
	<label {...$label} use:label for={`ingredient-${index}`}>Ingredient:</label>
	<div class="relative">
		<input
			{...$input}
			use:input
			id={`ingredient-${index}`}
			class="input-style"
			placeholder="Ingredient Name"
		/>
	</div>

	{#if $open}
		<ul
			class="z-10 flex max-h-[300px] flex-col overflow-hidden rounded-lg"
			{...$menu}
			use:menu
			transition:fly={{ duration: 150, y: -5 }}
			style={$open ? 'display: block;' : ''}
		>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div
				class="flex max-h-full flex-col gap-0 overflow-y-auto bg-white px-2 py-2 text-black"
				tabindex="0"
			>
				{#each allIngredients as ing, idx (idx)}
					<li
						{...$item({ value: ing, label: getIngredientLabel(ing) })}
						use:item
						class="relative cursor-pointer scroll-my-2 rounded-md py-2 pl-4 pr-4
						data-[highlighted]:bg-magnum-200 data-[highlighted]:text-magnum-900"
					>
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
