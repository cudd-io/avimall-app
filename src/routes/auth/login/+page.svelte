<script lang="ts">
  import type { SuperValidated } from 'formsnap';
  import * as Form from '$lib/components/ui/form';
  import MagicForm from '$lib/components/ui/form/magic-form.svelte';
  import { HR, Container } from '$lib/components';
  import { loginSchema, type LoginSchema } from './schema';

  export let data;
  const { form }: { form: SuperValidated<LoginSchema> } = data;
</script>

<Container card>
  <div class="text-center mb-10">
    <h2 class="text-4xl">Login to your account</h2>
    <p class="text-sm my-2">
      Or <a href="/auth/register">register</a> if you don't have an account
    </p>
  </div>

  <MagicForm
    method="POST"
    {form}
    schema={loginSchema}
    let:config
    class="grid grid-cols-1 gap-4"
    action="?/login"
    fields={[
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
    ]}
  >
    <!-- Remember this device and forgot password -->
    <Form.Field {config} name="rememberMe">
      <Form.Item class="flex flex-row justify-between">
        <div class="group flex flex-row">
          <Form.Checkbox class="checkbox my-auto" />
          <Form.Label class="label-text ml-4 my-auto ">Remember this device</Form.Label>
        </div>
        <a href="/auth/forgot-password" class="label text-sm break-keep whitespace-nowrap text"
          >Forgot Password</a
        >
      </Form.Item>
    </Form.Field>

    <Form.Button>Login</Form.Button>
  </MagicForm>

  <HR>or</HR>
  <!-- Sign in with Google or Discord -->
  <button class="btn btn-secondary w-full my-2">Sign in with Google</button>
  <button class="btn btn-secondary w-full my-2">Sign in with Discord</button>
</Container>

<style lang="postcss">
  a {
    @apply link link-info;
  }
</style>
