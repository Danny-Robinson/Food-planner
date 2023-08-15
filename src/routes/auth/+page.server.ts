import { superValidate, defaultValues } from 'sveltekit-superforms/server';
import { schema } from '$lib/validationSchemas/schema'

export const load = (async () => {
  // Server API:
  const form = await superValidate(defaultValues(schema), schema);

  // Always return { form } in load and form actions.
  return { form };
});