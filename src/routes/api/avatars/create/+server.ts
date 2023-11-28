import type { IApiAvatarCreate, IApiAvatarResponse } from '$lib/types/data/api/avatars';
export const POST = async ({ request }) => {
  const body = await request.json();
  console.log('body', body);
  const { id, name, creator, photos, tags, description, booth_data } = body;

  if (!id || !name || !creator || !photos || !tags || !description || !booth_data) {
    return new Response(
      'Missing required parameters: id, name, creator, photos, tags, description, booth_id, booth_url, booth_data',
      {
        status: 400,
      }
    );
  }

  return new Response('Not implemented', {
    status: 501,
  });
};
