import { z } from 'zod';

export const recipeSchema = z.object({
  recipeName: z.string().nonempty('Recipe name is required'),
  cookingTime: z.number().positive('Cooking time should be positive'),
  instructions: z.array(z.string()),
  recipeIngredients: z.array(
    z.object({
      displayName: z.string().nonempty('Ingredient name is required'),
      ingredient_id: z.number(),
      quantity: z.number().positive('Quantity should be positive')
    })
  )
});
