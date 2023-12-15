import { redirect, type Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { formSchema } from './schema';

export const load = async ({ locals }) => {
  console.log('locals', locals);
  if (locals.user) {
    redirect(303, '/my/settings');
  }

  const form = await superValidate(formSchema, {});

  console.log('form', form);
  return {
    form,
  };
};

export const actions: Actions = {
  default: async ({ locals, request }) => {
    const form = await superValidate(request, formSchema);

    return {
      success: true,
      form,
    };
  },
};
