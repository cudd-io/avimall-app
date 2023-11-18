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
