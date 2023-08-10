import { createClient, cacheExchange, fetchExchange } from '@urql/svelte';

export const getClient = () => {
	return createClient({
		url: 'https://food-planner-database.onrender.com/v1/graphql',
		exchanges: [cacheExchange, fetchExchange]
	});
};
