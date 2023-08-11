import { gql } from '@urql/svelte';

const getRecipes = gql`
	query getRecipes {
		recipes {
            id
            name
            cooking_time
 		}
	}
`;

export { getRecipes };
