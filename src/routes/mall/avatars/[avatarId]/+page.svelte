<script lang="ts">
  import { cn } from '$lib/utils';
  import { Button } from '$lib/components/ui/button';
  import { registerBreadcrumbs } from '$lib/context/breadcrumbs-context';
  import type { BoothItemApiResponse } from '$lib/types/booth/api-types';
  import Icon from '@iconify/svelte';

  export let data;

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
    {
      name: data.avatar.name,
      href: `/mall/avatars/${data.avatar.booth_id}`,
    },
  ]);

  $: boothData = data.avatar.expand?.booth_item?.booth_data as any as BoothItemApiResponse;
  $: images = boothData.images;

  $: boothItem = data.avatar.expand?.booth_item;

  let favorite = false;
  let owned = false;
  let wishlisted = false;

  let activeImage = 0;

  $: hovered = Array.from({ length: images.length }, () => false);

  $: isHovered = (i: number) => hovered[i];
</script>

<article class="grid md:card-glass max-w-6xl xl:mx-auto">
  <aside class="md:card-glass h-fit m-2" style="grid-area: s;">
    <h3 class="text-3xl md:text-xl font-medium text-center mb-2 text-base-content">
      {boothItem?.name}
    </h3>

    <img
      class="rounded-xl max-md:hidden"
      src={boothData.images[0].original}
      alt={boothData.images[0].caption}
    />

    <div class="w-full join p-2 flex flex-row justify-end md:justify-between">
      <Button
        class={cn('btn-ghost p-1 btn-md join-item text-base-content hover:backdrop-blur-sm', {
          'text-error': favorite,
        })}
        on:click={() => (favorite = !favorite)}
      >
        <Icon
          class="icon w-full h-full stroke-base-100"
          icon={favorite ? 'mdi:heart' : 'mdi:heart-outline'}
        />
      </Button>

      <Button
        class={cn('btn-ghost p-1 btn-md join-item text-base-content hover:backdrop-blur-sm', {
          'text-success': wishlisted,
        })}
        on:click={() => (wishlisted = !wishlisted)}
      >
        <Icon
          class="icon w-full h-full stroke-base-100"
          icon={wishlisted ? 'material-symbols:bookmark-added' : 'material-symbols:bookmark-add'}
        />
      </Button>
      <Button
        class={cn('btn-ghost p-1 btn-md join-item text-base-content hover:backdrop-blur-sm', {
          'text-success': owned,
        })}
        on:click={() => (owned = !owned)}
      >
        <Icon
          class="icon w-full h-full stroke-base-100"
          icon={owned ? 'mdi:cart-check' : 'mdi:cart'}
        />
      </Button>
    </div>

    <!-- Avatar Info -->
    <div class="w-full p-2">
      <!-- <p class="mt-2 text-xs truncate max-h-64 flex-1">
      {@html boothItem?.description}
    </p> -->
    </div>
  </aside>
  <section class="m-2" style="grid-area: m;">
    <img
      class="rounded-xl w-full aspect-square"
      src={images[activeImage].original}
      style="background-image: url({images[activeImage].resized}); background-size: cover;"
      alt={images[activeImage].caption}
    />
    <!-- image gallery -->
    <ul class="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1 py-2 w-full">
      {#each images as image, i}
        <li
          class="aspect-square"
          on:mouseenter={() => {
            console.log('mouseenter');
            hovered[images.indexOf(image)] = true;
          }}
          on:mouseleave={() => {
            hovered[images.indexOf(image)] = false;
          }}
        >
          <Button
            class="aspect-square p-0 m-0  w-full h-full hover:scale-110 rounded-xl overflow-hidden"
            on:click={() => {
              activeImage = images.indexOf(image);
            }}
          >
            <!-- Change to original image on hover in order to preload the image -->
            <img
              class="w-full h-full"
              src={hovered[i] ? image.original : image.resized}
              alt={image.caption}
              style="background-image: url({image.resized}); background-size: cover;"
            />
          </Button>
        </li>
      {/each}
    </ul>
  </section>
</article>

<style lang="postcss">
  article {
    display: grid;

    grid-template-areas:
      's'
      'm';

    @media (min-width: 768px) {
      grid-template-areas:
        'm m m m s'
        'm m m m s';
    }
  }
</style>
