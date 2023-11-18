<!--
@component

Renders the content of the slot in a target element.

This component create's react-like portals in Svelte applications, allowing you to render content in a different part of the DOM hierarchy.

- Props:
  - `target` (string): The CSS selector of the target element where the content will be rendered.
  - `class` (string): Additional classes to be applied to the target element.

- Usage:
  ```tsx
  <Portal target="#portal-target">
    <div>
      a modal or sidebar or something
    </div>
  </Portal>
    ```
  -->

<script lang="ts">
  import { portal } from '@svelteuidev/composables';

  export let target: string;
  let classes = '';
  export { classes as class };
</script>

<div id="portal-target" use:portal={target} class={classes} {...$$restProps}>
  <slot />
</div>
