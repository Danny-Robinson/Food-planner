import type { Maybe } from '../../generated/graphql';

type Ingredient = {
	name: string;
	unit?: Maybe<string>;
};
export const getIngredientDisplayName = (ingredient: Ingredient) => {
	if (ingredient.unit) {
		return `${ingredient.name} (${ingredient.unit})`;
	}
	return ingredient.name;
};
