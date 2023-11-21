// Simple request proxy

import axios from 'axios';

export const GET = async ({ url }) => {
  const providedUrl = new URLSearchParams(new URL(url).search).get('url');

  if (!providedUrl) {
    return new Response('No url provided', { status: 400 });
  }

  const { data } = await axios.get(providedUrl);

  return new Response(JSON.stringify(data, null, 2), { status: 200 });
  // const res = await fetch(url);
};
