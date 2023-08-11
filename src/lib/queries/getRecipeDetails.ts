import { gql } from '@urql/svelte';

export const getRecipeDetails = gql`
  query GetRecipeDetails($id: Int!) {
    recipes_by_pk(id: $id) {
      id
      name
      cooking_time
      recipes_recipe_ingredients {
        quantity
        unit
        recipe_ingredients_ingredient { 
          id
          name
        }
      }
      recipes_instructions {
        step_number
        description
      }
    }
  }
`;
 