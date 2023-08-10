import { getClient } from '$lib/utils/getClient';
import { addIngredient as addIngredientMutation } from '$lib/queries/addIngredient';
 
export const post = async ({ body }: any) => {
	const client = getClient();

	const { data, error } = await client.mutation(addIngredientMutation, {
		name: body.name
	});

	if (error) {
		return {
            status: 500,
            headers: {},
            body: { message: 'Failed to add ingredient' }
        };
	}

	return {
		status: 200,
	    headers: {},
	    body:   data
	};
};
