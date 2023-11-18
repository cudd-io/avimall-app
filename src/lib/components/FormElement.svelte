<script lang="ts">
  import type { InputTypeAttribute, FormElementType, ButtonTypeAttribute } from '$lib/types';
  import { isFormElementType, isInputType, isButtonType } from '$lib/types';
  import { camelCaseToTitleCase } from '$lib/utils';
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';

  type LabelType = 'leading' | 'trailing' | 'none';

  export let name: string;
  export let type: FormElementType | InputTypeAttribute | ButtonTypeAttribute;
  export let label: string = '';
  export let error = '';
  export let labelType: LabelType = 'leading';
  export let hideLabel = false;
  export let inline = false;

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

  $: leadingLabel = labelType === 'leading' || $$slots.lead;
  $: trailingLabel = labelType === 'trailing' || $$slots.trail;

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
    input: 'input input-bordered w-full',
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

<div class="form-control w-full flex" class:flex-row={inline}>
  <!-- Non button input (input, textarea) -->
  {#if elementType !== 'button'}
    <!-- Leading label and slot -->

    {#if leadingLabel}
      {#if $$slots.lead}
        <slot name="lead" />
      {:else if !hideLabel}
        <label for={name} class="{defaultStyles.label} {labelClass}" {...labelAttributes}>
          <span class={defaultStyles.labelSpan}>{labelText}</span>
        </label>
      {/if}
    {/if}

    <!-- Input -->
    {#if elementType === 'input' && !$$slots.default}
      <input
        id={name}
        {name}
        on:input={onStartTyping}
        type={typeAttributeAsInputType}
        class="
        {type === 'checkbox' ? '' : defaultStyles[elementType]}
        {defaultStyles[type]}
        {classes}"
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

    <!-- Default slot -->
    {#if $$slots.default}
      <slot />
    {/if}

    <!-- Trailing slot -->
    {#if trailingLabel}
      {#if $$slots.trail}
        <slot name="trail" />
      {:else if !hideLabel}
        <label for={name} class="{defaultStyles.label} {labelClass}" {...labelAttributes}>
          <span class={defaultStyles.labelSpan}>{labelText}</span>
        </label>
      {/if}
    {/if}

    <!-- {#if $$slots.trail} -->
    <!-- <label for={name} class="{defaultStyles.label} {labelClass}" {...labelAttributes}> -->
    <!-- <slot name="trail" /> -->
    <!-- </label> -->
    <!-- {/if} -->

    {#if error}
      <span
        transition:fade|local={{ duration: 200 }}
        class="text-error-500-400-token text-center w-full flex flex-col"
      >
        {error}
      </span>
    {/if}
  {/if}
</div>
<!-- OLD: -->

<!-- {#if elementType !== 'button'}
  <label for={name} class="{defaultStyles.label} {labelClass}" {...labelAttributes}>
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
{/if} -->

{#if elementType === 'button'}
  {#if $$slots.lead}
    <slot name="lead" />
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
