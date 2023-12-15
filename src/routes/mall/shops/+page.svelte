<script lang="ts">
  import { registerBreadcrumbs } from '$lib/context/breadcrumbs-context';

  registerBreadcrumbs([
    {
      name: 'Home',
      href: '/mall',
      icon: 'mdi:home',
    },
    {
      name: 'Shops',
      href: '/mall/shops',
      icon: 'mdi:store',
    },
  ]);
</script>

<h2 class="text-2xl w-full text-center">Shops</h2>

<style lang="postcss">
</style>
