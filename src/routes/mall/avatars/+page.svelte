<!-- Avatars Shop -->

<script lang="ts">
  import Icon from '@iconify/svelte';

  // placeholder avatars until I set up the API
  const avatars = [
    {
      id: 1,
      name: 'Koyuki v1.04',
      description:
        'Avatars 3.0 compatible avatar with multiple toggles, including some more NSFW features.',
      image: 'https://placewaifu.com/image/512?random=1',
      tags: ['female', 'koyuki', 'avatars 3.0', 'nsfw'],
    },
    {
      id: 2,
      name: 'Kikyo',
      description: 'Kikyo avatar. Avatars 3.0 compatible.',
      image: 'https://placewaifu.com/image/512?random=2',
      tags: ['female', 'kikyo', 'nsfw', 'avatars 3.0'],
    },
    {
      id: 3,
      name: 'Echidna',
      description: 'Kaguya avatar. Avatars 3.0 compatible.',
      image: 'https://placewaifu.com/image/512?random=3',
      tags: ['female', 'kaguya', 'nsfw', 'avatars 3.0'],
    },
    {
      id: 4,
      name: 'Petra',
      description: 'Kanae avatar. Legacy 2.0 avatar',
      image: 'https://placewaifu.com/image/512?random=4',
      tags: ['female', 'kanae', 'nsfw', 'legacy'],
    },

    // I want a few male avatars here
    {
      id: 5,
      name: 'Subaru',
      description: 'Chase avatar. Legacy 2.0 avatar',
      image: 'https://placewaifu.com/image/512?random=5',
      tags: ['male', 'chase', 'nsfw', 'legacy'],
    },

    {
      id: 6,
      name: 'Erika',
      description: 'Kanade avatar. Legacy 2.0 avatar',
      image: 'https://placewaifu.com/image/512?random=6',
      tags: ['female', 'kanade', 'nsfw', 'avatars 3.0'],
    },

    {
      id: 7,
      name: 'Emilia',
      description: 'Kanade avatar. Legacy 2.0 avatar',
      image: 'https://placewaifu.com/image/512?random=7',
      tags: ['female', 'kanade', 'nsfw', 'avatars 3.0'],
    },

    {
      id: 8,
      name: 'Anastasia',
      description: 'Kanade avatar. Legacy 2.0 avatar',
      image: 'https://placewaifu.com/image/512?random=8',
      tags: ['female', 'kanade', 'nsfw', 'avatars 3.0'],
    },

    {
      id: 9,
      name: 'Kanade',
      description: 'Kanade avatar. Legacy 2.0 avatar',
      image: 'https://placewaifu.com/image/512?random=9',
      tags: ['male', 'kanade', 'nsfw', 'legacy'],
    },
  ];

  const gridSteps = [
    'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    'grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
    'grid-cols-4 md:grid-cols-5 lg:grid-cols-6',
    'grid-cols-5 md:grid-cols-6 lg:grid-cols-7',
    'grid-cols-6 md:grid-cols-7 lg:grid-cols-8',
    'grid-cols-7 md:grid-cols-8 lg:grid-cols-9',
    'grid-cols-8 md:grid-cols-9 lg:grid-cols-10',
  ];

  $: currentGridSize = 0;

  const decGridSize = () => {
    if (currentGridSize > 0) {
      currentGridSize--;
    }
  };

  const incGridSize = () => {
    if (currentGridSize < gridSteps.length - 1) {
      currentGridSize++;
    }
  };
</script>

<!-- {gridSize} | {gridSizeMd} -->
{currentGridSize}
<!-- Grid size buttons -->
<div class="text-center text-4xl w-full flex flex-row justify-end h-auto p-4">
  <button class="" name="sm" on:click={decGridSize}>
    <Icon class="" icon="mdi:grid-large" />
  </button>
  <button name="md" on:click={incGridSize}>
    <Icon class="" icon="mdi:grid" />
  </button>
</div>

<section class="h-auto grid {gridSteps[currentGridSize]} gap-4 p-4">
  {#each avatars as avatar}
    <a href="/mall/avatars/{avatar.id}">
      <img
        class="h-auto max-w-full rounded-lg"
        src={avatar.image + `?random2=${avatar.name}`}
        alt={avatar.name}
      />
      <span>{avatar.name}</span>
    </a>
    <!-- <img class="h-auto max-w-full rounded-lg" src={avatar.image} alt={avatar.name} />
    <div>{avatar.name}</div> -->
  {/each}
</section>

<style lang="postcss">
</style>
