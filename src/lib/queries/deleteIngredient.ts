import { gql } from '@urql/svelte';

export const DELETE_INGREDIENT_MUTATION = gql`
	mutation DeleteIngredient($id: Int!) {
		delete_ingredients(where: {id: {_eq: $id}}) {
			affected_rows
		}
	}
`;



 