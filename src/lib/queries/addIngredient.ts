import { gql } from '@urql/svelte';

export const ADD_INGREDIENT_MUTATION = gql`
	mutation AddIngredient($name: String!, $unit: String) {
		insert_ingredients_one(object: { name: $name, unit: $unit }) {
			id
			name
			unit
		}
	}
`;
