import { z } from 'zod';

export const formSchema = z.object({
	email: z.string().email(),
	password: z.string().nonempty('Password is required')
});

export type FormSchema = typeof formSchema;
