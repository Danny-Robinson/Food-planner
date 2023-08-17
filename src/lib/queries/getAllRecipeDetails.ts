import { gql } from '@urql/svelte';

export const GET_ALL_RECIPE_DETAILS_QUERY = gql`
	query GetAllRecipeDetails {
		recipes {
			id
			name
			cooking_time
			recipes_recipe_ingredients {
				quantity
				recipe_ingredients_ingredient {
					id
					name
					unit
				}
			}
			recipes_instructions {
				step_number
				description
			}
		}
	}
`;
