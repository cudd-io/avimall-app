<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import type { BoothItem } from '$lib/types';
  import { cn } from '$lib/utils';
  import { formatMoney } from '$lib/utils/money';
  import Icon from '@iconify/svelte';

  export let avatar: BoothItem;

  const setFavorite = (event: Event, newFavoriteValue: boolean | null = null) => {
    event.preventDefault();
    event.stopPropagation();

    favorite = newFavoriteValue ?? !favorite;
  };
  let favorite: boolean = false;

  $: formattedPrice = formatMoney(avatar.priceJPY, 'JPY');
</script>

<a
  href="/mall/avatars/{avatar.itemId}"
  class={cn(
    'group relative block rounded-2xl overflow-hidden',
    'aspect-square',
    'bg-contain bg-repeat-y  bg-left-top flex flex-col justify-between shadow-md shadow-purple-950/50',
    ' hover:shadow-lg hover:shadow-purple-950/50 border-0 dark:brightness-75 border-transparent hover:filter dark:hover:brightness-100'
  )}
  style="background-image: url('{avatar.mainImage}');"
>
  <!-- Price and Favorite Button -->
  <div class="px-2 m-0 w-full flex flex-row justify-between transition-all text-secondary">
    <div class="px-2 flex flex-col justify-center text-black">
      <span class="text-2xl text-center font-extrabold text-stroke-white text-stroke-[1px]"
        >{formattedPrice}</span
      >
    </div>
    <Button
      class="btn-ghost btn-md text-accent btn-circle hover:backdrop-blur-sm hover:bg-accent/30"
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
    <h3 class="text-xl font-medium">{avatar.title}</h3>

    <p class="mt-2 text-xs truncate max-h-64 flex-1">
      {avatar.description}
    </p>
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
