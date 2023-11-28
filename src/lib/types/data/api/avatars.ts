import type { BoothItemApiResponse } from '../../booth/api-types';

export interface IAvatarCreate {
  id: string;
  name: string;
  booth_id: string;
  booth_item: string;
}

// export interface IApiAvatarResponse extends IApiAvatarCreate {
//   created: string;
//   updated: string;
//   collectionId: string;
//   collectionName: string;
// }

export interface IItemBase {
  id: string;
  booth_id: number;
  name: string;
  description: string;
  is_adult: boolean;
  price: number;
  category: string;
  shop: string;
  tags?: string[];
  imported_by: string;
  booth_data: BoothItemApiResponse | {};
}

export interface IItemCreate extends IItemBase {}
