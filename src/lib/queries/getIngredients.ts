import { gql } from '@urql/svelte';

const getIngredients = gql`
	query getIngredients {
		ingredients {
			id
			name
		}
	}
`;

export { getIngredients };
