<!-- Avatars Shop -->

<script lang="ts">
  import Search from '$lib/components/layout/Search.svelte';
  import { setContext, getContext, onDestroy } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import { flip } from 'svelte/animate';
  import Icon from '@iconify/svelte';

  import type { BoothItem } from '$lib/types';
  import { Button } from '$lib/components/ui/button';
  import AvatarCard from '$lib/components/layout/mall/AvatarCard.svelte';
  import { getBreadcrumbsStore } from '$lib/context/breadcrumbs-context';
  import type { AvatarsResponseExpanded } from '$lib/types/data/api/avatars';

  export let data;

  $: ({ avatars } = data);

  $: ({ page, perPage, totalPages, totalItems } = avatars);

  const gridSteps = ['150px', '200px', '250px', '350px'];

  let currentGridSize = 1;

  $: console.log(currentGridSize);

  $: gridZoomOut = () => {
    console.log('decGridSize', currentGridSize, currentGridSize > 0);
    if (currentGridSize > 0) {
      currentGridSize--;
    }
  };

  $: gridZoomIn = () => {
    console.log('incGridSize', currentGridSize, currentGridSize < gridSteps.length - 1);
    if (currentGridSize < gridSteps.length - 1) {
      currentGridSize++;
    }
  };

  const breadcrumbs = getBreadcrumbsStore();

  $breadcrumbs = [
    {
      name: 'Home',
      href: '/',
      icon: 'mdi:home',
    },
    {
      name: 'Mall',
      href: '/mall',
      icon: 'mdi:store',
    },
    {
      name: 'Avatars',
      href: '/mall/avatars',
      icon: 'raphael:woman',
    },
  ];

  onDestroy(() => {
    $breadcrumbs = [];
  });

  let search = '';
</script>

<!-- Toolbar with grid size buttons and breadcrumbs -->
<div
  class="text-center h-auto bg-glass p-2 rounded-2xl text-neutral-content m-4 flex flex-row justify-start"
>
  <!-- searchbar -->
  <!-- <Input class="my-auto flex-1" bind:value={search} /> -->
  <Search />
  <div>
    <div class="text-center text-2xl w-full flex flex-row justify-end h-auto p-4 text-base-content">
      <Button
        class="btn-ghost btn-sm"
        name="sm"
        on:click={gridZoomOut}
        disabled={currentGridSize === 0}
      >
        <Icon class=" h-full w-full" icon="mdi:zoom-out" />
      </Button>
      <Button
        class="btn-ghost btn-sm"
        name="md"
        on:click={gridZoomIn}
        disabled={currentGridSize === gridSteps.length - 1}
      >
        <Icon class=" h-full w-full" icon="mdi:zoom-in" />
      </Button>
    </div>
  </div>
</div>

<section class="bg-glass m-4 rounded-2xl p-4">
  <h2 class="text-2xl mb-4">Avatars</h2>
  <ul
    class="h-auto grid gap-4"
    style={`
    grid-template-columns: repeat(auto-fit, minmax(${gridSteps[currentGridSize]}, 1fr));
  `}
  >
    {#each avatars.items as avatar, index (avatar.booth_id)}
      <li animate:flip>
        <AvatarCard {avatar} />
      </li>
    {/each}
  </ul>
</section>

<ol class="pagination join">
  <!-- pagination -->
  <li>
    <a href="/mall/avatars?page=0&limit={perPage}" class="join-item btn btn-ghost btn-sm">
      <Icon icon="mdi:chevron-double-left" />
    </a>
  </li>
  <li>
    <a
      href="/mall/avatars?page={page - 1}&limit={perPage}"
      class="join-item btn btn-ghost btn-sm"
      class:btn-disabled={page === 1}
    >
      <Icon icon="mdi:chevron-left" />
    </a>
  </li>
  {#each Array(totalPages) as _, i}
    <li>
      <a
        href="/mall/avatars?page={i + 1}&limit={perPage}"
        class="join-item btn btn-ghost btn-sm"
        class:btn-active={i + 1 === page}
      >
        {i + 1}
      </a>
    </li>
  {/each}
  <li>
    <a
      href="/mall/avatars?page={page + 1}&limit={perPage}"
      class="join-item btn btn-ghost btn-sm"
      class:btn-disabled={page === totalPages}
    >
      <Icon icon="mdi:chevron-right" />
    </a>
  </li>
  <li>
    <a
      href="/mall/avatars?page={totalPages}&limit={perPage}"
      class="join-item btn btn-ghost btn-sm"
    >
      <Icon icon="mdi:chevron-double-right" />
    </a>
  </li>
</ol>
