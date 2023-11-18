<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { Footer, Header } from '$lib/layout';
  import { AppShell } from '@skeletonlabs/skeleton';
  import { sidebarOpen } from '$lib/stores/sidebar';
  import { page } from '$app/stores';

  export let data: any;
</script>

<AppShell>
  <div slot="header">
    <Header {data}></Header>
  </div>

  <svelte:fragment slot="sidebarLeft">
    <!-- A hidden placeholder so the slot renders -->
    <div id="sidebar-placeholder" class="hidden" role="presentation"></div>
  </svelte:fragment>

  <slot />

  <svelte:fragment slot="pageFooter">
    <Footer />
  </svelte:fragment>
</AppShell>
