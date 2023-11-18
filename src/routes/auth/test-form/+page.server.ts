import { redirect, type Actions } from '@sveltejs/kit';

export const load = async ({ locals }) => {
  console.log('locals', locals);
  if (locals.user) {
    throw redirect(303, '/my/settings');
  }
};

export const actions: Actions = {
  register: async ({ locals, request }) => {
    const body = Object.fromEntries(await request.formData());

    return {
      success: true,
      body,
    };
  },
};
