import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
  if (!locals.user) {
    redirect(303, '/auth/login');
  }

  if (!locals.user.admin) {
    redirect(303, '/');
  }

  return {};
};
