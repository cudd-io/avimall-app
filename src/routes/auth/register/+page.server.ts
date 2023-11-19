import type { PageServerLoad } from './$types';
import { redirect, type Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

import { registerSchema } from './schema';

export const load: PageServerLoad = ({ locals }) => {
  // console.log('locals', locals);
  if (locals.user) {
    throw redirect(303, '/my/settings');
  }

  return {
    form: superValidate(registerSchema, {}),
  };
};

export const actions: Actions = {
  register: async ({ locals, request }) => {
    const body = Object.fromEntries(await request.formData());
    // Set display name to username by default
    const name = body.username;

    try {
      // Create user and send verification email
      await locals.pb.collection('users').create({ name, ...body });
      await locals.pb.collection('users').requestVerification(body.email);

      // Log user in automatically and redirect to home
      locals.user = await locals.pb.collection('users').authWithPassword(body.email, body.password);
    } catch (err: any) {
      console.log('Error creating user: ', JSON.stringify(err, null, 2));

      const { password, comfirmPassword, ...rest } = body;
      return {
        success: false,
        error: { ...err.data },
        body: rest,
      };
    }

    // Successfully created user and logged in, redirect to home
    throw redirect(303, '/');
  },
};
