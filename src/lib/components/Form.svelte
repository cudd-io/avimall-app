<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  export let name = 'form';
  export let action = '';
  export let preventDefault = false;
  export let method = 'POST';
  let classes = 'grid grid-cols-1 gap-4';
  export { classes as class };
  const dispatch = createEventDispatcher();

  const onSubmit = (e: Event) => {
    if (preventDefault) {
      e.preventDefault();
    }
    dispatch('submit', e);
  };
</script>

<form {name} {action} {method} on:submit={onSubmit} class={classes} {...$$restProps}>
  {#if $$slots.lead}
    <slot name="lead" />
  {/if}
  {#if $$slots.default}
    <slot />
  {/if}
  {#if $$slots.trail}
    <slot name="trail" />
  {/if}
</form>
