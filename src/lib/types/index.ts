import type { ComponentType, SvelteComponent } from 'svelte';

export const isInArray = <T, A extends T>(item: T, array: ReadonlyArray<A>): item is A =>
  array.includes(item as A);

export type MenuItem = {
  name: string;
  href: string;
  icon?: ComponentType<SvelteComponent> | string;
  classes?: string;
};

// DOM Types

export * from './forms';
export * from './data';
