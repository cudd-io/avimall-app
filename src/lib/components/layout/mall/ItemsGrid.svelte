<!-- Avatars Shop -->

<script lang="ts">
  import {
    instanceOfAvatarsResponseExpanded,
    type AccessoriesResponseExpanded,
    type AvatarsResponseExpanded,
    type ItemsResponseExpanded,
    instanceOfItemsResponseExpanded,
  } from '$lib/types/data/api/avatars';
  import { flip } from 'svelte/animate';
  import ItemCard from '$lib/components/layout/mall/ItemCard.svelte';
  import { clamp } from '@svelteuidev/composables';
  import type { ItemsResponse } from '$lib/types/data/pocketbase-types';
  import { ArrowDown, ArrowUp } from 'lucide-svelte';

  type ItemType = AvatarsResponseExpanded | ItemsResponseExpanded | AccessoriesResponseExpanded;
  export let items: ItemType[];

  $: getBoothItem = (item: ItemType): ItemsResponse | ItemsResponseExpanded => {
    if (instanceOfAvatarsResponseExpanded(item as AvatarsResponseExpanded)) {
      let itemAsAvatarResponse = item as AvatarsResponseExpanded;
      return itemAsAvatarResponse.expand!.booth_item;
    }

    if (instanceOfItemsResponseExpanded(item as ItemsResponseExpanded)) {
      let itemAsItemResponse = item as ItemsResponseExpanded;
      return itemAsItemResponse;
    }

    let itemAsAccessoryResponse = item as AccessoriesResponseExpanded;
    return itemAsAccessoryResponse.expand!.booth_item;
  };

  export let gridSteps = ['150px', '200px', '250px', '350px'];
  export let gridZoomLevel = 1;
  let clampedGridZoomLevel = gridZoomLevel;

  const clamGridZoomLevel = (gridZoomLevel: number) => {
    clampedGridZoomLevel = clamp({
      value: gridZoomLevel,
      min: 0,
      max: gridSteps.length - 1,
    });
  };

  $: clamGridZoomLevel(gridZoomLevel);
</script>

<!-- Sort buttons -->

<ul
  class="h-auto grid gap-4"
  style={`
    grid-template-columns: repeat(auto-fit, minmax(${gridSteps[clampedGridZoomLevel]}, 1fr));
  `}
>
  {#each items as item, index (item.booth_id)}
    <li animate:flip>
      <ItemCard item={getBoothItem(item)} />
    </li>
  {/each}
</ul>
