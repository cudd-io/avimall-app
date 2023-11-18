<script lang="ts">
  import type { MenuItem } from '$lib/types';
  // import { SlideToggle } from '@skeletonlabs/skeleton';

  export let data: any;

  const userMenu: MenuItem[] = [
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
</script>

<!-- User popup menu -->

<div class="flex-none gap-2">
  <div class="dropdown dropdown-end">
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
      <div class="w-10 rounded-full">
        <!-- placewaifu placeholder -->
        <img alt="User Avatar" src=" https://placewaifu.com/image/64" />
      </div>
    </label>
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
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
</div>

<style lang="postcss">
</style>
