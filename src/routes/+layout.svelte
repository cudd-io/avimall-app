<script lang="ts">
  import { Footer, Header } from '$lib/components/layout';
  import Shell from '$lib/components/layout/Shell.svelte';
  import { themeChange } from 'theme-change';

  onMount(() => {
    themeChange(false);
  });

  import '../app.postcss';

  // Floating UI for Popups
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  // import { storePopup } from '@skeletonlabs/skeleton';
  // storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  export let data;
</script>

<Shell {data}>
  <slot />
</Shell>
