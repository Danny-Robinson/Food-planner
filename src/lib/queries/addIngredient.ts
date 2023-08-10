import { gql } from '@urql/svelte';

export const addIngredient = gql`
	mutation AddIngredient($name: String!) {
		insert_ingredients_one(object: { name: $name }) {
			id
			name
		}
	}
`;
