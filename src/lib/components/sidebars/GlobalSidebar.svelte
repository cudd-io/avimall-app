<!--
@component

Renders a global sidebar that can be toggled open and closed

- Props:
  - `target` (string): The CSS selector of the target element where the sidebar will be rendered
  - `rootPath` (string): The root path of the layout component. The sidebar will open when navigating away from this path and close when navigating back to it.
-->

<script lang="ts">
  import { afterNavigate, beforeNavigate } from '$app/navigation';
  import { onMount } from 'svelte';
  import { Portal } from '$lib/components';

  import { slide, fly } from 'svelte/transition';
  import { sidebarOpen } from '$lib/stores/sidebar';

  export let target: string = '#sidebar-left';

  export let rootPath: string = '/mall';

  onMount(() => {
    $sidebarOpen = true;
  });

  afterNavigate(({ from }) => {
    // Navigate from anything else to rootPath: open the sidebar
    if (!from) return;
    if (from.url.pathname.startsWith(rootPath)) return;
    $sidebarOpen = true;
  });

  beforeNavigate(({ to, cancel }) => {
    // Navigate from rootPath to anything else: close the sidebar
    if (!to) return;
    if (to.url.pathname.startsWith(rootPath)) return;
    $sidebarOpen = false;
  });
</script>

<!-- <button on:click={() => ($sidebarOpen = !$sidebarOpen)}>toggle sidebar: {$sidebarOpen}</button> -->
{#if $sidebarOpen}
  <Portal {target} class="h-full">
    <div
      class="h-full"
      in:slide|local={{ duration: 300, axis: 'x' }}
      out:fly|local={{ x: -200, duration: 300 }}
    >
      <slot />
    </div>
  </Portal>
{/if}
