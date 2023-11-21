// Booth API Response Types generated from the json responses

export interface BoothItemApiResponse {
  description: string;
  id: number;
  is_adult: boolean;
  name: string;
  price: string;
  url: string;
  images: Image[];
  buyee_variations?: BuyeeVariation[];
  category: Category;
  embeds?: string[];
  factory_description?: string;
  gift?: any;
  is_buyee_possible?: boolean;
  is_end_of_sale?: boolean;
  is_placeholder?: boolean;
  is_sold_out?: boolean;
  order?: any;
  purchase_limit?: any;
  report_url?: string;
  share?: Share;
  shipping_info?: string;
  shop?: Shop;
  small_stock?: any;
  sound?: any;
  tag_banners?: TagBanner[];
  tag_combination?: TagCombination;
  tags?: Tag[];
  tracks?: any;
  variations?: Variation[];
  wish_list_url?: string;
  wish_lists_count?: number;
  wished?: boolean;
}

export interface Category {
  id: number;
  name: string;
  parent?: Parent;
  url: string;
}

export interface Parent {
  name?: string;
  url?: string;
}

export interface Image {
  caption?: any;
  original?: string;
  resized?: string;
}

export interface Share {
  hashtags?: string[];
  text?: string;
}

export interface Shop {
  name?: string;
  subdomain?: string;
  thumbnail_url?: string;
  url?: string;
  verified?: boolean;
}

export interface Tag {
  name?: string;
  url?: string;
}

export interface TagBanner {
  image_url?: string;
  name?: string;
  url?: string;
}

export interface TagCombination {
  category?: string;
  tag?: string;
  url?: string;
}

export interface Variation {
  buyee_html?: string;
  downloadable?: Downloadable;
  factory_image_url?: string;
  has_download_code?: boolean;
  id?: number;
  is_anshin_booth_pack?: boolean;
  is_empty_allocatable_stock_with_preorder?: boolean;
  is_empty_stock?: boolean;
  is_factory_item?: boolean;
  is_mailbin?: boolean;
  is_waiting_on_arrival?: boolean;
  name?: string;
  order_url?: string;
  price?: number;
  small_stock?: any;
  status?: string;
  type?: string;
}

export interface Downloadable {
  musics?: any[];
  no_musics?: NoMusic[];
}

export interface NoMusic {
  file_extension?: string;
  file_name?: string;
  file_size?: string;
  name?: string;
  url?: string;
}

export interface BuyeeVariation {
  buyee_html?: string;
  downloadable?: any;
  factory_image_url?: any;
  has_download_code?: boolean;
  id?: number;
  is_anshin_booth_pack?: boolean;
  is_empty_allocatable_stock_with_preorder?: boolean;
  is_empty_stock?: boolean;
  is_factory_item?: boolean;
  is_mailbin?: boolean;
  is_waiting_on_arrival?: boolean;
  name?: string;
  order_url?: any;
  price?: number;
  small_stock?: any;
  status?: string;
  type?: string;
}
