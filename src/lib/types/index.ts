import type { ComponentType, SvelteComponent } from 'svelte';

export type MenuItem = {
  name: string;
  href: string;
  icon?: ComponentType<SvelteComponent> | string;
  classes?: string;
};
