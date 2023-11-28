<script lang="ts">
  import { page } from '$app/stores';
  import { cn } from '$lib/utils';
  import Icon from '@iconify/svelte';

  export let currentPage: number;
  export let perPage: number;
  export let totalPages: number;
  export let maxPages = 15;
  export let pageUrl: string = $page.url.pathname;

  let className = '';
  export { className as class };

  // pageRange is the number of pages to show on each side of the current page
  $: pageRange = Math.floor(maxPages / 2);

  $: startPage = Math.max(currentPage - pageRange, 1);
  $: endPage = Math.min(currentPage + pageRange, totalPages);
  $: pagesArray = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  $: getPageUrl = (page: number) => `${pageUrl}?page=${page}&limit=${perPage}`;
</script>

<ol
  class={cn(
    'pagination join grid grid-cols-[repeat(auto-fill,minmax(35px,1fr))] justify-center',
    className
  )}
>
  <!-- pagination -->
  <li>
    <a
      href="{pageUrl}?page=0&limit={perPage}"
      class="join-item btn btn-ghost btn-sm"
      aria-disabled={currentPage === 1}
      class:disabled={currentPage === 1}
    >
      <Icon icon="mdi:chevron-double-left" />
    </a>
  </li>
  <li>
    <a
      href="{pageUrl}?page={currentPage - 1}&limit={perPage}"
      class="join-item btn btn-ghost btn-sm disabled:bg-transparent"
      class:disabled={currentPage === 1}
      aria-disabled={currentPage === totalPages}
    >
      <Icon icon="mdi:chevron-left" />
    </a>
  </li>
  {#each pagesArray as page}
    <li>
      <a
        href="{pageUrl}?page={page}&limit={perPage}"
        class="join-item btn btn-ghost btn-sm"
        class:btn-active={page === currentPage}
      >
        {page}
      </a>
    </li>
  {/each}
  {#if totalPages - currentPage > maxPages}
    <li>
      <span class="join-item text-lg">...</span>
    </li>
    <li>
      <a href="{pageUrl}?page={totalPages}&limit={perPage}" class="join-item btn btn-ghost btn-sm">
        {totalPages}
      </a>
    </li>
  {/if}
  <li>
    <a
      href="{pageUrl}?page={currentPage + 1}&limit={perPage}"
      class="join-item btn btn-ghost btn-sm"
      class:disabled={currentPage === totalPages}
      aria-disabled={currentPage === totalPages}
    >
      <Icon icon="mdi:chevron-right" />
    </a>
  </li>
  <li>
    <a
      href="{pageUrl}?page={totalPages}&limit={perPage}"
      class="join-item btn btn-ghost btn-sm"
      class:disabled={currentPage === totalPages}
      aria-disabled={currentPage === totalPages}
    >
      <Icon icon="mdi:chevron-double-right" />
    </a>
  </li>
</ol>

<style lang="postcss">
  a.disabled {
    @apply pointer-events-none opacity-50 bg-transparent;
  }
</style>
