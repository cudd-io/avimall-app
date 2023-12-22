<script lang="ts">
  import { registerBreadcrumbs } from '$lib/context/breadcrumbs-context';
  import type { PageData } from './$types';

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

  export let data: PageData;
</script>

<h2 class="text-2xl w-full text-center">Shops</h2>

<pre>
  <code>{JSON.stringify(data, null, 2)}</code>
</pre>

<style lang="postcss">
</style>
