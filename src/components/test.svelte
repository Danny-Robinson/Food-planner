<script>
	import client from '../graphql/client';
	import { gql } from 'graphql-request';

	let data;

	async function fetchData() {
		const query = gql`
			{
				yourQueryHere {
					field1
					field2
				}
			}
		`;

		data = await client.request(query);
	}

	fetchData();
</script>

<!-- Then use your data in the component's markup -->
