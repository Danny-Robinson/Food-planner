import { gql } from '@urql/svelte';

export const GET_RECIPES_QUERY = gql`
	query getRecipes {
		recipes {
            id
            name
            cooking_time
 		}
	}
`; 
