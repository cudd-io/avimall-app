import type { ShopsResponse } from '$lib/types/data/pocketbase-types';

import type { ListResult } from 'pocketbase';

export const load = async ({ fetch }) => {
  const response = await fetch('/api/shops');
  const shops = (await response.json()) as ListResult<ShopsResponse>;

  return {
    shops,
  };
};
