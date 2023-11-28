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
  <DropdownMenu.Content class="w-44 card-glass-darker m-0 dark:text-neutral-content ">
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

<style lang="postcss">
</style>
