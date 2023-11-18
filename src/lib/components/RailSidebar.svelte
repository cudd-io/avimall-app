<!--
@component

Renders a menu with clickable links and optional icons.

- Props:
  - `navLinks` (MenuItem[]): An array of menu items to be rendered. Each menu item should have the following properties:
    - `name` (string): The name or label of the menu item.
    - `href` (string): The URL to navigate to when the menu item is clicked.
    - `icon` (string | Component): Optional. The icon to be displayed alongside the menu item. Can be a string representing an icon name or a Svelte component.

- Usage:
  ```tsx
  <Menu
    navLinks={[
      { name: 'Settings', href: '/settings', icon: 'mdi:cog' },
      { name: 'Profile', href: '/profile', icon: 'mdi:user' },
      { name: 'Security', href: '/security', icon: 'mdi:lock' },
      { name: 'Logout', href: '/auth/logout', icon: 'mdi:logout' },
    ]}
  />
  ```
-->
<script lang="ts">
  import Icon from '@iconify/svelte';
  import type { MenuItem } from '$lib/types';

  export let navLinks: MenuItem[] = [];
</script>

<ul class="menu bg-base-200 h-full">
  {#each navLinks as link}
    <li>
      <a href={link.href} class="flex flex-col">
        {#if link.icon}
          <span class="bg-base-100 rounded-box overflow-visible text-neutral-400">
            {#if typeof link.icon === 'string'}
              <Icon icon={link.icon} width="32" />
            {:else}
              <svelte:component this={link.icon} />
            {/if}
          </span>
        {/if}
        <span>{link.name}</span>
      </a>
    </li>
  {/each}
</ul>
