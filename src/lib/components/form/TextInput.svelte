<script lang="ts">
	import type { NestedErrors } from '$lib/types/formTypes';

	export let errors: NestedErrors;
	export let value: string | number;
	export let placeholder: string = '';
	export let label: string;
	export let name: string;
	export let blur: Record<string, boolean>;
	export let handleBlur: () => void;
	export let constraints: any;
	export let type: 'text' | 'number' | 'email' = 'text';

	const typeAction = (node: HTMLInputElement) => {
		node.type = type;
	};

	const getErrorMessage = (errors: NestedErrors, name: string): string | undefined => {
		const error = errors[name];
		if (Array.isArray(error)) {
			return error.join(', ');
		} else if (typeof error === 'object') {
			const nestedErrors = Object.values(error).flat();
			return nestedErrors.join(', ');
		}
	};

	const handleInput = (e: Event & { target: HTMLInputElement }) => {
		if (type === 'number') {
			value = +e.target.value;
		} else {
			value = e.target.value;
		}
	};
</script>

<label for={name}>{label}</label>
<input
	use:typeAction
	{name}
	{placeholder}
	aria-invalid={errors[name] && blur?.[name] ? 'true' : undefined}
	on:blur={handleBlur}
	bind:value
	{...constraints}
	on:input={handleInput}
/>
{#if getErrorMessage(errors, name) && blur?.[name]}
	<span class="invalid">{getErrorMessage(errors, name)}</span>
{/if}

<style>
	.invalid {
		color: red;
	}
</style>
