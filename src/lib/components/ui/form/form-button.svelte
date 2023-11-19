<script lang="ts">
  import * as Button from '$lib/components/ui/button';
  import { cn } from '$lib/utils';
  type $$Props = Button.Props;
  type $$Events = Button.Events;

  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<Button.Root
  type="submit"
  class={cn('btn btn-block btn-primary', className)}
  {...$$restProps}
  on:click
  on:keydown
>
  <slot />
</Button.Root>
