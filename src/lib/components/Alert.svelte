<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let show = true;
  export let variant = 'error';

  const dispatch = createEventDispatcher();
</script>

{#if show}
  <div class="badge variant-filled-{variant} flex flex-row justify-between">
    <p><slot /></p>
    <!-- close button -->
    <button class="btn-icon" on:click={() => dispatch('close')}> </button>
  </div>
{/if}
