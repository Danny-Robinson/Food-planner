import { createClient, cacheExchange, fetchExchange, Client } from '@urql/svelte';

 

export const getClient = (): Client => {
	return createClient({
		url: 'https://food-planner-database.onrender.com/v1/graphql',
		exchanges: [cacheExchange, fetchExchange]
	});
};
