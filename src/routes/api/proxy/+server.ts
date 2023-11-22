// Simple request proxy

import axios from 'axios';

export const GET = async ({ url }) => {
  const providedUrl = new URLSearchParams(new URL(url).search).get('url');

  if (!providedUrl) {
    return new Response('No url provided', { status: 400 });
  }

  const decoded = decodeURIComponent(providedUrl || '');

  console.log('decoded', decoded);

  try {
    const { data } = await axios.get(providedUrl);

    return new Response(JSON.stringify(data, null, 2), { status: 200 });
    // const res = await fetch(url);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new Response(JSON.stringify(error, null, 2), { status: 500 });
  }
};
