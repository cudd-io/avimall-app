import type { ComponentType, SvelteComponent } from 'svelte';
import { writable, type Writable } from 'svelte/store';
import { onMount } from 'svelte';

type SidebarComponent = {
  component: ComponentType<SvelteComponent>;
  props: Record<string, any>;
} | null;

export const currentSidebar: Writable<SidebarComponent> = writable(null);

/**
 * Sets the sidebar component and its props.
 *
 * @param {ComponentType<SvelteComponent>} component - The component to be set as the sidebar.
 * @param {Record<string, any>} props - The props to be passed to the sidebar component.
 * @return {void}
 */
export const setSidebar = (
  component: ComponentType<SvelteComponent>,
  props: Record<string, any> = {}
) => {
  currentSidebar.set({
    component,
    props,
  });
};

/**
 * Clears the sidebar.
 *
 * @param {none}
 * @return {none}
 */
export const clearSidebar = () => {
  currentSidebar.set(null);
};

/**
 * Registers a sidebar component with optional props. Automatically clears the sidebar when the component is unmounted.
 *
 * @param {ComponentType<SvelteComponent>} component - The sidebar component to register.
 * @param {Record<string, any>} props - Optional props for the sidebar component.
 * @return {void} - The function does not return a value.
 */
export const registerSidebar = (
  component: ComponentType<SvelteComponent>,
  props: Record<string, any> = {}
) => {
  onMount(() => {
    setSidebar(component, props);

    return () => {
      clearSidebar();
    };
  });
};
