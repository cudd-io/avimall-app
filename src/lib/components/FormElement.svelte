<script lang="ts">
  import type { InputTypeAttribute, FormElementType, ButtonTypeAttribute } from '$lib/types';
  import { isFormElementType, isInputType, isButtonType } from '$lib/types';
  import { camelCaseToTitleCase } from '$lib/utils';
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';

  export let name: string;
  export let type: FormElementType | InputTypeAttribute | ButtonTypeAttribute;
  export let label: string = '';
  export let error = '';
  let labelClass: string = '';
  export let labelAttributes = {};

  let classes: string = '';
  export { classes as class };

  const dispatch = createEventDispatcher();

  $: typeAttributeAsInputType = type as InputTypeAttribute;
  $: typeAttributeAsButtonType = type as ButtonTypeAttribute;
  $: typeAttributeAsAny = type as any;

  $: elementType = getFormElementType(type);

  $: labelText = label || camelCaseToTitleCase(name);

  const getFormElementType = (type: string): FormElementType => {
    if (isFormElementType(type)) {
      return type;
    }

    if (isButtonType(type)) {
      return 'button' as FormElementType;
    }

    if (isInputType(type)) {
      return 'input' as FormElementType;
    }

    console.warn(
      'Invalid form element type:',
      type,
      'using "input" as default. For custom components, please use a slot'
    );
    return 'input' as FormElementType;
  };

  export let defaultStyles = {
    button: 'btn btn-primary',
    input: 'input',
    textarea: 'textarea',
    label: 'label',
    labelSpan: 'label-text',
    checkbox: 'checkbox',
  } as any;

  const onStartTyping = (e: Event) => {
    error = '';
    dispatch('input', e);
  };
</script>

{#if elementType !== 'button'}
  <label for={name} class="{defaultStyles.label} {labelClass}" {...labelAttributes}>
    <!-- Leading Label -->
    {#if $$slots.lead}
      <slot name="lead" />
    {:else if labelText && !$$slots.trail}
      <span class={defaultStyles.labelSpan}>{labelText}</span>
    {/if}
    {#if elementType === 'input'}
      <input
        id={name}
        {name}
        on:input={onStartTyping}
        type={typeAttributeAsInputType}
        class="{defaultStyles[elementType]} {defaultStyles[type]} {classes}"
        class:input-error={!!error}
        {...$$restProps}
      />
    {:else if elementType === 'textarea'}
      <textarea
        id={name}
        {name}
        class="{defaultStyles[elementType]} {classes}"
        class:input-error={!!error}
        {...$$restProps}
      />
    {/if}
    {#if $$slots.default}
      <slot />
    {/if}
    <!-- Trailing Label -->
    {#if $$slots.trail}
      <slot name="trail" />
    {/if}
    {#if error}
      <span
        transition:fade|local={{ duration: 200 }}
        class="text-error-500-400-token text-center w-full flex flex-col"
      >
        {error}
      </span>
    {/if}
  </label>
{/if}

{#if elementType === 'button'}
  {#if $$slots.lead}
    <slot name="trail" />
  {/if}
  <button
    on:click
    on:submit
    id={name}
    value={labelText}
    {name}
    type={typeAttributeAsButtonType}
    class="{defaultStyles[elementType]} {classes}"
    {...$$restProps}
  />
  {#if $$slots.trail}
    <slot name="trail" />
  {/if}
  {#if error}
    <span transition:fade|local={{ duration: 200 }} class=" text-error-50-900-token">{error}</span>
  {/if}
{/if}
