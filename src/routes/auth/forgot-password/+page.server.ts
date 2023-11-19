import { redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
import { resetSchema, type ResetSchema } from './schema';

export const load = async ({ locals }) => {
  const form = await superValidate<ResetSchema, string>(resetSchema, {});
  return {
    form,
  };
};

export const actions = {
  resetPassword: async ({ locals, request }) => {
    const form = await superValidate(request, resetSchema);
    if (!form.valid) return { form };

    try {
      await locals.pb.collection('users').requestPasswordReset(form.data.email);
    } catch (err: any) {
      console.error('Error resetting password: ', err);
    }

    // Always return success for security reasons, even if email could not be sent
    return message(form, 'Thanks! Please check your email for a link to reset your password.');
  },
};
