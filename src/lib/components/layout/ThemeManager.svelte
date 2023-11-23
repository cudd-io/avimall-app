<script lang="ts">
  import themeState from '$lib/stores/theme';
  import { onMount } from 'svelte';
  import dataTheme from '$lib/actions/theme';
  import { browser } from '$app/environment';

  const { initialize, setTheme, themes, theme, clearTheme } = themeState();

  if (browser) {
    initialize();
  }
</script>

<svelte:body use:dataTheme={$theme} />
