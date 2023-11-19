<script lang="ts">
  import Icon from '@iconify/svelte';

  // import { CheckCircle, ExclamationTriangle } from '@steeze-ui/heroicons';
  // import { Icon } from '@steeze-ui/svelte-icon';
  // import { div, Button, Spinner } from 'flowbite-svelte';
  import type { ZodValidation } from 'sveltekit-superforms';
  import type { SuperForm } from 'sveltekit-superforms/client';
  import type { AnyZodObject } from 'zod';

  type T = $$Generic<ZodValidation<AnyZodObject>>;
  export let data: SuperForm<T>;
  export let action: string;
  // export let submitLabel: string = 'Salva';

  const { enhance, delayed } = data;
  let error: string | undefined = undefined;
</script>

<form
  method="POST"
  {action}
  use:enhance={{
    onError: ({ result }) => {
      error = result.error.message;
    },
  }}
  class="space-y-6 {$$props.class}"
>
  <slot />

  {#if error}
    <div>
      <span class="font-medium">Si è verificato un'errore.</span>
      {error}
    </div>
  {/if}

  <div class="mt-6 flex items-center justify-end gap-x-6">
    <slot name="actions" />
    <!-- <Button type="submit">
      {#if $delayed}
        <Spinner class="mr-3" size="4" />
      {:else}
        <Icon src={CheckCircle} class="w-5 h-5 mr-2 -ml-1" />
      {/if}
      {submitLabel}
    </Button> -->
  </div>
</form>
