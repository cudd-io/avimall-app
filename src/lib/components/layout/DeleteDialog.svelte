<script lang="ts">
  import * as AlertDialog from '$lib/components/ui/alert-dialog';
  import { Button, type ButtonEvents } from '$lib/components/ui/button';
  import { createEventDispatcher } from 'svelte';

  export let open: boolean = false;

  export let closeOnConfirm = true;

  const dispatch = createEventDispatcher();

  function close() {}

  function onCancel(event: ButtonEvents['click']) {
    close();
    dispatch('close', event);
  }

  function onConfirm(event: ButtonEvents['click']) {
    dispatch('accept', event);
    if (closeOnConfirm) {
      close();
    }
  }

  function showDialog() {
    open = true;
  }
</script>

<slot {...AlertDialog} {showDialog} />

<AlertDialog.Root bind:open>
  <AlertDialog.Content>
    <AlertDialog.Header>
      <slot {...AlertDialog} name="header" />
    </AlertDialog.Header>
    <AlertDialog.Footer>
      <slot {...AlertDialog} name="footer" />
      <AlertDialog.Cancel class="btn btn-ghost border-none" on:click={onCancel}
        >Cancel</AlertDialog.Cancel
      >
      <AlertDialog.Action class="btn btn-error" on:click={onConfirm}>Continue</AlertDialog.Action>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog.Root>

<style lang="postcss">
</style>
