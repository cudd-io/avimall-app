<script lang="ts">
  import type { MenuItem } from '$lib/types';
  import { cn } from '$lib/utils';
  import Icon from '@iconify/svelte';

  let className = '';
  export { className as class };

  export let links: MenuItem[] = [];
</script>

<div class={cn('text-sm breadcrumbs text-base-content', className)}>
  <ol>
    {#each links as link}
      <li>
        {#if link.icon}
          <Icon icon={`${link.icon}`} class="flex-shrink-0 mx-1" aria-hidden="true" />
        {/if}
        <a href={link.href}>{link.name}</a>
      </li>
    {/each}
  </ol>
</div>
