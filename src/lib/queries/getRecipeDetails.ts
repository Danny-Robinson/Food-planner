import { gql } from '@urql/svelte';

export const GET_RECIPE_DETAILS_QUERY = gql`
  query GetRecipeDetails($id: Int!) {
    recipes_by_pk(id: $id) {
      id
      name
      cooking_time
      recipes_recipe_ingredients {
        quantity
        recipe_ingredients_ingredient { 
          id
          name
          unit
        }
      }
      recipes_instructions {
        step_number
        description
      }
    }
  }
`;
 