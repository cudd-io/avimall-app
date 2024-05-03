import type PocketBase from 'pocketbase';
import { cheerioFromURL } from '$lib/utils';

export const GET = async ({ locals, url, fetch }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
    });
  }

  const shop_id = url.searchParams.get('shop_id');
  const shop_url = `https://${shop_id}.booth.pm`;

  console.log('importing shop', shop_url);

  const shopItems = await getItemIdsFromPage(shop_url);

  console.log('shopItems', shopItems);
  // import items
  const items = await Promise.all(
    shopItems.map(async (item) => {
      await importItem(item, fetch);
      return item;
    })
  );

  return new Response(
    JSON.stringify({
      shopItems,
    }),
    {
      status: 200,
    }
  );
};

export const DELETE = async ({ locals, request }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
    });
  }

  const { pb }: { pb: PocketBase } = locals;
  const url = new URL(request.url);
  const shop_id = url.searchParams.get('shop_id');
  if (!shop_id) {
    return new Response('Missing required parameters: shop_id', {
      status: 400,
    });
  }

  try {
    await pb.collection('shops').delete(shop_id);
    return new Response(JSON.stringify({ success: true }, null, 2), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new Response(JSON.stringify(error, null, 2), { status: 400 });
  }
};

type ShopItem = {
  id: number;
  category: number;
};
const getItemIdsFromPage = async (url: string): Promise<ShopItem[]> => {
  const $ = await cheerioFromURL(url);

  const shopItems: ShopItem[] = $('.js-mount-point-shop-item-card')
    .toArray()
    .map((el) => {
      const dataItem = JSON.parse($(el).attr('data-item') || '{}');
      return {
        id: dataItem.tracking_data.product_id,
        category: dataItem.tracking_data.product_category,
      };
    });

  return shopItems;
};

const importItem = async (item: ShopItem, fetch: any) => {
  if (item.category === 208) {
    return fetch(`/api/avatars/import?booth_id=${item.id}`, {
      method: 'GET',
    }).then((res: Response) => res.json());
  }

  return;
};
