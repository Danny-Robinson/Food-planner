import { getClient } from '$lib/utils/getClient';
 import type { Load } from '@sveltejs/kit';
import type { GetIngredientsQuery } from '../../generated/graphql';
import { GET_INGREDIENTS_QUERY } from '$lib/queries';
import { ingredientSchema } from '$lib/validationSchemas/ingredientSchema';
import { defaultValues, superValidate } from 'sveltekit-superforms/server';

export const load: Load = async () => {
    const client = getClient();
    const { data } = await client.query<GetIngredientsQuery>(GET_INGREDIENTS_QUERY, {});
    const form = await superValidate(defaultValues(ingredientSchema), ingredientSchema);

    return {
        props: {
            ingredients: data?.ingredients || [],
            form
        }
    };
};
