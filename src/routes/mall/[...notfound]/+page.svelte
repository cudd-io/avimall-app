<script lang="ts">
  import { registerBreadcrumbs } from '$lib/context/breadcrumbs-context';

  registerBreadcrumbs([
    {
      name: 'Home',
      href: '/mall',
      icon: 'mdi:home',
    },
    {
      name: 'Not found',
      href: '/mall',
      icon: 'material-symbols:error-outline',
    },
  ]);
</script>

<div class="card m-4 p-4 text-center justify-center container mx-auto">
  <h2 class="text-2xl w-full">404 - Page not found</h2>

  <div class="p-4">
    <p class="text-md">Sorry, that page could not be found. Perhaps it was moved or deleted?</p>
  </div>
  <img
    src="https://placewaifu.com/image/512?random={Math.floor(Math.random() * 10)}"
    alt="A random anime girl"
    width="512"
    class="block w-3xl my-4 card mx-auto"
  />
</div>
