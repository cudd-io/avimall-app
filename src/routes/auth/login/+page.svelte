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
    <h2 class="text-4xl">Login to your account</h2>
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
        inline
        hideLabel
      >
        <label for="remember" class="label">
          <input type="checkbox" id="remember" class="checkbox" name="termsOfService" />
          <span class="label-text ml-1"> Remember this device </span>
        </label>
      </FormElement>
      <a href="/auth/forgot-password" class="label text-sm break-keep whitespace-nowrap text"
        >Forgot Password</a
      >
    </div>
    <button slot="trail" class="btn btn-primary w-full">Login</button>
  </Form>

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
