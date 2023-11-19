<script lang="ts">
  import type { MenuItem } from '$lib/types';
  import { AppBar, popup, type PopupSettings } from '@skeletonlabs/skeleton';

  import { Avatar } from '@skeletonlabs/skeleton';
  import UserMenu from './UserMenu.svelte';

  export let data: any;

  // User Popup Menu
  const userPopup: PopupSettings = {
    event: 'click',
    target: 'userPopup',
    placement: 'bottom',
  };

  let debug = false;

  const loggedOutMenuBar: MenuItem[] = [
    {
      name: 'Login',
      href: '/auth/login',
      classes: 'variant-ghost-surface',
    },
    {
      name: 'Register',
      href: '/auth/register',
      classes: 'variant-filled',
    },
  ];

  const loggedInMenuBar: MenuItem[] = [
    // Nothing here yet, but keeping it in case I want to add some
    {
      name: 'Shop',
      href: '/mall',
    },
  ];
</script>

<div class="navbar bg-base-200">
  <div class="flex-1">
    <a class="btn text-xl btn-ghost" href="/">Avatar Mall</a>
  </div>
  <!-- <div class="form-control flex-1 m-4">
    <input type="text" placeholder="Search" class="input input-bordered w-full" />
  </div> -->
  <!-- Logged out items -->

  <div class="flex-none gap-2">
    {#if !data.user}
      <!-- <a href="/auth/login" class="btn btn-ghost">Login</a> -->
      {#each loggedOutMenuBar as item}
        <a href={item.href} class="btn btn-ghost">{item.name}</a>
      {/each}
    {:else}
      {#each loggedInMenuBar as item}
        <a href={item.href} class="btn btn-ghost">{item.name}</a>
      {/each}
    {/if}
  </div>

  {#if data.user}
    <UserMenu {data} />
  {/if}
</div>

<!-- <AppBar>
  <svelte:fragment slot="lead">
    <a href="/" class="text-xl uppercase">Avatar Mall</a>
  </svelte:fragment>

  <svelte:fragment slot="trail">
    {#if !data.user}
      {#each loggedOutMenuBar as link}
        <a href={link.href} class="btn btn-md {link.classes}">
          {link.name}
        </a>
      {/each}
    {:else}
      {#each loggedInMenuBar as link}
        <a href={link.href} class="btn btn-md {link.classes}">
          {link.name}
        </a>
      {/each}
      <button use:popup={userPopup} class="btn btn-md btn-icon variant-filled">
        <Avatar
          src="https://placewaifu.com/image/256?random={data.user.id}"
          rounded="rounded-full"
          cursor="cursor-pointer"
        />
      </button>

      <UserMenu {data} {debug} />
    {/if}
  </svelte:fragment>
</AppBar> -->
