<script lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import { cn, flyAndScale } from '$lib/utils';

  type $$Props = DropdownMenuPrimitive.ContentProps;
  type $$Events = DropdownMenuPrimitive.ContentEvents;

  let className: $$Props['class'] = undefined;
  export let transition: $$Props['transition'] = flyAndScale;
  export let transitionConfig: $$Props['transitionConfig'] = undefined;
  export { className as class };
</script>

<DropdownMenuPrimitive.Content
  {transition}
  {transitionConfig}
  class={cn(
    // "z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none",
    'mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-52',
    className
  )}
  {...$$restProps}
  on:keydown
>
  <slot />
</DropdownMenuPrimitive.Content>
