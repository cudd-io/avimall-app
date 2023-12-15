import type { PageServerLoad } from './$types';
import { redirect, type Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

import { registerSchema, type RegisterSchema } from './schema';
import type { SuperValidated } from 'formsnap';

export const load: PageServerLoad = async ({ locals }) => {
  if (locals.user) {
    redirect(303, '/my/settings');
  }

  const form = await superValidate(registerSchema, {});

  return {
    form,
  };
};

export const actions: Actions = {
  register: async ({ locals, request }) => {
    const form = await superValidate(request, registerSchema);
    if (!form.valid) return fail(400, { form });

    // Create new user and authenticate
    try {
      await createUser(form, locals);
      await loginUser(form.data.email, form.data.password, locals);
    } catch (err: any) {
      return fail(400, { form, error: err.message });
    }

    // Successfully created user and logged in, redirect to home
    redirect(303, '/');
  },
};

const createUser = async (form: SuperValidated<RegisterSchema>, locals: App.Locals) => {
  try {
    const name = form.data.username;

    await locals.pb.collection('users').create({ name, ...form.data });
    await locals.pb.collection('users').requestVerification(form.data.email);
  } catch (err: any) {
    throw err;
  }
};

const loginUser = async (email: string, password: string, locals: App.Locals) => {
  try {
    await locals.pb.collection('users').authWithPassword(email, password);
  } catch (err: any) {
    throw err;
  }
};
