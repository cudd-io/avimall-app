import type { BoothItem } from '$lib/types';
import { cheerioFromURL, translateToEnglish } from '$lib/utils';

export const scrapeBoothItems = async (itemId: string, translate = true): Promise<BoothItem> => {
  const url = `https://booth.pm/en/items/${itemId}`;

  const $ = await cheerioFromURL(url);

  const items = $('#items');
  const category = getData(items, 'product-category');
  const brand = getData(items, 'product-brand');
  const priceJPY = getData(items, 'product-price');

  const originalDescription = $('meta[property="og:description"]').attr('content') || '';
  let description = originalDescription;
  if (translate) {
    description = await translateToEnglish(originalDescription);
  }

  let originalTitle = $('meta[property="og:title"]').attr('content') || '';
  originalTitle = originalTitle.replace(' - BOOTH', '');
  let title = originalTitle;

  if (translate) {
    title = await translateToEnglish(originalTitle);
  }

  return {
    itemId,
    title,
    // originalTitle,
    description,
    // originalDescription,
    mainImage: $('meta[property="og:image"]').attr('content') || '',
    category,
    brand,
    priceJPY,
  };
};

const getData = (cheerioItem: cheerio.Cheerio, key: string): string =>
  cheerioItem.attr(`data-${key}`) || '';

// Items div from booth: `
// <div
//   class="market"
//   data-ga-tracking-id="UA-173026390-1"
//   data-product-brand="snowlight0102"
//   data-product-category="209"
//   data-product-id="5250018"
//   data-product-list="market_show"
//   data-product-price="1200"
//   data-shop-tracking-product-category="3D Character Attachments"
//   data-shop-tracking-product-id="5250018"
//   data-shop-tracking-product-name="[18モデル対応]衣装モデル『ビジネス・レディ』"
//   data-shop-tracking-product-price="1200" data-tracking="detail_item"
//   id="items"
//   ></div>
// `;
