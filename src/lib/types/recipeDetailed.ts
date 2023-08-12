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
  