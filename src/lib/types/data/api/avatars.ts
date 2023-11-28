import {
  Collections,
  type AvatarsResponse,
  type CategoriesResponse,
  type ItemsResponse,
  type ShopsResponse,
  type UsersResponse,
} from '$lib/types/data/pocketbase-types';

type TExpand = {
  booth_item: ItemsResponse;
  shop: ShopsResponse;
  category: CategoriesResponse;
  imported_by: UsersResponse;
};

export type AvatarsResponseExpanded = AvatarsResponse<TExpand>;

// import type { BoothItemApiResponse } from '../../booth/api-types';

// export interface ICategoryBase {
//   id: string;
//   name: string;
//   booth_id: string;
//   created: string;
//   updated: string;
// }

// export interface IShopBase {
//   id: string;
//   name: string;
//   subdomain: string;
//   thumbnail_url: string;
//   url: string;
//   created: string;
//   updated: string;
// }

// export interface IUserBase {
//   id?: string;
//   name?: string;
//   admin?: boolean;
//   email?: string;
//   username?: string;
//   avatar?: string;
// }

// // Items
// export interface IItemBase {
//   id: string;
//   booth_id: number;
//   name: string;
//   description: string;
//   is_adult: boolean;
//   price: number;
//   tags?: string[];
//   booth_data: BoothItemApiResponse | {};
//   shop: string;
//   category: string;
//   imported_by: string;
// }

// export interface IItemCreate extends IItemBase {}
// export interface IItemResponse extends IItemBase {
//   expand: {
//     shop: IShopBase;
//     category: ICategoryBase;
//     imported_by: IUserBase;
//   };
// }

// export interface IAvatarBase {
//   id: string;
//   name: string;
//   booth_id: string;
//   booth_item: string;
// }

// export interface IAvatarCreate extends IAvatarBase {}

// export interface IAvatarResponse extends IAvatarBase {
//   expand: {
//     booth_item: IItemBase;
//   };
// }
