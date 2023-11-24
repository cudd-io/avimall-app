<script lang="ts">
  import { type Writable } from 'svelte/store';
  import type { MenuItem } from '$lib/types';

  import { getContext, setContext } from 'svelte';
  import { fly } from 'svelte/transition';
  import { onNavigate } from '$app/navigation';

  import { getBreadcrumbsStore, initBreadcrumbs } from '$lib/context/breadcrumbs-context';
  import Breadcrumbs from '$lib/components/ui/breadcrumbs.svelte';
  import { RailSidebar, GlobalSidebar } from '$lib/components';

  let fromPath: string | undefined;
  let toPath: string | undefined;

  onNavigate(({ from, to }) => {
    fromPath = from?.url.pathname;
    toPath = to?.url.pathname;
  });

  export let data;

  const navLinks = [
    { name: 'Home', href: '/mall', icon: 'mdi:home' },
    { name: 'Avatars', href: '/mall/avatars', icon: 'raphael:woman' },
    { name: 'Clothing', href: '/mall/clothing', icon: 'raphael:tshirt' },
    { name: 'Accessories', href: '/mall/accessories', icon: 'raphael:crown' },
    { name: 'Misc', href: '/mall/misc', icon: 'raphael:fullcube' },
  ];

  $: fromIndex = navLinks.findIndex((link) => link.href === fromPath);
  $: toIndex = navLinks.findIndex((link) => link.href === toPath);

  let transitionDuration = 300;
  const transitions = {
    slideDown: {
      in: { y: -200, duration: transitionDuration, delay: transitionDuration },
      out: { y: 200, duration: transitionDuration },
    },
    slideUp: {
      in: { y: 200, duration: transitionDuration, delay: transitionDuration },
      out: { y: -200, duration: transitionDuration },
    },
  };

  $: transition = fromIndex < toIndex ? transitions.slideUp : transitions.slideDown;

  const addClassToPage = (className: string) => {
    const page = document.getElementById('page');
    page?.classList.add(className);
  };

  const removeClassFromPage = (className: string) => {
    const page = document.getElementById('page');
    page?.classList.remove(className);
  };

  initBreadcrumbs();
  const breadcrumbs = getContext<Writable<MenuItem[]>>('breadcrumbs');
</script>

<GlobalSidebar>
  <RailSidebar {navLinks} />
</GlobalSidebar>

<div class="bg-glass p-2 rounded-lg m-4">
  <Breadcrumbs links={$breadcrumbs}></Breadcrumbs>
</div>

{#key data.url}
  <div
    class="overflow-hidden"
    in:fly={transition.in}
    out:fly={transition.out}
    on:outrostart={() => addClassToPage('animating')}
    on:outroend={() => removeClassFromPage('animating')}
  >
    <slot />
  </div>
{/key}

<style lang="postcss">
  div {
    scrollbar-gutter: stable both-edges;
  }

  :global(#page.animating) {
    overflow: hidden;
  }
</style>
