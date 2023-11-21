// In memory cache for use on the server only

const caches: Caches = {};

const createInMemoryCache = <T = any>(cacheId: string): InMemoryCache<T> =>
  new Map() as InMemoryCache<T>;

export const seconds = (n: number) => 1000 * n;
export const minutes = (n: number) => seconds(n * 60);
export const hours = (n: number) => minutes(n * 60);
export const days = (n: number) => hours(n * 24);

export type InMemoryCache<T = any> = Map<string, CacheItem<T>>;

export type CacheItem<T = any> = {
  itemId: string;
  data: T;
  date: Date;
  ttl: number;
};

export type Caches = {
  [cacheId: string]: InMemoryCache;
};

const createOrGetInMemoryCache = <T = any>(cacheId: string) => {
  if (!caches[cacheId]) {
    caches[cacheId] = createInMemoryCache(cacheId);
  }
  return caches[cacheId];
};

export const cacheData = <T = any>(cacheId: string, itemId: string, data: any) => {
  const inMemoryCache = createOrGetInMemoryCache<T>(cacheId);

  const cacheItem = {
    itemId,
    data,
    date: new Date(),
    ttl: 1000 * 60 * 60, // 1 hour
  };

  inMemoryCache.set(itemId, cacheItem);
};

export const hasCache = <T = any>(cacheId: string, itemId: string): boolean => {
  const inMemoryCache = createOrGetInMemoryCache<T>(cacheId);
  return inMemoryCache.has(itemId) && !cacheItemExpired(inMemoryCache.get(itemId));
};

export const getCache = <T = any>(cacheId: string, itemId: string): CacheItem<T> => {
  const inMemoryCache: InMemoryCache<T> = createOrGetInMemoryCache(cacheId);
  if (!hasCache(cacheId, itemId)) {
    throw new Error('cache not found');
  }

  const cacheItem = inMemoryCache.get(itemId);

  if (!cacheItem) {
    throw new Error('cache item not found');
  }
  return cacheItem;
};

const cacheItemExpired = (cacheItem: CacheItem | undefined) => {
  if (!cacheItem) {
    return true;
  }
  return cacheItem.date.getTime() + cacheItem.ttl < new Date().getTime();
};
