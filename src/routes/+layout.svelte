<script lang="ts">
  import { Footer, Header } from '$lib/components/layout';
  import Shell from '$lib/components/layout/Shell.svelte';
  import ThemeManager from '$lib/components/layout/theme/ThemeManager.svelte';
  import { fade, fly } from 'svelte/transition';

  import '../app.postcss';

  export let data;

  const excludeFromTransition = ['/mall'];

  const transitionDuration = 200;

  const transitionOnPage = (url: string) => {
    const exclude = excludeFromTransition.reduce((acc, curr) => {
      if (url.includes(curr)) {
        acc = true;
      }
      return acc;
    }, false);

    return !exclude;
  };

  $: shouldTransition = transitionOnPage(data.url);
</script>

<ThemeManager />
<Shell {data}>
  {#if shouldTransition}
    {#key data.url}
      <div
        in:fade={{ duration: transitionDuration, delay: transitionDuration }}
        out:fade={{ duration: transitionDuration }}
      >
        <slot />
      </div>
    {/key}
  {:else}
    <slot />
  {/if}
</Shell>
