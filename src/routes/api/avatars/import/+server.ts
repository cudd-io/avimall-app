import type { BoothItemApiResponse } from '$lib/types/booth/api-types';
import type { ItemsRecord, AvatarsRecord, ItemsResponse } from '$lib/types/data/pocketbase-types';
import { getBoothItem } from '$lib/utils/booth/api';
// import axios from 'axios';
import type PocketBase from 'pocketbase';

// This should be a POST request, but for now I'm using a GET request to test the API more easily

const parsePriceString = (price: string): number => {
  if (!price) {
    return 0;
  }

  return parseFloat(price.replace(',', '').replace(' JPY', ''));
};

export const GET = async ({ locals, request, fetch }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
    });
  }
  const { pb }: { pb: PocketBase } = locals;

  const url = new URL(request.url);
  const booth_id = url.searchParams.get('booth_id');
  const translate: boolean = !!url.searchParams.get('translate');

  const dataFromUrl = {
    booth_id,
    name: url.searchParams.get('name') || null,
    description: url.searchParams.get('description') || null,
  };

  if (!booth_id) {
    return new Response('Missing required parameters: booth_id', {
      status: 400,
    });
  }

  const boothData = await getBoothItem(booth_id, false);
  const fieldsToTranslate = ['name', 'description'] as const;

  const shop = await getOrCreateShop(pb, boothData);
  const category = await getOrCreateCategory(pb, boothData);

  const data: ItemsRecord = {
    booth_id: parseInt(booth_id),
    name: boothData.name,
    description: boothData.description,
    is_adult: boothData.is_adult,
    price: parsePriceString(boothData.price),
    category: category!.id,
    shop: shop!.id,
    imported_by: locals.user.id,
    booth_data: boothData,
    images: boothData.images || [],
  };

  const updateData: Partial<ItemsRecord> = {
    images: boothData.images || [],
    price: parsePriceString(boothData.price),
  };

  if (translate) {
    for (const field of fieldsToTranslate) {
      if (dataFromUrl[field]) {
        // Should never be falsy since we already checked, but TypeScript is still complaining
        data[field] = dataFromUrl[field] || '';
        continue;
      }
      if (boothData[field]) {
        const translated = await fetch(`https://665.uncovernet.workers.dev/translate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: boothData[field],
            source_lang: 'ja',
            target_lang: 'en',
          }),
        }).then((res) => res.json());
        data[field] = translated.response.translated_text;
      }
    }
  }

  try {
    const [createdItem, avatar] = await createAvatar(pb, data, updateData, boothData.category?.id);

    return new Response(JSON.stringify({ item: createdItem, avatar }, null, 2), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new Response(JSON.stringify(error, null, 2), { status: 400 });
  }
};

export const DELETE = async ({ locals, request }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
    });
  }

  const { pb }: { pb: PocketBase } = locals;
  const url = new URL(request.url);
  const avatar_id = url.searchParams.get('avatar_id');
  if (!avatar_id) {
    return new Response('Missing required parameters: avatar_id', {
      status: 400,
    });
  }

  try {
    await pb.collection('avatars').delete(avatar_id);
    return new Response(JSON.stringify({ success: true }, null, 2), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new Response(JSON.stringify(error, null, 2), { status: 400 });
  }
};

const getOrCreateShop = async (pb: PocketBase, boothData: BoothItemApiResponse) => {
  try {
    const shop = await pb
      .collection('shops')
      .getFirstListItem(`subdomain="${boothData.shop?.subdomain}"`);

    console.log('updating shop', shop.id);
    // Update shop thumbnail and url
    await pb.collection('shops').update(shop.id, {
      thumbnail_url: boothData.shop?.thumbnail_url,
      url: boothData.shop?.url,
    });
    return shop;
  } catch (error) {
    console.log('creating shop', boothData.shop?.subdomain);
    const shop = await pb.collection('shops').create({
      name: boothData.shop?.name,
      subdomain: boothData.shop?.subdomain,
      thumbnail_url: boothData.shop?.thumbnail_url,
      url: boothData.shop?.url,
    });
    return shop;
  }
};

const getOrCreateCategory = async (pb: PocketBase, boothData: BoothItemApiResponse) => {
  try {
    const category = await pb
      .collection('categories')
      .getFirstListItem(`name="${boothData.category?.name}"`);

    return category;
  } catch (error) {
    const category = await pb.collection('categories').create({
      name: boothData.category?.name,
      booth_id: boothData.category?.id,
    });
    return category;
  }
};

const createAvatar = async (
  pb: PocketBase,
  data: ItemsRecord,
  updateData: Partial<ItemsRecord>,
  categoryId: number
): Promise<[ItemsResponse, AvatarsRecord | null]> => {
  let createdItem: ItemsResponse;
  try {
    createdItem = await pb.collection('items').create<ItemsResponse>(data);
  } catch (error: any) {
    createdItem = await pb.collection('items').getFirstListItem(`booth_id="${data.booth_id}"`);
    await pb.collection('items').update(createdItem.id, updateData);
  }

  // Create avatar if it doesn't exist and item category is 208
  if (categoryId === 208) {
    let avatar: AvatarsRecord;
    try {
      avatar = await pb
        .collection('avatars')
        .getFirstListItem(`booth_id="${createdItem.booth_id}"`);
    } catch (error) {
      avatar = await pb.collection('avatars').create({
        name: createdItem.name,
        booth_id: createdItem.booth_id,
        booth_item: createdItem.id,
      });
    }

    return [createdItem, avatar];
  }

  return [createdItem, null];
};
