import { redirect, type Actions } from '@sveltejs/kit';
import { register } from 'module';

export const load = async ({ locals }) => {
  console.log('locals', locals);
  if (locals.user) {
    throw redirect(303, '/my/settings');
  }
};

export const actions: Actions = {
  register: async ({ locals, request }) => {
    const body = Object.fromEntries(await request.formData());
    // Set display name to username by default
    const name = body.username;

    try {
      if (!body.termsOfService) {
        throw new Error('TOS');
      }

      // Create user and send verification email
      await locals.pb.collection('users').create({ name, ...body });
      await locals.pb.collection('users').requestVerification(body.email);

      // Log user in automatically and redirect to home
      locals.user = await locals.pb.collection('users').authWithPassword(body.email, body.password);
    } catch (err: any) {
      // console.log('Error creating user: ', JSON.stringify(err, null, 2));
      const tosError = {
        message: 'You must agree to the terms of service',
        code: 'tos_not_accepted',
      };
      return {
        success: false,
        error: { ...err.data, termsOfService: err.message === 'TOS' ? tosError : undefined },
      };
    }

    // Successfully created user and logged in, redirect to home
    throw redirect(303, '/');
  },
};
