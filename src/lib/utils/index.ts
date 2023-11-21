import cheerio from 'cheerio';
import axios from 'axios';

export * from './string';
export * from './cn';

export const serializeNonPOJOs = (obj: any) => {
  return structuredClone(obj);
};

/**
 * Fetches HTML content from the given URL and returns a Cheerio instance.
 *
 * @param {string} url - The URL of the page to fetch HTML content from.
 * @return {CheerioStatic} A Cheerio instance representing the parsed HTML content.
 */
export const cheerioFromURL = async (url: string) => {
  const { data } = await axios.get(url);
  return cheerio.load(data);
};

const PROXY_URL = '/api/proxy?url=';

export const translateToEnglish = async (text: string, proxyUrl = PROXY_URL) => {
  const apiUrl = `${proxyUrl}https://665.uncovernet.workers.dev/translate`;
  const params = {
    text,
    source_lang: 'ja',
    target_lang: 'en',
  };

  const response = await axios.get(apiUrl, { params });
  return response.data.response.translated_text;
};
