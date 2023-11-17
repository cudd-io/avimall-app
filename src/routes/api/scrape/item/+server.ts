import { scrapeBoothItems } from '$lib/utils/scraping';

export const GET = async ({ request }) => {
  const url = new URL(request.url);
  const itemId = url.searchParams.get('itemId');
  const translate = url.searchParams.has('translate');

  if (!itemId) {
    return json({ error: 'itemId is required' }, { status: 400 });
  }

  const data = await scrapeBoothItems(itemId, translate);

  console.log(data);
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
