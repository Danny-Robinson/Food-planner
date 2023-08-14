import { getClient } from '$lib/utils/getClient';
 import type { Load } from '@sveltejs/kit';
import type { GetIngredientsQuery } from '../../generated/graphql';
import { GET_INGREDIENTS_QUERY } from '$lib/queries';

export const load: Load = async () => {
    const client = getClient();
    const { data } = await client.query<GetIngredientsQuery>(GET_INGREDIENTS_QUERY, {});
    
    return {
        props: {
            ingredients: data?.ingredients || []
        }
    };
};
