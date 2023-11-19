<script lang="ts">
  import type { MenuItem } from '$lib/types';
  import Icon from '@iconify/svelte';

  export let link: MenuItem;
  export let active: boolean;
</script>

<a
  href={link.href}
  class="flex flex-col !text-[var(--item-text-color)] {link.classes ? link.classes : ''}"
  class:active-tab={active}
>
  {#if link.icon}
    <span
      class="bg-base-100 overflow-visible border-[3px] border-[var(--item-text-color)] rounded-full"
    >
      {#if typeof link.icon === 'string'}
        <Icon icon={link.icon} width="32" class="" />
      {:else}
        <svelte:component this={link.icon} />
      {/if}
    </span>
  {/if}
  <span>{link.name}</span>
</a>

<style>
  a {
    --item-text-color: oklch(var(--item-active-color));

    &:hover,
    &:focus,
    &:active,
    &.active-tab {
      --item-text-color: var(--item-active-color);
    }
  }
</style>
