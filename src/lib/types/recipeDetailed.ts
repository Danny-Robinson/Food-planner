type Ingredient = {
	id: number;
	name: string;
	unit: string;
};

type RecipeIngredient = {
	quantity: number;
	unit: string;
	recipe_ingredients_ingredient: Ingredient;
};

type Instruction = {
	step_number: number;
	description: string;
};

export type DetailedRecipe = {
	id: number;
	name: string;
	cooking_time: number;
	recipes_recipe_ingredients: RecipeIngredient[];
	recipes_instructions: Instruction[];
};

type IngredientInput = {
	ingredient_id: number;
	quantity: number;
};

type InstructionInput = {
	step_number: number;
	description: string;
};

export type RecipeData = {
	name: string;
	cookingTime: number;
	ingredients: IngredientInput[];
	instructions: InstructionInput[];
};
