<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import type { BoothItem } from '$lib/types';
  import type { BoothItemApiResponse } from '$lib/types/booth/api-types';
  import type {
    AvatarsResponse,
    CategoriesResponse,
    ItemsResponse,
    ShopsResponse,
    UsersResponse,
  } from '$lib/types/data/pocketbase-types';
  import { cn } from '$lib/utils';
  import { formatMoney } from '$lib/utils/money';
  import Icon from '@iconify/svelte';

  type TExpand = {
    booth_item: ItemsResponse;
    shop: ShopsResponse;
    category: CategoriesResponse;
    imported_by: UsersResponse;
  };

  type AvatarsResponseExpanded = AvatarsResponse<TExpand>;

  export let avatar: AvatarsResponseExpanded;

  const setFavorite = (event: Event, newFavoriteValue: boolean | null = null) => {
    event.preventDefault();
    event.stopPropagation();

    favorite = newFavoriteValue ?? !favorite;
  };
  let favorite: boolean = false;

  // $: formattedPrice = formatMoney(avatar., 'JPY');
  const boothData: BoothItemApiResponse = avatar.expand?.booth_item
    ?.booth_data as any as BoothItemApiResponse;
  $: formattedPrice = formatMoney(avatar.expand?.booth_item?.price ?? 0, 'JPY');
</script>

<a
  href="/mall/avatars/{avatar.booth_id}"
  class={cn(
    'group relative block rounded-2xl overflow-hidden',
    'aspect-[4/5]',
    'bg-contain bg-repeat-y bg-left-top flex flex-col justify-between shadow-md shadow-purple-950/50',
    'hover:shadow-lg hover:shadow-purple-950/50 border-0 dark:brightness-75 border-transparent hover:filter dark:hover:brightness-100',
    'hover:scale-105'
  )}
  style="background-image: url('{boothData.images[0].original}');"
>
  <!-- Price and Favorite Button -->
  <div class="px-2 m-0 w-full flex flex-row justify-between transition-all text-secondary">
    <div class="px-2 flex flex-col justify-center text-black">
      <span class="text-2xl text-center font-extrabold text-stroke-white text-stroke-[1px]"
        >{formattedPrice}</span
      >
    </div>
    <Button
      class="btn-ghost btn-md text-error btn-circle hover:backdrop-blur-sm hover:bg-error/30"
      on:click={(event) => setFavorite(event)}
    >
      <Icon
        class="icon w-full h-full stroke-white"
        icon={favorite ? 'mdi:heart' : 'mdi:heart-outline'}
      />
    </Button>
  </div>

  <!-- Card Info -->
  <div class="w-full p-2 bg-base-100/50 backdrop-blur-md text-base-content h-[35%] flex flex-col">
    <h3 class="text-xl font-medium">{avatar.name}</h3>

    <!-- <p class="mt-2 text-xs truncate max-h-64 flex-1">
      {@html avatar.expand?.booth_item.description}
    </p> -->
  </div>
</a>

<style lang="postcss">
  a {
    container-type: size;
    /* springy shadow transition */
    transition: ease-out 0.2s;
    /* transition:  0.3s; */
  }

  @container (max-width: 200px) {
    h3 {
      font-size: 1rem;
      margin: auto 0;
      font-weight: 900;
    }

    p {
      display: none;
    }
  }

  @container (min-width: 450px) {
    h3 {
      font-size: 1.5rem;
      margin: 1rem;
    }

    p {
      font-size: 1.25rem;
      margin: 0 1rem;
    }
  }
</style>
