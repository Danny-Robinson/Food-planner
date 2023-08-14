import { gql } from '@urql/svelte';

export const GET_INGREDIENTS_QUERY = gql`
	query getIngredients {
		ingredients {
			id
			name
			unit
		}
	}
`;
 
