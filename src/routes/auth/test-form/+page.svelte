<script lang="ts">
  import { CodeBlock } from '@skeletonlabs/skeleton';
  import * as Form from '$lib/components/ui/form';

  import type { SuperValidated } from 'formsnap';

  import { formSchema, type FormSchema } from './schema';
  import { superValidate } from 'sveltekit-superforms/server';
  import { Container } from '$lib/components';

  export let data;
  export let form: SuperValidated<FormSchema>;
  const { form: dataForm }: { form: SuperValidated<FormSchema> } = data;
</script>

<div class="text-center mb-10">
  <h2 class="text-4xl">Test Form</h2>
  <p class="text-sm my-2">Just a test form. Doesn't do anything</p>
</div>

<!-- Form -->

<Form.Root
  method="POST"
  form={dataForm}
  schema={formSchema}
  let:config
  class="grid grid-cols-1 gap-4"
>
  <Form.Field {config} name="name">
    <Form.Input name="name" type="text" placeholder="Name" />
    <Form.Validation />
  </Form.Field>
  <Form.Field {config} name="description">
    <Form.Textarea name="description" placeholder="Description" />
    <Form.Validation />
  </Form.Field>
  <Form.Button>Submit</Form.Button>
</Form.Root>

<div class="mockup-code">
  <pre><code>{JSON.stringify({ form, data }, null, 2)}</code></pre>
</div>
