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
