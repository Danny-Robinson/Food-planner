<script>
	// import test component
	import Test from '../components/test.svelte';
	import { QueryClient, QueryClientProvider } from 'svelte-query';
	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<Test />
</QueryClientProvider>
