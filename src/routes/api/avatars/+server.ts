import { Collections } from '$lib/types/data/pocketbase-types';
import type { AvatarsResponseExpanded } from '$lib/types/data/api/avatars';

import type PocketBase from 'pocketbase';

export const GET = async ({ locals, url }) => {
  const page = Number(url.searchParams.get('page')) || 1;
  const limit = Number(url.searchParams.get('limit')) || 10;
  const sortBy = url.searchParams.get('sortBy') || null;
  const sortDirection = url.searchParams.get('sortDirection') || 'asc';

  const { pb }: { pb: PocketBase } = locals;

  const sortPrefix = sortDirection === 'asc' ? '+' : '-';

  const sort = sortBy ? `${sortPrefix}${sortBy}` : 'created';

  console.log('sort', sort);
  const getAvatars = async (page: number, limit: number) => {
    const avatars = await pb
      .collection(Collections.Avatars)
      .getList<AvatarsResponseExpanded>(page, limit, {
        sort,
        expand:
          'booth_item,booth_item.shop,booth_item.category,booth_item.imported_by.username,booth_item.imported_by.avatar',
      });

    return avatars;
  };

  const avatars = await getAvatars(page, limit);

  return new Response(JSON.stringify(avatars));
};
