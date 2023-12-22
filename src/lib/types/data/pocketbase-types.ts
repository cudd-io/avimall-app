/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Accessories = "accessories",
	Avatars = "avatars",
	Categories = "categories",
	Items = "items",
	Shops = "shops",
	Tags = "tags",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AccessoriesRecord = {
	booth_id: number
	booth_item?: RecordIdString
	fits_avatars?: RecordIdString[]
	name?: string
}

export enum AvatarsGenderOptions {
	"masc" = "masc",
	"femme" = "femme",
	"androgenous/nb" = "androgenous/nb",
}
export type AvatarsRecord = {
	booth_id: number
	booth_item: RecordIdString
	gender?: AvatarsGenderOptions[]
	name: string
}

export type CategoriesRecord = {
	booth_id: number
	name?: string
}

export type ItemsRecord<Tbooth_data = unknown, Timages = unknown> = {
	booth_data: null | Tbooth_data
	booth_id: number
	category: RecordIdString
	description: HTMLString
	images?: null | Timages
	imported_by: RecordIdString
	is_adult?: boolean
	name: string
	price?: number
	shop: RecordIdString
	tags?: RecordIdString[]
}

export type ShopsRecord = {
	name: string
	subdomain: string
	thumbnail_url?: string
	url?: string
}

export type TagsRecord = {
	tag_name: string
}

export type UsersRecord = {
	admin?: boolean
	avatar?: string
	favorites?: RecordIdString[]
	name?: string
	owned?: RecordIdString[]
}

// Response types include system fields and match responses from the PocketBase API
export type AccessoriesResponse<Texpand = unknown> = Required<AccessoriesRecord> & BaseSystemFields<Texpand>
export type AvatarsResponse<Texpand = unknown> = Required<AvatarsRecord> & BaseSystemFields<Texpand>
export type CategoriesResponse<Texpand = unknown> = Required<CategoriesRecord> & BaseSystemFields<Texpand>
export type ItemsResponse<Tbooth_data = unknown, Timages = unknown, Texpand = unknown> = Required<ItemsRecord<Tbooth_data, Timages>> & BaseSystemFields<Texpand>
export type ShopsResponse<Texpand = unknown> = Required<ShopsRecord> & BaseSystemFields<Texpand>
export type TagsResponse<Texpand = unknown> = Required<TagsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	accessories: AccessoriesRecord
	avatars: AvatarsRecord
	categories: CategoriesRecord
	items: ItemsRecord
	shops: ShopsRecord
	tags: TagsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	accessories: AccessoriesResponse
	avatars: AvatarsResponse
	categories: CategoriesResponse
	items: ItemsResponse
	shops: ShopsResponse
	tags: TagsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'accessories'): RecordService<AccessoriesResponse>
	collection(idOrName: 'avatars'): RecordService<AvatarsResponse>
	collection(idOrName: 'categories'): RecordService<CategoriesResponse>
	collection(idOrName: 'items'): RecordService<ItemsResponse>
	collection(idOrName: 'shops'): RecordService<ShopsResponse>
	collection(idOrName: 'tags'): RecordService<TagsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
