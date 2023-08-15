import { z } from 'zod';

// Name has a default value just to display something in the form.
export const schema = z.object({
  name: z.string().default('Hello world!'),
  email: z.string().email('fklsdjkfsjd')
});
