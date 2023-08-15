<script lang="ts">
    export let value: string;
    export let label: string;
    export let name: string;
    export let errors: Record<string, string[]>;
    export let blur: Record<string, boolean>;
    export let handleBlur: () => void;
    export let constraints: Record<string, any>;
    $: console.log(errors);
</script>

<label for={name}>{label}</label>
<input
    type="text"
    name="{name}"
    aria-invalid={errors[name] && blur?.[name] ? 'true' : undefined}
    on:blur={handleBlur}
    bind:value={value}
    {...constraints[name]} />
{#if errors[name] && blur?.[name]}<span class="invalid">{errors[name]}</span>{/if}

<style>
    .invalid {
        color: red;
    }
</style>
