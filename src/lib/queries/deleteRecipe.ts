import { gql } from "@urql/svelte";

export const DELETE_RECIPE_MUTATION = gql`
  mutation DeleteRecipe($id: Int!) {
    delete_recipes_by_pk(id: $id) {
      id
    }
  }
`;
