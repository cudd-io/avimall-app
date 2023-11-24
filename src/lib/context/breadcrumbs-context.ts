import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
import type { MenuItem } from '$lib/types';

export const initBreadcrumbs = (initialValue: MenuItem[] = []) => {
  const breadcrumbs: Writable<MenuItem[]> = writable(initialValue);
  setContext<Writable<MenuItem[]>>('breadcrumbs', breadcrumbs);
};

export const getBreadcrumbsStore = () => {
  return getContext<Writable<MenuItem[]>>('breadcrumbs');
};
