import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

const schema = z.object({
	name: z.string(),
	email: z.string().email(),
	phone: z
		.string()

		.optional(),
	subject: z.string(),
	message: z.string()
});

export const load = async () => {
	const form = await superValidate(schema);

	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);
		console.log('POST', form);

		if (!form.valid) {
			return fail(400, { form });
		}

		// TODO: Do something with the validated data

		return { form };
	}
};
