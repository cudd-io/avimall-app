<script lang="ts">
  import Icon from '@iconify/svelte';
  import type { MenuItem } from '$lib/types';
  import UserMenu from './UserMenu.svelte';
  import { cn } from '$lib/utils';

  export let data: any;

  let debug = false;

  const menuBar: MenuItem[] = [
    {
      name: 'Avatars',
      href: '/mall',
      classes: 'btn-ghost',
    },
  ];

  const loggedOutMenuBar: MenuItem[] = [
    {
      name: 'Login',
      href: '/auth/login',
      classes: 'btn-ghost',
    },
    {
      name: 'Register',
      href: '/auth/register',
      classes: 'btn-primary',
    },
  ];

  const loggedInMenuBar: MenuItem[] = [
    // bulk import
    {
      name: 'Import',
      href: '/tools/bulk-import',
      classes: 'btn-ghost',
      icon: 'solar:import-bold',
    },
    // Favorites
    {
      name: 'Favoritesss',
      href: '/my/favorites',
      classes: 'btn-ghost',
      icon: 'mdi:heart-outline',
    },
  ];
</script>

<header class="navbar bg-glass border-b-base-300 text-base-content">
  <div class="flex-1">
    <a class="btn text-xl btn-ghost" href="/">
      <Icon class="mt-1" icon="bi:headset-vr" width="24" aria-label="Avatar Mall Logo" />
      <span class="my-auto">Avatar Mall</span>
    </a>
  </div>

  <!-- Menu Bar Items -->
  <nav class="flex-none gap-2">
    {#each menuBar as item}
      <a href={item.href} class={cn('btn', item.classes)} class:btn-circle={item.icon}>
        {#if item.icon}
          <Icon icon={`${item.icon}`} width="24" aria-label={item.name} />
        {:else}
          {item.name}
        {/if}
      </a>
    {/each}
    {#if !data.user}
      {#each loggedOutMenuBar as item}
        <a href={item.href} class={cn('btn', item.classes)} class:btn-circle={item.icon}>
          {#if item.icon}
            <Icon icon={`${item.icon}`} width="24" aria-label={item.name} />
          {:else}
            {item.name}
          {/if}
        </a>
      {/each}
    {:else}
      {#each loggedInMenuBar as item}
        <a href={item.href} class={cn('btn', item.classes)} class:btn-circle={item.icon}>
          {#if item.icon}
            <Icon icon={`${item.icon}`} width="24" aria-label={item.name} />
          {:else}
            {item.name}
          {/if}
        </a>
      {/each}
    {/if}
  </nav>

  {#if data.user}
    <UserMenu {data} />
  {/if}
</header>

<style lang="postcss">
  header {
    position: relative;
    view-transition-name: header;
  }
  /* #shadow {
    postion: absolute !important;
    display: block;
    top: 0px !important;
    width: 100%;
    height: 100%;
    background: red;
    z-index: 200;
    content: 'fffffff';
  } */
</style>
