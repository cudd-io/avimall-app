<script lang="ts">
  import { Form, FormElement } from '$lib/components/';
  import { enhance } from '$app/forms';
  import { HR, Container } from '$lib/components';

  import type { SubmitFunction } from '@sveltejs/kit';

  export let form;

  const errorMessage = form?.error ? 'Invalid email or password' : '';
</script>

<Container main card>
  <div class="text-center mb-10">
    <h2 class="h2">Login to your account</h2>
    <p class="text-sm my-2">
      Or <a href="/auth/register">register</a> if you don't have an account
    </p>
  </div>

  <Form method="POST" action="?/login">
    <FormElement name="email" type="email" placeholder="Enter email address..." />

    <FormElement
      name="password"
      type="password"
      placeholder="Enter password..."
      error={errorMessage}
    />

    <div class="form-control flex flex-row justify-between">
      <FormElement
        name="remember"
        type="checkbox"
        labelClass="label cursor-pointer"
        class="checkbox"
      >
        <span slot="trail" class="label-text">Remember this device</span>
      </FormElement>
      <a href="/auth/forgot-password">Forgot Password</a>
    </div>
    <button slot="trail" class="btn variant-filled-primary w-full">Login</button>
  </Form>

  <HR>or</HR>
  <!-- Sign in with Google or Discord -->
  <button class="btn variant-filled-secondary w-full my-2">Sign in with Google</button>
  <button class="btn variant-filled-secondary w-full my-2">Sign in with Discord</button>
</Container>

<style lang="postcss">
  a {
    @apply anchor;
  }
</style>
