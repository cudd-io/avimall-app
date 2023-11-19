<script lang="ts">
  import { enhance } from '$app/forms';
  import { Container, HR } from '$lib/components/';
  import * as Form from '$lib/components/ui/form';
  import MagicForm from '$lib/components/ui/form/magic-form.svelte';
  import type { SubmitFunction } from '@sveltejs/kit';

  import type { SuperValidated } from 'formsnap';
  import { resetSchema, type ResetSchema } from './schema';
  import { browser } from '$app/environment';

  export let data;
  const { form }: { form: SuperValidated<ResetSchema> } = data;

  // let message = '';
  // if (browser) {
  //   if (message) {
  //     (document.getElementById('message_modal') as any).showModal();
  //   }
  // }
</script>

<Container card>
  <div class="text-center mb-10">
    <h2 class="h2">Reset your password</h2>
    <p class="text-sm my-2">
      Please enter your email and we'll send you a link to reset your password.
    </p>
  </div>

  <MagicForm
    method="POST"
    {form}
    schema={resetSchema}
    let:config
    let:message
    class="grid grid-cols-1 gap-4"
    action="?/resetPassword"
    fields={[
      {
        name: 'email',
        type: 'email',
        placeholder: 'Enter email address...',
      },
    ]}
  >
    <button class="btn btn-primary block" disabled={!!message}>Reset Password</button>
    <div class="flex flex-row justify-end gap-2">
      or
      <a href="/auth/login">Go back to login page</a>
    </div>
    <p slot="before-fields" let:message class="text-lg text-success" class:hidden={!message}>
      {message}
    </p>
  </MagicForm>
</Container>

<style lang="postcss">
  a {
    @apply link link-info;
  }
</style>
