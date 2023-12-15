import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(303, '/auth/login');
  }

  if (!locals.user.admin) {
    throw redirect(303, '/');
  }

  return {};
};
