<!-- Avatars Shop -->

<script lang="ts">
  import AvatarCard from './../../../lib/components/layout/mall/AvatarCard.svelte';
  import { cn } from '$lib/utils';
  import Breadcrumbs from '$lib/components/ui/breadcrumbs.svelte';
  import Icon from '@iconify/svelte';
  import { Button } from '$lib/components/ui/button';
  import { AspectRatio } from '$lib/components/ui/aspect-ratio';
  import { flip } from 'svelte/animate';
  import type { BoothItem } from '$lib/types';

  // placeholder avatars until I set up the API
  const avatars: BoothItem[] = [
    {
      itemId: 1,
      title: 'Karin',
      description: '"Karin" -Karin- [Original 3D Model]',
      mainImage:
        'https://booth.pximg.net/61a3b2d7-b4b1-4f97-9e48-ffe959b26ae9/i/3470989/ddb3ab6a-af62-4b44-a51c-73e3585b911c_base_resized.jpg',
      tags: ['female', 'karin', 'avatars 3.0', 'nsfw'],
      priceJPY: 2000,
      type: 'avatar',
      nsfw: false,
      creator: 'empty',
      category: '209',
    },
    {
      itemId: 2,
      title: 'Kikyo',
      description: 'Original 3D Model "Kikyo"',
      mainImage:
        'https://booth.pximg.net/ed52788c-0b3b-4e38-9ded-1e5797daf0ef/i/3681787/e12ae034-4053-48a7-a27a-29f424677e64.png',
      tags: ['female', 'kikyo', 'nsfw', 'avatars 3.0'],
      priceJPY: 2000,
      type: 'avatar',
      nsfw: false,
      creator: 'empty',
      category: '209',
    },
    {
      itemId: 3,
      title: 'Maya',
      description: 'Original 3D Model "Maya" Ver.1.02.2.',
      mainImage:
        'https://booth.pximg.net/f420c992-4225-4ce0-b751-3a4acdceaab6/i/3390957/452e082f-67e8-480d-b697-9378977f41b0_base_resized.jpg',
      tags: ['female', 'maya', 'nsfw', 'avatars 3.0'],
      priceJPY: 2000,
      type: 'avatar',
      nsfw: false,
      creator: 'empty',
      category: '209',
    },
    {
      itemId: 4,
      title: 'Celestia',
      description: 'Original 3D Model "Celestia" ver1.02',
      mainImage:
        'https://booth.pximg.net/8a7426aa-ba62-4ef0-9e7d-2c8ea96e7c9b/i/4035411/6f839883-1ab0-48fa-bfca-10c73ab7a33d_base_resized.jpg',
      tags: ['female', 'celestia', 'nsfw', 'legacy'],
      priceJPY: 2000,
      type: 'avatar',
      nsfw: false,
      creator: 'empty',
      category: '209',
    },
    {
      itemId: 5,
      title: 'Manuka',
      description: 'Original 3D Model "Manuka" ver1.01.1',
      mainImage:
        'https://booth.pximg.net/8a7426aa-ba62-4ef0-9e7d-2c8ea96e7c9b/i/5058077/a18424fe-a56e-411a-9c47-27c56909593c.png',
      priceJPY: 2000,
      type: 'avatar',
      nsfw: false,
      creator: 'empty',
      category: '209',
    },

    {
      itemId: 6,
      title: 'Rusk',
      description: '"Rusk" -Rusk- [Quest / PC compatible original 3D model]',
      mainImage:
        'https://booth.pximg.net/61a3b2d7-b4b1-4f97-9e48-ffe959b26ae9/i/2559783/28f1cc6b-16aa-446f-947d-fb10f48bb250.png',
      priceJPY: 2000,
      type: 'avatar',
      nsfw: false,
      creator: 'empty',
      category: '209',
    },

    {
      itemId: 7,
      title: 'Moe',
      description: 'Original 3D Model "Moe" Ver.1.02.1',
      mainImage:
        'https://booth.pximg.net/f420c992-4225-4ce0-b751-3a4acdceaab6/i/4667400/1641b18e-eb97-4cbe-85fd-0f04cd53b46a.png',
      priceJPY: 2000,
      type: 'avatar',
      nsfw: false,
      creator: 'empty',
      category: '209',
      tags: ['female', 'kanade', 'nsfw', 'avatars 3.0'],
    },

    {
      itemId: 8,
      title: 'Rindo',
      description: 'Original 3D Model "Rindo" ver1.08',
      mainImage:
        'https://booth.pximg.net/8a7426aa-ba62-4ef0-9e7d-2c8ea96e7c9b/i/3443188/0d655d88-23b0-4e23-a2ab-0e42244abd03.png',
      priceJPY: 2000,
      type: 'avatar',
      nsfw: false,
      creator: 'empty',
      category: '209',
      tags: ['female', 'nsfw', 'avatars 3.0'],
    },

    {
      itemId: 9,
      title: 'Koyuki',
      description: 'Original 3D Model "Koyuki" Ver.1.05',
      mainImage:
        'https://booth.pximg.net/f420c992-4225-4ce0-b751-3a4acdceaab6/i/2554585/b1d455ae-f621-4d5e-b8d3-429c366cabc2_base_resized.jpg',
      tags: ['female', 'kanade', 'nsfw', 'legacy'],
      priceJPY: 2000,
      type: 'avatar',
      nsfw: false,
      creator: 'empty',
      category: '209',
    },
  ];

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
    {#each avatars as avatar, index (avatar.itemId)}
      <li animate:flip>
        <AvatarCard {avatar}></AvatarCard>
      </li>
    {/each}
  </ul>
</section>
