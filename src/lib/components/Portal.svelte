<script lang="ts">
  // import { portal } from 'svelte-portal/src/Portal.svelte';
  import { portal } from '@svelteuidev/composables';

  export let target: string;
  let classes = '';
  export { classes as class };
</script>

<div id="portal-target" use:portal={target} class={classes} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
</style>
