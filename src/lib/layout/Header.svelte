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
  ];
</script>

<AppBar>
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
</AppBar>
