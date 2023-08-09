import { GraphQLClient } from 'graphql-request';

const endpoint = 'YOUR_HASURA_ENDPOINT';
const client = new GraphQLClient(endpoint, {
	headers: {
		// if you have any specific headers, put them here
	}
});

export default client;
