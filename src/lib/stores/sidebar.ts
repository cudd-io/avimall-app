import { writable, type Writable } from 'svelte/store';

export const sidebarOpen: Writable<boolean> = writable(false);
