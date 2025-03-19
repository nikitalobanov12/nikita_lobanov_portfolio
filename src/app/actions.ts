'use server';

import { send } from '@emailjs/nodejs';

export async function sendEmail(formData: FormData) {
	const name = formData.get('name') as string;
	const email = formData.get('email') as string;
	const message = formData.get('message') as string;

	// Validation
	if (!name || !email || !message) {
		return { success: false, error: 'All fields are required' };
	}

	try {
		await send(
			process.env.EMAIL_JS_SERVICE_ID!,
			process.env.EMAIL_JS_TEMPLATE_ID!,
			{
				name: name,
				email: email,
				message: message,
				to_name: 'Nikita',
				to_email: 'nikitaalobanovv@gmail.com',
			},
			{
				publicKey: process.env.EMAIL_JS_PUBLIC_KEY!,
				privateKey: process.env.EMAIL_JS_PRIVATE_KEY!,
			}
		);

		return { success: true };
	} catch (error) {
		console.error('Error sending email:', error);
		return { success: false, error: 'Failed to send message' };
	}
}
