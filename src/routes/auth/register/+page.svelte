<script lang="ts">
  import { Container, HR } from '$lib/components/';
  import * as Form from '$lib/components/ui/form';
  import MagicForm from '$lib/components/ui/form/magic-form.svelte';

  import type { SuperValidated } from 'formsnap';
  import { registerSchema, type RegisterSchema } from './schema';

  export let form: SuperValidated<RegisterSchema>;
</script>

<Container card>
  <div class="text-center mb-10">
    <h2 class="text-4xl">Create an account</h2>
    <p class="text-sm my-2">Or <a href="/auth/login">login</a> if you already have an account</p>
  </div>

  <MagicForm
    method="POST"
    {form}
    schema={registerSchema}
    let:config
    class="grid grid-cols-1 gap-4"
    action="?/register"
    fields={[
      {
        name: 'username',
        type: 'text',
        placeholder: 'Choose a username...',
      },
      {
        name: 'email',
        type: 'email',
        placeholder: 'Enter email address...',
      },
      {
        name: 'password',
        type: 'password',
        placeholder: 'Enter password...',
      },
      {
        name: 'passwordConfirm',
        type: 'password',
        placeholder: 'Confirm password...',
        label: 'Confirm Password',
      },
    ]}
  >
    <Form.Field {config} name="termsOfService">
      <Form.Item class="flex flex-row ">
        <Form.Checkbox class="checkbox my-auto" />
        <Form.Label class="label-text ml-4 my-auto ">
          I agree to the <a href="/terms-of-service">Terms of Service</a> and
          <a href="/privacy-policy">Privacy Policy</a>
        </Form.Label>
        <Form.Validation />
      </Form.Item>
    </Form.Field>
    <Form.Button>Register</Form.Button>
  </MagicForm>

  <HR>or</HR>
  <!-- Sign in with Google or Discord -->
  <button class="btn btn-secondary w-full my-2">Sign in with Google</button>
  <button class="btn btn-secondary w-full my-2">Sign in with Discord</button>

  <!-- <CodeBlock code={JSON.stringify({ form, errors }, null, 2)} language="json" /> -->
</Container>

<style lang="postcss">
  a {
    @apply link link-info mx-1;
  }
</style>
