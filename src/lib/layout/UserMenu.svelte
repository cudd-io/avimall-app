<script lang="ts">
  import type { MenuItem } from '$lib/types';
  import { SlideToggle } from '@skeletonlabs/skeleton';

  export let data: any;
  export let debug = false;

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

  export let dataPopup: string = 'userPopup';
</script>

<!-- User popup menu -->

<div class="card p-4 w-72 shadow-xl" data-popup={dataPopup}>
  <div class="arrow bg-surface-100-800-token" />
  <ul class="p-2 list-nav">
    {#if !data.user.verified}
      <li>
        <span
          class="p-2 text-sm rounded-container-token variant-filled-warning text-center w-full max-w-full min-w-full whitespace-nowrap mb-2"
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

    <li class="w-full">
      <label class="m-4 w-full flex flex-row justify-between" for="debug">
        <span>Debug</span>
        <SlideToggle bind:checked={debug} name="debug" />
      </label>
    </li>
  </ul>
</div>

<style lang="postcss">
</style>
