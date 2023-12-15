import { redirect, type Actions, fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

import { loginSchema } from './schema';

export const load = async ({ locals }) => {
  if (locals.user) {
    redirect(303, '/my/settings');
  }

  const form = await superValidate(loginSchema, {});
  return {
    form,
  };
};

export const actions: Actions = {
  login: async ({ locals, request }) => {
    const form = await superValidate(request, loginSchema);
    if (!form.valid) return fail(400, { form });

    try {
      // Log user in and redirect to home
      await loginUser(form.data.email, form.data.password, locals);
    } catch (err: any) {
      return fail(400, {
        form,
        error: 'Invalid email or password',
      });
    }

    // Successfully logged in, redirect to home
    redirect(303, '/');
  },
};

const loginUser = async (email: string, password: string, locals: App.Locals) => {
  try {
    locals.user = await locals.pb.collection('users').authWithPassword(email, password);
  } catch (err: any) {
    throw err;
  }
};
