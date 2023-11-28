import type { IAvatarCreate, IItemCreate } from '$lib/types/data/api/avatars';
import { getBoothItem } from '$lib/utils/booth/api';
import { createPbID } from '$lib/utils/data';
import axios from 'axios';
import type PocketBase from 'pocketbase';

// This should be a POST request, but for now I'm using a GET request to test the API more easily

const parsePriceString = (price: string): number => {
  if (!price) {
    return 0;
  }

  return parseFloat(price.replace(',', '').replace(' JPY', ''));
};

export const GET = async ({ locals, request }) => {
  if (!locals.user) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }
  const { pb }: { pb: PocketBase } = locals;
  // Get booth_id from url
  const url = new URL(request.url);
  const booth_id = url.searchParams.get('booth_id');
  // const name = url.searchParams.get('name');
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

  const pb_id = createPbID(booth_id);

  const boothData = await getBoothItem(booth_id, false);
  const fieldsToTranslate = ['name', 'description'] as const;

  let shop;
  try {
    shop = await pb
      .collection('shops')
      .getFirstListItem(`subdomain="${boothData.shop?.subdomain}"`);
  } catch (error) {
    shop = await pb.collection('shops').create({
      id: createPbID(`${boothData.shop?.subdomain}`),
      name: boothData.shop?.name,
      subdomain: boothData.shop?.subdomain,
    });
  }

  let category;
  try {
    category = await pb
      .collection('categories')
      .getFirstListItem(`name="${boothData.category?.name}"`);
  } catch (error) {
    category = await pb.collection('categories').create({
      id: createPbID(`${boothData.category?.id}`),
      name: boothData.category?.name,
      booth_id: boothData.category?.id,
    });
  }

  const data: IItemCreate = {
    id: pb_id,
    booth_id: parseInt(booth_id),
    name: boothData.name,
    description: boothData.description,
    is_adult: boothData.is_adult,
    price: parsePriceString(boothData.price),
    category: category!.id,
    shop: shop!.id,
    imported_by: locals.user.id,
    booth_data: boothData,
  };

  if (translate) {
    for (const field of fieldsToTranslate) {
      if (!!dataFromUrl[field]) {
        // Should never be null since we already checked for null, but TypeScript is still complaining
        data[field] = dataFromUrl[field] || '';
        continue;
      }
      if (boothData[field]) {
        const { data: translated } = await axios.get(
          `https://665.uncovernet.workers.dev/translate`,
          {
            params: {
              text: boothData[field],
              source_lang: 'ja',
              target_lang: 'en',
            },
          }
        );
        data[field] = translated.response.translated_text;
      }
    }
  }

  try {
    const createdItem = await pb.collection('items').create(data);

    // Create avatar if it doesn't exist and item category is 208
    if (boothData.category?.id === 208) {
      let avatar: IAvatarCreate;
      try {
        avatar = await pb
          .collection('avatars')
          .getFirstListItem(`booth_id="${createdItem.booth_id}"`);
      } catch (error) {
        avatar = await pb.collection('avatars').create({
          id: createPbID(`${createdItem.booth_id}`),
          name: createdItem.name,
          booth_id: createdItem.booth_id,
          booth_item: createdItem.id,
        });
      }

      return new Response(JSON.stringify({ ...avatar, item: createdItem }, null, 2), {
        status: 200,
      });
    }

    return new Response(JSON.stringify(createdItem, null, 2), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new Response(JSON.stringify(error, null, 2), { status: 400 });
  }
};
