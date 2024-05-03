import type { AvatarsResponseExpanded } from '$lib/types/data/api/avatars';
import type { ListResult } from 'pocketbase';

export const load = async ({ url, fetch }) => {
  const page = Number(url.searchParams.get('page')) || 1;
  const limit = Number(url.searchParams.get('limit')) || 21;
  const sortBy = url.searchParams.get('sortBy') || null;
  const sortDirection = url.searchParams.get('sortDirection') || 'asc';

  const sortParams = sortBy ? `&sortBy=${sortBy}&sortDirection=${sortDirection}` : '';
  const response: Response = await fetch(`/api/avatars?page=${page}&limit=${limit}${sortParams}`);
  const avatars = (await response.json()) as ListResult<AvatarsResponseExpanded>;

  console.log('got new avatars');

  return {
    avatars,
    page,
    limit,
  };
};
