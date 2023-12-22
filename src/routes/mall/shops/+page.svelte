<script lang="ts">
  import { invalidate } from '$app/navigation';
  import { registerBreadcrumbs } from '$lib/context/breadcrumbs-context';
  import type { PageData } from './$types';

  type ImportStatus = 'loading' | 'success' | 'error' | null;

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

  let buttonStatuses: Record<string, ImportStatus> = {};

  const importShop = async (shopId: string) => {
    buttonStatuses[shopId] = 'loading';
    const response = await fetch(`/api/shops/import?shop_id=${shopId}`, {
      method: 'GET',
    });
    if (response.ok) {
      buttonStatuses[shopId] = 'success';
      invalidate(() => true);
    } else {
      buttonStatuses[shopId] = 'error';
    }
  };
</script>

<h2 class="text-2xl w-full text-center">Shops</h2>

{#each data.shops.items as shop}
  <div class="card p-4 bg-glass m-4">
    {#if shop.thumbnail_url}
      <img src={shop.thumbnail_url} alt={shop.name} width="64" class="rounded inline-flex" />
    {/if}
    <h3 class="text-xl">{shop.name}</h3>
    <p>{shop.subdomain}</p>
    {#if data.user?.admin}
      <button
        class="btn btn-primary"
        class:loading={buttonStatuses[shop.subdomain] === 'loading'}
        class:btn-error={buttonStatuses[shop.subdomain] === 'error'}
        class:btn-success={buttonStatuses[shop.subdomain] === 'success'}
        disabled={buttonStatuses[shop.subdomain] === 'loading'}
        on:click={() => importShop(shop.subdomain)}
      >
        Re-import
      </button>
    {/if}
  </div>
{/each}
<pre>
  <code>{JSON.stringify(data, null, 2)}</code>
</pre>

<style lang="postcss">
</style>
