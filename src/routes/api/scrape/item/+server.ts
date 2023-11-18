import { scrapeBoothItems } from '$lib/utils/scraping';

import { cacheData, getCache, hasCache, type InMemoryCache } from '$lib/utils/in-memory-cache';
import type { BoothItem } from '$lib/types';

const cacheId = 'booth-items';

type BoothItemCache = InMemoryCache<BoothItem>;

export const GET = async ({ request, locals }) => {
  const url = new URL(request.url);
  const itemId = url.searchParams.get('itemId');
  const translate = url.searchParams.has('translate');
  const save = url.searchParams.has('save');

  if (!itemId) {
    return json({ error: 'itemId is required' }, { status: 400 });
  }

  if (hasCache(cacheId, itemId)) {
    const cacheItem = getCache<BoothItem>(cacheId, itemId);
    return json(cacheItem.data, { status: 200 });
  }

  const data = await scrapeBoothItems(itemId, translate);

  cacheData<BoothItem>(cacheId, itemId, data);

  if (save) {
    saveData(data, locals);
  }

  return json(
    {
      translated: translate,
      data,
    },
    { status: 200 }
  );
};

const json = (data: any, settings: ResponseInit) =>
  new Response(JSON.stringify(data, null, 2), settings);

const saveData = (data: BoothItem, locals: App.Locals) => {
  const pbData = {
    booth_id: data.itemId,
    booth_url: `https://booth.pm/en/items/${data.itemId}`,
    name: data.title,
    description: data.description,
    remotePhoto: data.mainImage,
  };
  locals.pb.collection('avatars').create(pbData);
};
