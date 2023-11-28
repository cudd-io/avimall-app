<script lang="ts">
  import { getBreadcrumbsStore } from '$lib/context/breadcrumbs-context';

  const breadcrumbs = getBreadcrumbsStore();

  $breadcrumbs = [
    {
      name: 'Home',
      href: '/',
      icon: 'mdi:home',
    },
    {
      name: 'Mall',
      href: '/mall',
      icon: 'mdi:store',
    },
  ];
</script>

<h2 class="text-2xl w-full text-center">Avatar Mall - Home</h2>

<p class="text-md card-glass p-4"><span class="font-bold">TODO:</span> Create home page</p>
