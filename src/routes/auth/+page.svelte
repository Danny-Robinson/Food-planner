

<script lang="ts">
    import { schema } from '$lib/validationSchemas/schema'
	import type { PageData } from "./$types";
    import { superForm } from "sveltekit-superforms/client";

    export let data: PageData

  const { form, errors, constraints } = superForm(data.form, {
    validators: schema,
    validationMethod: 'auto'
  });

  let blur = Object.keys($form).reduce((accumulator, key) => ({
    ...accumulator, 
    [key]: false
  }), {} as Record<string, boolean>)


  const handleBlur = (name: string) => () => {
    blur[name] = true;
  }
  
</script>

<form>
  <label for="name">Name</label>
  <input
    type="text"
    name="name"
    aria-invalid={$errors.name && blur?.name ? 'true' : undefined}
    on:blur={handleBlur('name')}
    bind:value={$form.name}
    {...$constraints.name} />
  {#if $errors.name && blur?.name}<span class="invalid">{$errors.name}</span>{/if}


  <label for="email">E-mail</label>
  <input
    type="email"
    name="email"
    on:blur={handleBlur('email')}
    aria-invalid={$errors.email && blur?.email ? 'true' : undefined}
    bind:value={$form.email}

    {...$constraints.email} />
  {#if $errors.email && blur?.email}<span class="invalid">{$errors.email}</span>{/if}

  <div><button>Submit</button></div>
</form>

<style>
  .invalid {
    color: red;
  }
</style>