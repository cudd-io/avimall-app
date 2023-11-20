<script lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils';

  type $$Props = DropdownMenuPrimitive.ItemProps & {
    inset?: boolean;
  };
  type $$Events = DropdownMenuPrimitive.ItemEvents;

  let className: $$Props['class'] = undefined;
  export let inset: $$Props['inset'] = undefined;
  export { className as class };
</script>

<DropdownMenuPrimitive.Item
  class={cn(
    // "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    inset && 'pl-8',
    'p-2 text-sm variant-filled-warning text-center w-full max-w-full min-w-full whitespace-nowrap mb-2 ',
    // highlighted color
    'data-[highlighted]:bg-base-100 rounded-lg transition-all ease-out duration-[.2s] data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    className
  )}
  {...$$restProps}
  on:click
  on:keydown
  on:focusin
  on:focusout
  on:pointerdown
  on:pointerleave
  on:pointermove
>
  <slot />
</DropdownMenuPrimitive.Item>
