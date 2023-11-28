<script lang="ts">
  import { cn } from '$lib/utils';
  import { Button } from '$lib/components/ui/button';
  import { getBreadcrumbsStore } from '$lib/context/breadcrumbs-context';
  import type { BoothItemApiResponse } from '$lib/types/booth/api-types';
  import Icon from '@iconify/svelte';
  import { onDestroy } from 'svelte';

  export let data;

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
    {
      name: data.avatar.name,
      href: `/mall/avatars/${data.avatar.booth_id}`,
    },
  ];

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

<!-- Avatar Info -->
<!-- <h2 class="text-2xl w-full text-center">{data.avatar.name}</h2> -->

<article
  class=" grid grid-cols-1 md:grid-cols-[3fr_1fr] lg:grid-cols-[3fr_1fr] lg:card-glass max-w-5xl lg:mx-auto"
>
  <section class="m-2">
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
  <aside class="card-glass h-fit m-2">
    <h3 class="text-xl font-medium text-center mb-2 text-base-content">{boothItem?.name}</h3>

    <img class="rounded-xl" src={boothData.images[0].original} alt={boothData.images[0].caption} />

    <div class="w-full join p-2 flex flex-row justify-between">
      <Button
        class="btn-ghost p-1 btn-md join-item text-error  hover:backdrop-blur-sm "
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
</article>

<!-- <pre class="card-glass">
  <code>
    {JSON.stringify(data, null, 2)}
  </code>
</pre> -->

<style lang="postcss">
</style>
