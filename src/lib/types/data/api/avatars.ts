import {
  type AvatarsResponse,
  type CategoriesResponse,
  type ItemsResponse,
  type ShopsResponse,
  type UsersResponse,
  type AccessoriesResponse,
} from '$lib/types/data/pocketbase-types';

type TExpandItems = {
  shop: ShopsResponse;
  category: CategoriesResponse;
  imported_by: UsersResponse;
};

type TExpand = TExpandItems & {
  booth_item: ItemsResponse;
};

export type AvatarsResponseExpanded = AvatarsResponse<TExpand>;
export type AccessoriesResponseExpanded = AccessoriesResponse<TExpand>;
export type ItemsResponseExpanded = ItemsResponse<TExpandItems>;

export const instanceOfAvatarsResponseExpanded = (
  response: AvatarsResponse
): response is AvatarsResponseExpanded => response.expand !== undefined;

export const instanceOfAccessoriesResponseExpanded = (
  response: AccessoriesResponse
): response is AccessoriesResponseExpanded => response.expand !== undefined;

export const instanceOfItemsResponseExpanded = (
  response: ItemsResponse
): response is ItemsResponseExpanded => response.expand !== undefined;
