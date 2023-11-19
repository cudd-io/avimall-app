<!--
@component

Renders a menu with clickable links and optional icons.

- Props:
  - `navLinks` (MenuItem[]): An array of menu items to be rendered. Each menu item should have the following properties:
    - `name` (string): The name or label of the menu item.
    - `href` (string): The URL to navigate to when the menu item is clicked.
    - `icon` (string | Component): Optional. The icon to be displayed alongside the menu item. Can be a string representing an icon name or a Svelte component.
    - `classes` (string): Optional. Additional classes to be applied to the menu item.
  - `navLinksHead` (MenuItem[]): An array of menu items to be rendered at the *top* of the menu.
  - `navLinksTail` (MenuItem[]): An array of menu items to be rendered at the *bottom* of the menu.
  - `justifyTailAtBottom` (boolean): Optional. Whether to justify the tail items at the bottom of the menu. Defaults to `true`.

- Usage:
  ```tsx
  <Menu
    navLinks={[
      { name: 'Settings', href: '/settings', icon: 'mdi:cog' },
      { name: 'Profile', href: '/profile', icon: 'mdi:user' },
      { name: 'Security', href: '/security', icon: 'mdi:lock' },
      { name: 'Logout', href: '/auth/logout', icon: 'mdi:logout', classes: 'text-red-500' },
    ]}
  />
  ```
-->
<script lang="ts">
  import SidebarIconLink from './SidebarIconLink.svelte';
  import type { MenuItem } from '$lib/types';
  import { page } from '$app/stores';

  // menu items
  export let navLinksHead: MenuItem[] = [];
  export let navLinksTail: MenuItem[] = [];
  export let navLinks: MenuItem[] = [];

  export let justifyTailAtBottom = true;

  $: allNavLinks = [...navLinksHead, ...navLinks, ...navLinksTail];

  let activeTab = 0;
  $: activeTab = allNavLinks.findIndex((link) => link.href === $page.url.pathname) || 0;

  // Doesn't actually use activeTab, but needs to be passed to ensure proper reactivity, since the menuitem isn't changed when activeTab changes
  const isActive = (link: MenuItem, _activeTab = activeTab) => $page.url.pathname === link.href;
</script>

<ul class="menu bg-base-200 h-full">
  <!-- the head slot -->
  {#if $$slots.head}
    <li class="flex flex-col">
      <slot name="head" />
    </li>
  {/if}

  {#each navLinksHead as link}
    <li>
      <SidebarIconLink {link} active={isActive(link, activeTab)} />
    </li>
  {/each}

  {#each navLinks as link}
    <li>
      <SidebarIconLink {link} active={isActive(link, activeTab)} />
    </li>
  {/each}

  <!-- the default slot -->
  {#if $$slots.default}
    <li class="flex flex-col">
      <slot />
    </li>
  {/if}

  <div
    class="tail-items flex flex-1 flex-col"
    class:justify-end={justifyTailAtBottom}
    class:justify-start={!justifyTailAtBottom}
  >
    {#each navLinksTail as link, i}
      <li class="flex flex-col">
        <SidebarIconLink {link} active={isActive(link, activeTab)} />
      </li>
    {/each}

    <!-- the tail slot -->
    {#if $$slots.tail}
      <li class="flex flex-col mt-auto">
        <slot name="tail" />
      </li>
    {/if}
  </div>
</ul>

<style>
  li {
    --item-active-color: oklch(var(--a));
    --item-text-color: oklch(var(--bc));
  }
</style>
