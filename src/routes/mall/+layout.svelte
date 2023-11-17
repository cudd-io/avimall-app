<script lang="ts">
  import { registerSidebar } from '$lib/stores/sidebar';
  import RailSidebar from '$lib/components/RailSidebar.svelte';

  registerSidebar(RailSidebar, {
    navLinks: [
      { name: 'Avatars', href: '/mall/avatars', icon: 'raphael:woman' },
      { name: 'Clothing', href: '/mall/clothing', icon: 'raphael:tshirt' },
      { name: 'Accessories', href: '/mall/accessories', icon: 'raphael:crown' },
      { name: 'Misc', href: '/mall/misc', icon: 'raphael:fullcube' },
    ],
  });
</script>

<slot />

<style lang="postcss">
</style>
