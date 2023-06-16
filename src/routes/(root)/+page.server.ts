import { z } from 'zod';
import { superValidate, message } from 'sveltekit-superforms/server';

import sgMail from '@sendgrid/mail';
sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);

const schema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters long'),
	email: z.string().email(),
	phone: z
		.string()

		.optional(),
	subject: z.string().min(5, 'Subject must be at least 5 characters long'),
	message: z.string().min(10, 'Message must be at least 10 characters long')
});

export const load = async () => {
	const form = await superValidate(schema);

	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);

		if (!form.valid) {
			console.log('POST', form);
			return message(form, 'fail', {
				status: 403
			});
		}

		const msg = {
			to: 'hello@tonmoy.dev',
			from: form.data.email,
			subject: form.data.subject,
			text: `Message from: ${form.data.name} - ${form.data.message}`,
			html: `Message from: <strong>${form.data.name}</strong> <br /> ${form.data.message}`
		};

		try {
			await sgMail.send(msg);
		} catch (error) {
			console.error(error);
			return message(form, 'fail', {
				status: 400
			});
		}

		return message(form, 'success');
	}
};
