<!-- Avatars Shop -->

<script lang="ts">
  import { cn } from '$lib/utils';
  import Breadcrumbs from '$lib/components/ui/breadcrumbs.svelte';
  import Icon from '@iconify/svelte';
  import { Button } from '$lib/components/ui/button';
  import { AspectRatio } from '$lib/components/ui/aspect-ratio';

  // placeholder avatars until I set up the API
  const avatars = [
    {
      id: 1,
      name: 'Karin',
      description: '"Karin" -Karin- [Original 3D Model]',
      image:
        'https://booth.pximg.net/61a3b2d7-b4b1-4f97-9e48-ffe959b26ae9/i/3470989/ddb3ab6a-af62-4b44-a51c-73e3585b911c_base_resized.jpg',
      tags: ['female', 'karin', 'avatars 3.0', 'nsfw'],
      isFavorite: true,
    },
    {
      id: 2,
      name: 'Kikyo',
      description: 'Original 3D Model "Kikyo"',
      image:
        'https://booth.pximg.net/ed52788c-0b3b-4e38-9ded-1e5797daf0ef/i/3681787/e12ae034-4053-48a7-a27a-29f424677e64.png',
      tags: ['female', 'kikyo', 'nsfw', 'avatars 3.0'],
      isFavorite: true,
    },
    {
      id: 3,
      name: 'Maya',
      description: 'Original 3D Model "Maya" Ver.1.02.2.',
      image:
        'https://booth.pximg.net/f420c992-4225-4ce0-b751-3a4acdceaab6/i/3390957/452e082f-67e8-480d-b697-9378977f41b0_base_resized.jpg',
      tags: ['female', 'maya', 'nsfw', 'avatars 3.0'],
      isFavorite: false,
    },
    {
      id: 4,
      name: 'Celestia',
      description: 'Original 3D Model "Celestia" ver1.02',
      image:
        'https://booth.pximg.net/8a7426aa-ba62-4ef0-9e7d-2c8ea96e7c9b/i/4035411/6f839883-1ab0-48fa-bfca-10c73ab7a33d_base_resized.jpg',
      tags: ['female', 'celestia', 'nsfw', 'legacy'],
      isFavorite: true,
    },
    {
      id: 5,
      name: 'Manuka',
      description: 'Original 3D Model "Manuka" ver1.01.1',
      image:
        'https://booth.pximg.net/8a7426aa-ba62-4ef0-9e7d-2c8ea96e7c9b/i/5058077/a18424fe-a56e-411a-9c47-27c56909593c.png',
      isFavorite: false,
    },

    {
      id: 6,
      name: 'Rusk',
      description: '"Rusk" -Rusk- [Quest / PC compatible original 3D model]',
      image:
        'https://booth.pximg.net/61a3b2d7-b4b1-4f97-9e48-ffe959b26ae9/i/2559783/28f1cc6b-16aa-446f-947d-fb10f48bb250.png',
      isFavorite: false,
    },

    {
      id: 7,
      name: 'Moe',
      description: 'Original 3D Model "Moe" Ver.1.02.1',
      image:
        'https://booth.pximg.net/f420c992-4225-4ce0-b751-3a4acdceaab6/i/4667400/1641b18e-eb97-4cbe-85fd-0f04cd53b46a.png',
      tags: ['female', 'kanade', 'nsfw', 'avatars 3.0'],
      isFavorite: true,
    },

    {
      id: 8,
      name: 'Rindo',
      description: 'Original 3D Model "Rindo" ver1.08',
      image:
        'https://booth.pximg.net/8a7426aa-ba62-4ef0-9e7d-2c8ea96e7c9b/i/3443188/0d655d88-23b0-4e23-a2ab-0e42244abd03.png',
      tags: ['female', 'nsfw', 'avatars 3.0'],
    },

    {
      id: 9,
      name: 'Koyuki',
      description: 'Original 3D Model "Koyuki" Ver.1.05',
      image:
        'https://booth.pximg.net/f420c992-4225-4ce0-b751-3a4acdceaab6/i/2554585/b1d455ae-f621-4d5e-b8d3-429c366cabc2_base_resized.jpg',
      tags: ['female', 'kanade', 'nsfw', 'legacy'],
    },
  ];

  // const gridSteps = [
  //   'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  //   'grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
  //   'grid-cols-4 md:grid-cols-5 lg:grid-cols-6',
  //   'grid-cols-5 md:grid-cols-6 lg:grid-cols-7',
  //   'grid-cols-6 md:grid-cols-7 lg:grid-cols-8',
  //   'grid-cols-7 md:grid-cols-8 lg:grid-cols-9',
  //   'grid-cols-8 md:grid-cols-9 lg:grid-cols-10',
  // ];

  const maxGridSize = 12;
  const minGridSize = 3;

  const generateGridSteps = (mdSize: number) => {
    // clamp mdSize between minGridSize and maxGridSize
    mdSize = Math.max(minGridSize, Math.min(maxGridSize, mdSize));
    return `grid-cols-${mdSize - 1} md:grid-cols-${mdSize} lg:grid-cols-${mdSize + 1}`;
  };

  let currentGridSize = 3;

  const decGridSize = () => {
    if (currentGridSize > minGridSize) {
      currentGridSize--;
    }
  };

  const incGridSize = () => {
    if (currentGridSize < maxGridSize) {
      currentGridSize++;
    }
  };

  const breadcrumbs = [
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

  const setFavorite = (event: Event, avatarIndex: number, favorite: boolean | undefined) => {
    event.preventDefault();
    event.stopPropagation();
    if (favorite === undefined) {
      return (avatars[avatarIndex].isFavorite = !avatars[avatarIndex].isFavorite);
    }
    avatars[avatarIndex].isFavorite = favorite;
  };
</script>

<!-- Toolbar with grid size buttons and breadcrumbs -->
<div
  class="text-center h-auto bg-glass p-2 rounded-2xl text-neutral-content m-4 flex flex-row justify-between"
>
  <div class="flex-1 my-auto">
    <Breadcrumbs links={breadcrumbs}></Breadcrumbs>
  </div>
  <div>
    <div class="text-center text-2xl w-full flex flex-row justify-end h-auto p-4 text-base-content">
      <Button class="btn-ghost btn-sm" name="sm" on:click={incGridSize}>
        <Icon class=" h-full w-full" icon="mdi:zoom-out" />
      </Button>
      <Button class="btn-ghost btn-sm" name="md" on:click={decGridSize}>
        <Icon class=" h-full w-full" icon="mdi:zoom-in" />
      </Button>
    </div>
  </div>
</div>

<section class="bg-glass m-4 rounded-2xl p-4">
  <h2 class="text-2xl mb-4">Avatars</h2>
  <ul class="h-auto grid {generateGridSteps(currentGridSize)} gap-4">
    {#each avatars as avatar, index}
      <a
        href="/mall/avatars/{avatar.id}"
        class={cn(
          'group relative block rounded-2xl overflow-hidden',
          // 'w-full h-auto sm:h-72 lg:h-96',
          'aspect-square',
          'bg-contain bg-repeat-y  bg-left-top flex flex-col justify-between shadow-md',
          'transition-all hover:shadow-xl'
        )}
        style="background-image: url('{avatar.image}');"
      >
        <div aria-hidden></div>

        <div
          class="w-full bg-base-100/75 p-2 backdrop-blur-md text-base-content h-[35%] flex flex-col"
        >
          <h3 class="text-xl font-medium">{avatar.name}</h3>

          <p class="mt-2 text-xs truncate max-h-64 flex-1">
            {avatar.description}
          </p>
          <!-- buttons -->
          <div class="m-0 w-full flex flex-row justify-end">
            <!-- favorite button -->
            {#if avatar.isFavorite}
              <Button
                class="btn-ghost btn-xs"
                on:click={(event) => setFavorite(event, index, false)}
              >
                <Icon class="w-full h-full" icon="mdi:heart" />
              </Button>
            {:else}
              <Button
                class="btn-ghost btn-xs"
                on:click={(event) => setFavorite(event, index, true)}
              >
                <Icon class="w-full h-full" icon="mdi:heart-outline" />
              </Button>
            {/if}
          </div>
          <!-- <span class="btn btn-ghost"> Shop Now </span> -->
        </div>
      </a>
    {/each}
  </ul>
</section>

<style lang="postcss">
</style>
