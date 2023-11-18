<script lang="ts">
  import { afterNavigate, beforeNavigate } from '$app/navigation';
  import { onMount } from 'svelte';
  import Portal from './Portal.svelte';

  // import { portal } from 'svelte-portal/src/Portal.svelte';
  // import { Portal } from '@svelteuidev/core';
  import { slide, fly } from 'svelte/transition';
  import { sidebarOpen } from '$lib/stores/sidebar';

  export let target: string = '#sidebar-left';
  export let rootPath: string = '/mall';

  // $sidebarOpen = true;
  // let key: any = {};
  onMount(() => {
    $sidebarOpen = true;
  });

  afterNavigate(({ from }) => {
    // Navigate from anything else to rootPath: open the sidebar
    if (!from) return;
    if (from.url.pathname.startsWith(rootPath)) return;
    console.log({ from });
    $sidebarOpen = true;
  });

  beforeNavigate(({ to, cancel }) => {
    // Navigate from rootPath to anything else: close the sidebar
    if (!to) return;
    if (to.url.pathname.startsWith(rootPath)) return;
    console.log({ to });
    $sidebarOpen = false;
    // key = to.route.id;
    // console.log({ $sidebarOpen });

    // cancel();
  });
</script>

<button on:click={() => ($sidebarOpen = !$sidebarOpen)}>toggle sidebar: {$sidebarOpen}</button>
{#if $sidebarOpen}
  <Portal {target} class="h-full">
    <div
      class="h-full bg-red-50"
      in:slide|local={{ duration: 300, axis: 'x' }}
      out:fly|local={{ x: -200, duration: 300 }}
    >
      <slot />
    </div>
  </Portal>
{/if}
