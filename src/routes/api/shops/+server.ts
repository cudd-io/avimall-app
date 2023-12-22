import { Collections, type ShopsResponse } from '$lib/types/data/pocketbase-types';

export const GET = async ({ locals, url }) => {
  const page = Number(url.searchParams.get('page')) || 1;
  const limit = Number(url.searchParams.get('limit')) || 10;

  const getShops = async (page: number, limit: number) => {
    const shops = await locals.pb.collection(Collections.Shops).getList<ShopsResponse>(page, limit);
    return shops;
  };

  const shops = await getShops(page, limit);
  return new Response(JSON.stringify(shops));
};
