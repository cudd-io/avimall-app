<script lang="ts">
  import { registerBreadcrumbs } from '$lib/context/breadcrumbs-context';

  registerBreadcrumbs([
    {
      name: 'Home',
      href: '/mall',
      icon: 'mdi:home',
    },
  ]);
</script>

<h2 class="text-2xl w-full text-center">Avatar Mall - Home</h2>

<p class="text-md card-glass p-4"><span class="font-bold">TODO:</span> Create home page</p>
