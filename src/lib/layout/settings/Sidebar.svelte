<script lang="ts">
  import type { MenuItem } from '$lib/types';
  import Icon from '@iconify/svelte';

  export let navLinks: MenuItem[] = [];
</script>

<!-- Settings Sidebar -->

<nav
  class="
    list-nav
    px-4 py-4
    flex flex-col h-full
    text-center
    text-lg
    bg-surface-100-800-token
  "
>
  <ul class="h-full flex flex-col text-xl text-left">
    {#each navLinks as link}
      <li class="w-full">
        <a class="w-full" href={link.href}>
          {#if link.icon}
            <span class="">
              {#if typeof link.icon === 'string'}
                <Icon icon={link.icon} class="text-4xl" />
              {:else}
                <svelte:component this={link.icon} />
              {/if}
            </span>
          {/if}
          <span class="flex-auto">{link.name}</span>
          <!-- {link.name} -->
        </a>
      </li>
    {/each}
  </ul>
</nav>
