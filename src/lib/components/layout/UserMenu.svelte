<script lang="ts">
  import type { MenuItem } from '$lib/types';
  // import { SlideToggle } from '@skeletonlabs/skeleton';
  import { Button } from '$lib/components/ui/button';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  export let data: any;

  const userMenu: MenuItem[] = [
    {
      name: 'Favorites',
      href: '/my/favorites',
    },
    {
      name: 'Profile',
      href: '/my/profile',
    },
    {
      name: 'Settings',
      href: '/my/settings',
    },
    {
      name: 'Logout',
      href: '/auth/logout',
    },
  ];

  // export let dataPopup: string = 'userPopup';

  export let open = false;

  let debug = false;
</script>

<DropdownMenu.Root bind:open>
  <DropdownMenu.Trigger class="btn btn-ghost btn-circle avatar mx-4 p-0" on:click>
    <img src="https://placewaifu.com/image/256" alt="" class="w-full rounded-full m-0" />
  </DropdownMenu.Trigger>
  <DropdownMenu.Content class="w-44">
    {#if !data.user.verified || debug}
      <DropdownMenu.Label class="text-sm text-center text-error-content bg-error rounded-lg mb-2"
        >Please check email to verify account</DropdownMenu.Label
      >
    {/if}
    <!-- <DropdownMenu.Label class="text-sm">My Account</DropdownMenu.Label> -->
    {#each userMenu as item}
      <DropdownMenu.Item href={item.href}>{item.name}</DropdownMenu.Item>
    {/each}
    <!-- <DropdownMenu.Item on:click={() => (debug = !debug)}>Debug</DropdownMenu.Item> -->
  </DropdownMenu.Content>
</DropdownMenu.Root>

<!-- User popup menu -->

<!-- <div class="flex-none gap-2">
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
      <div class="w-10 rounded-full">
        <img alt="User Avatar" src=" https://placewaifu.com/image/64" />
      </div>
    </label>
    <ul
      tabindex="0"
      class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
    >
      {#if !data.user.verified}
        <li>
          <span
            class="p-2 text-sm variant-filled-warning text-center w-full max-w-full min-w-full whitespace-nowrap mb-2"
          >
            Please check email to verify account
          </span>
        </li>
      {/if}
      {#each userMenu as link}
        <li>
          <a href={link.href} class={link.classes}>{link.name}</a>
        </li>
      {/each}
    </ul>
  </div>
</div> -->

<style lang="postcss">
</style>
