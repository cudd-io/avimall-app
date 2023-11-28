import type { AvatarsResponseExpanded } from '$lib/types/data/api/avatars';
import { redirect } from '@sveltejs/kit';
import type { ListResult } from 'pocketbase';

export const load = async ({ params, fetch }) => {
  const { avatarId } = params;
  try {
    const response: Response = await fetch(`/api/avatars/${avatarId}`);
    const avatar = (await response.json()) as AvatarsResponseExpanded;
    return {
      avatarId,
      avatar,
    };
  } catch (error) {
    throw redirect(307, '/mall/avatars');
  }
};
