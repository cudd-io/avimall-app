// logout of pocketbase

import { redirect } from '@sveltejs/kit';

export function GET({ locals }) {
  locals.pb.authStore.clear();
  throw redirect(303, '/auth/login');
}
