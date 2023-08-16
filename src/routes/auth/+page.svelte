<script lang="ts">
	import { schema } from '$lib/validationSchemas/schema';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import { getFormBlur } from '$lib/utils/getFormBlur';
	import TextInput from '$lib/components/form/TextInput.svelte';
	export let data: PageData;

	const { form, errors, constraints } = superForm(data.form, {
		validators: schema
	});

	const { blur, handleBlur } = getFormBlur<typeof $form>($form);
</script>

<form>
	<TextInput
		bind:value={$form.name}
		label="Name"
		name="name"
		errors={$errors}
		blur={$blur}
		handleBlur={handleBlur('name')}
		constraints={$constraints['name']}
	/>

	<TextInput
		bind:value={$form.email}
		label="Email"
		name="email"
		errors={$errors}
		blur={$blur}
		handleBlur={handleBlur('email')}
		constraints={$constraints['email']}
	/>

	<div><button>Submit</button></div>
</form>

<style>
	.invalid {
		color: red;
	}
</style>
