<script lang="ts">
  import { RailSidebar, GlobalSidebar } from '$lib/components';

  import { onNavigate } from '$app/navigation';
  import { fly } from 'svelte/transition';
  import { page } from '$app/stores';

  let fromPath: string | undefined;
  let toPath: string | undefined;

  onNavigate(({ from, to }) => {
    fromPath = from?.url.pathname;
    toPath = to?.url.pathname;

    // if (!document.startViewTransition) return;
    // return new Promise((resolve) => {
    //   document.startViewTransition(async () => {
    //     resolve();
    //     await navigation.complete;
    //   });
    // });
  });

  export let data;

  const navLinks = [
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
</script>

<GlobalSidebar>
  <RailSidebar {navLinks} />
</GlobalSidebar>

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
