import { gql } from '@urql/svelte';

export const deleteIngredient = gql`
	mutation DeleteIngredient($id: Int!) {
		delete_ingredients(where: {id: {_eq: $id}}) {
			affected_rows
		}
	}
`;



 