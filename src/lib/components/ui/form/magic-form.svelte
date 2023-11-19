<script lang="ts" context="module">
  export type FormField = {
    name: string;
    type: string;
    placeholder?: string;
    class?: string;
    label?: string;
    labelClass?: string;
    hideLabel?: boolean;
  };
</script>

<script lang="ts">
  import type { SuperValidated } from 'sveltekit-superforms';
  import * as Form from '$lib/components/ui/form';
  import { ZodObject } from 'zod';
  import { camelCaseToTitleCase, cn } from '$lib/utils';
  import { isButtonType, isFormElementType, isInputType } from '$lib/types';

  type T = $$Generic<ZodValidation<AnyZodObject>>;

  export let fields: FormField[] = [];
  export let schema: ZodObject<any>;
  export let form: SuperValidated<T>;

  let className: string = '';
  export { className as class };

  const asAny = (x: any) => x as any;

  const getFieldType = (type: string) => {
    if (isInputType(type)) {
      return 'input';
    }

    if (isButtonType(type)) {
      return 'button';
    }

    if (isFormElementType(type)) {
      return type;
    }

    console.warn(
      'Invalid form element type:',
      type,
      'using "input" as default. For custom components, please use a slot'
    );
    return 'input';
  };
</script>

<!-- Generate a form from the provided schema and fields -->

<Form.Root
  method="POST"
  {form}
  {schema}
  let:config
  let:message
  class={cn('grid grid-cols-1 gap-4', className)}
  {...$$restProps}
>
  <slot name="before-fields" {config} {message} />

  {#each fields as field}
    <Form.Field {config} name={field.name}>
      <Form.Item>
        <Form.Label class={cn(field.labelClass, { 'sr-only': field.hideLabel })}
          >{field.label || camelCaseToTitleCase(field.name)}</Form.Label
        >
        {#if getFieldType(field.type) === 'textarea'}
          <Form.Textarea placeholder={field.placeholder} class={field.class} />
        {:else if getFieldType(field.type) === 'input'}
          <Form.Input type={field.type} placeholder={field.placeholder} class={field.class} />
        {/if}
        <Form.Validation />
      </Form.Item>
    </Form.Field>
    {#if getFieldType(field.type) === 'button'}
      <Form.Button type={asAny(field.type)} class={field.class} />
    {/if}
  {/each}
  <slot {config} {message} />
  <slot name="after-fields" {config} {message} />
</Form.Root>
