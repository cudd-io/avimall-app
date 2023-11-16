<script lang="ts">
  import { writable } from 'svelte/store';
  import { Footer, Header } from '$lib/layout';
  import { AppShell } from '@skeletonlabs/skeleton';
  import type { ComponentType, SvelteComponent } from 'svelte';

  import { currentSidebar } from '$lib/stores/sidebar';
  export let data: any;

  // export let sidebarComponent: ComponentType<SvelteComponent> | null = null;
</script>

<!-- App Shell -->
<AppShell>
  <svelte:fragment slot="header">
    <Header {data}></Header>
  </svelte:fragment>

  <svelte:fragment slot="sidebarLeft">
    {#if $currentSidebar}
      <svelte:component this={$currentSidebar.component} {...$currentSidebar.props} />
    {/if}
  </svelte:fragment>

  <slot />

  <svelte:fragment slot="pageFooter">
    <Footer />
  </svelte:fragment>
</AppShell>
