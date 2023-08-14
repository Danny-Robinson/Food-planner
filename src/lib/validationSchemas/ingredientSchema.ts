import { z } from 'zod';

export type IngredientInput = { name: string, unit?: string };
export const ingredientSchema = z.object({
  name: z.string().nonempty("Name cannot be empty"),
  unit: z.string().optional()
});
