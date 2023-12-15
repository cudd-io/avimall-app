<!-- Avatars Shop -->

<script lang="ts">
  import Pagination from './../../../lib/components/ui/pagination.svelte';
  import Search from '$lib/components/layout/Search.svelte';
  import { registerBreadcrumbs } from '$lib/context/breadcrumbs-context';
  import { fade } from 'svelte/transition';
  import ItemsGrid from '$lib/components/layout/mall/ItemsGrid.svelte';

  export let data;

  $: ({ avatars } = data);

  $: ({ page, perPage, totalPages } = avatars);

  registerBreadcrumbs([
    {
      name: 'Home',
      href: '/mall',
      icon: 'mdi:home',
    },
    {
      name: 'Avatars',
      href: '/mall/avatars',
      icon: 'raphael:woman',
    },
  ]);

  let transitionDuration = 250;
</script>

<!-- Toolbar with grid size buttons and breadcrumbs -->
<div class="card-glass px-4 text-center h-auto text-neutral-content flex flex-row justify-start">
  <!-- searchbar -->
  <!-- <Input class="my-auto flex-1" bind:value={search} /> -->
  <Search />
  <div>
    <!-- <div class="text-center text-2xl w-full flex flex-row justify-end h-auto p-4 text-base-content">

    </div> -->
  </div>
</div>

{#key page}
  <section
    class="card-glass p-4"
    in:fade={{ duration: transitionDuration, delay: transitionDuration }}
    out:fade={{ duration: 0 }}
  >
    <ItemsGrid items={avatars.items} />
  </section>
{/key}

<Pagination class="card-glass" currentPage={page} {perPage} {totalPages} />
