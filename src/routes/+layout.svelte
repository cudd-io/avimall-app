<script lang="ts">
  import { Footer, Header } from '$lib/layout';
  import Shell from '$lib/layout/Shell.svelte';
  import '../app.postcss';

  // Floating UI for Popups
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
  // import { storePopup } from '@skeletonlabs/skeleton';
  // storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  export let data;
</script>

<Shell {data}>
  <slot />
</Shell>
