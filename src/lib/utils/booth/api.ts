import type { BoothItemApiResponse } from '$lib/types/booth/api-types';
import axios, { type AxiosPromise } from 'axios';

const PROXY_URL = '/api/proxy?url=';
export const BOOTH_ITEM_BASE_URL = `${PROXY_URL}https://booth.pm/en/items`;

const getBoothItemPromise = (itemId: string): AxiosPromise<BoothItemApiResponse> => {
  console.log(`fetching ${BOOTH_ITEM_BASE_URL}/${itemId}.json`);
  const url = `${BOOTH_ITEM_BASE_URL}/${itemId}.json`;
  return axios.get<BoothItemApiResponse>(url);
};

/**
 * Retrieves a Booth item from the specified itemId.
 *
 * @param {string} itemId - The ID of the item to retrieve.
 * @return {Promise<BoothItemApiResponse>} A promise that resolves to the Booth item API response.
 */
export const getBoothItem = async (itemId: string): Promise<BoothItemApiResponse> => {
  try {
    const { data } = await getBoothItemPromise(itemId);
    console.log({ data });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Retrieves the booth items for the given array of item ids.
 *
 * @param {string[]} items - The array of item ids.
 * @return {Promise<BoothItemApiResponse[]>} A promise that resolves to an array of booth item API responses.
 */
export const getBoothItems = async (items: string[]): Promise<BoothItemApiResponse[]> => {
  const promises = items.map(getBoothItemPromise);
  const responses = await Promise.all(promises);
  return responses.map((response) => response.data);
};
