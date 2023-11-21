// Booth API Transformers

import type { BoothItem } from '$lib/types/data';
import type { BoothItemApiResponse } from '$lib/types/booth/api-types';

export const itemCategories = {
  '209': {
    id: 209,
    name: '3D Character Attachments',
    parent: {
      name: '3D Models',
      url: 'https://booth.pm/en/browse/3D%20Models',
    },
  },
};

export const transformBoothItem = (item: BoothItemApiResponse): BoothItem => {
  return {
    itemId: item.id.toString(),
    title: item.name,
    description: item.description,
    mainImage: item.images[0].resized || '',
    category: item.category?.name || '',
    creator: item.shop?.subdomain || '',
    priceJPY: item.price,
    type: 'avatar',
    nsfw: item.is_adult,
  };
};
