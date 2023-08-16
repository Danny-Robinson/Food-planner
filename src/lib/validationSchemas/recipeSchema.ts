import { z } from 'zod';

const IngredientInput = z.object({
	ingredient_id: z.number().positive('Ingredient ID should be positive'),
	quantity: z.number().positive('Quantity should be positive'),
	displayName: z.string().optional()
});

const InstructionInput = z.object({
	step_number: z.number().positive('Step number should be positive'),
	description: z.string().nonempty('Instruction description is required')
});

export const recipeSchema = z.object({
	name: z.string().nonempty('Recipe name is required'),
	cookingTime: z.number().positive('Cooking time should be positive'),
	ingredients: z.array(IngredientInput),
	instructions: z.array(InstructionInput)
});
