<script lang="ts">
  export let main: boolean = false;
  export let card: boolean = false;

  let className = '';
  export { className as class };
</script>

{#if !card}
  <div class="max-w-[600px] mx-auto p-8 {className}">
    <!-- <svelte:element this={main ? 'main' : 'div'} class="max-w-[600px] mx-auto p-10 {className}"> -->
    <slot />
    <!-- </svelte:element> -->
  </div>
{:else}
  <div class="card max-w-[600px] mx-auto p-8 my-8 {className} bg-neutral">
    <slot />
  </div>
{/if}
