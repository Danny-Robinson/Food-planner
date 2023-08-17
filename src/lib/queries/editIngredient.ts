import { gql } from '@urql/svelte';

export const EDIT_INGREDIENT_MUTATION = gql`
	mutation EditIngredient($id: Int!, $name: String!, $unit: String) {
		update_ingredients_by_pk(pk_columns: { id: $id }, _set: { name: $name, unit: $unit }) {
			id
		}
	}
`;
