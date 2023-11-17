<script lang="ts">
  import Icon from '@iconify/svelte';
  import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';

  import type { MenuItem } from '$lib/types';

  export let navLinks: MenuItem[] = [];
</script>

<AppRail>
  <!-- <svelte:fragment slot="lead">
		<AppRailAnchor href="/" >(icon)</AppRailAnchor>
	</svelte:fragment> -->
  <!-- --- -->

  {#each navLinks as link, i}
    <AppRailAnchor
      class="text-center"
      bind:group={link.name}
      name={link.name}
      href={link.href}
      value={i}
      title={link.name}
    >
      <svelte:fragment slot="lead">
        {#if !link.icon || typeof link.icon === 'string'}
          <Icon icon={link.icon || 'mdi:home'} class="text-center w-full text-3xl" />
        {:else}
          <svelte:component this={link.icon} />
        {/if}
      </svelte:fragment>
      <span>{link.name}</span>
    </AppRailAnchor>
  {/each}

  <!-- <AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Tile 1</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Tile 2</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Tile 3</span>
	</AppRailTile> -->
  <!-- --- -->
  <!-- <svelte:fragment slot="trail">
    <AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
  </svelte:fragment> -->
</AppRail>

<style lang="postcss">
</style>
