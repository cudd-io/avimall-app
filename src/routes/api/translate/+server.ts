// translate to english

import axios from 'axios';

export const GET = async ({ url }) => {
  const params = new URLSearchParams(new URL(url).search);

  const text = params.get('text');
  const source_lang = params.get('source_lang');
  const target_lang = params.get('target_lang');

  if (!text || !source_lang || !target_lang) {
    return new Response('Missing required parameters: text, source_lang, target_lang', {
      status: 400,
    });
  }

  try {
    const { data } = await axios.get(`https://665.uncovernet.workers.dev/translate`, {
      params: {
        text,
        source_lang,
        target_lang,
      },
    });

    return new Response(JSON.stringify(data, null, 2), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new Response(JSON.stringify(error, null, 2), { status: 500 });
  }
};
