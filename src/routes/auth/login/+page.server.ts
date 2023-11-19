import { redirect, type Actions } from '@sveltejs/kit';
import { register } from 'module';
import { superValidate } from 'sveltekit-superforms/server';

import { loginSchema } from './schema';

export const load = async ({ locals }) => {
  if (locals.user) {
    throw redirect(303, '/my/settings');
  }

  return {
    form: superValidate(loginSchema, {}),
  };
};

export const actions: Actions = {
  login: async ({ locals, request }) => {
    const body = Object.fromEntries(await request.formData());

    try {
      // Log user in and redirect to home
      locals.user = await locals.pb.collection('users').authWithPassword(body.email, body.password);
    } catch (err: any) {
      console.error('Error signing in ', err);
      return {
        success: false,
        error: err.message,
      };
    }

    // Successfully logged in, redirect to home
    throw redirect(303, '/');
  },
};
