<script lang="ts">
  import { Checkbox as CheckboxPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils';

  type $$Props = CheckboxPrimitive.Props & {
    class?: string;
    checked?: boolean;
  };

  type $$Events = CheckboxPrimitive.Events;

  let className: string | undefined = undefined;
  export let checked: boolean = false;
  export { className as class };
</script>

<input type="checkbox" bind:checked class={cn('checkbox', className)} {...$$restProps} />
