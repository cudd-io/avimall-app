<script lang="ts">
  export let card: boolean = false;

  let className = '';
  export { className as class };
</script>

{#if !card}
  <div class="max-w-[600px] mx-auto p-8 {className}">
    <slot />
  </div>
{:else}
  <div class="card max-w-[600px] mx-auto p-8 my-8 {className} bg-neutral">
    <slot />
  </div>
{/if}
