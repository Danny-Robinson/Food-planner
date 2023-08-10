import { getClient } from '$lib/utils/getClient';
 import { deleteIngredient as deleteIngredientMutation } from '$lib/queries/deleteIngredient';
 
export const post = async ({ body }: any) => {
	const client = getClient();

	const { data, error } = await client.mutation( deleteIngredientMutation, {
		id: body.id
	});

 
	if (error) {
		return {
			status: 500,
			body: { message: 'Failed to delete ingredient' }
		};
	}

	return {
		status: 200,
		body: data
	};
};
