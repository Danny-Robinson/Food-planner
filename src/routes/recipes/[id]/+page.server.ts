import { GET_RECIPE_DETAILS_QUERY } from '$lib/queries/getRecipeDetails';
import { getClient } from '$lib/utils/getClient';
import type { Load } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export const load: Load = async ({ params }) => {
    const client = getClient();
    const id = params.id;

    const response = await client.query(GET_RECIPE_DETAILS_QUERY, {
        id: id
    });

    const { data } = response;
    console.log(response)
     if (data && data.recipes_by_pk) {
        return {
            props: {
                recipe: data.recipes_by_pk
            }
        };
    } else {
        return {
            status: 404,
            props: {
                message: 'Recipe not found'
            }
        };
    }
};
