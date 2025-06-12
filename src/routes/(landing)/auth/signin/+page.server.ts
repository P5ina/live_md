import { redirect, error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { formSchema } from './schema';
import { fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const { supabase } = event.locals;

		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		const email = form.data.email;
		const password = form.data.password;
		const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
		if (signInError) {
			if (signInError.message === 'Invalid login credentials') {
				return error(400, 'Invalid email or password');
			}
			return error(500, 'An error occurred while signing in');
		} else {
			redirect(303, '/editor');
		}
	}
};
