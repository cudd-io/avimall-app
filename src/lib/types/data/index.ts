export type ItemType = 'avatar' | 'accessory' | 'misc';

export interface IBoothItemBase {
  itemId: string;
  title: string;
  description: string;
  mainImage: string;
  category: string;
  creator: string;
  priceJPY: string;
  type: ItemType;
  nsfw: boolean;
  tags?: string[];
}

export interface IAvatar extends IBoothItemBase {
  type: 'avatar';
}

export interface IMisc extends IBoothItemBase {
  type: 'misc';
}

export interface IAccessory extends IBoothItemBase {
  type: 'accessory';
  fitsAvatars: string[];
}

export type BoothItem = IAvatar | IAccessory | IMisc;
