import { Collections } from '$lib/types/data/pocketbase-types';

export const GET = async ({ locals, params }) => {
  const { avatarId } = params;

  const avatar = await locals.pb
    .collection(Collections.Avatars)
    .getFirstListItem(`booth_id="${avatarId}"`, {
      expand:
        'booth_item,booth_item.shop,booth_item.category,booth_item.imported_by.username,booth_item.imported_by.avatar',
    });

  if (!avatar) {
    return new Response('Avatar not found', {
      status: 404,
    });
  }

  return new Response(JSON.stringify(avatar, null, 2));
};
