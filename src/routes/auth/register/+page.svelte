<script lang="ts">
  import { CodeBlock } from '@skeletonlabs/skeleton';
  import { enhance } from '$app/forms';
  import { Container, HR, Alert, Form, FormElement } from '$lib/components/';
  import { goto } from '$app/navigation';

  export let form;

  $: errors = form?.error?.data;

  const clearError = (key: string) => {
    if (!form || !form.error || !form.error.data || !form.error.data[key]) return;
    form.error.data[key] = null;
  };
</script>

<Container main card>
  <div class="text-center mb-10">
    <h2 class="text-4xl">Create an account</h2>
    <p class="text-sm my-2">Or <a href="/auth/login">login</a> if you already have an account</p>
  </div>

  <Form method="POST" action="?/register">
    <FormElement
      name="username"
      type="text"
      placeholder="Choose a username..."
      value={form?.body.username}
      error={errors?.username?.message}
      required
    />
    <FormElement
      name="email"
      type="email"
      placeholder="Enter email address..."
      value={form?.body.email}
      error={errors?.email?.message}
      required
    />

    <FormElement
      name="password"
      type="password"
      placeholder="Enter password..."
      error={errors?.password?.message}
      required
    />

    <FormElement
      name="passwordConfirm"
      label="Confirm Password"
      type="password"
      error={errors?.passwordConfirm?.message}
      placeholder="Confirm password..."
      required
    />

    <FormElement
      name="termsOfService"
      type="checkbox"
      class="checkbox mr-2"
      required
      hideLabel
      inline
    >
      <label for="termsOfService" class="label">
        <input type="checkbox" name="termsOfService" id="termsOfService" class="checkbox" />
        <span class="label-text ml-1">
          I agree to the <a href="/terms-of-service">Terms of Service</a> and
          <a href="/privacy-policy">Privacy Policy</a>
        </span>
      </label>
      <!-- <span slot="trail">
        I agree to the <a href="/terms-of-service">Terms of Service</a> and
        <a href="/privacy-policy">Privacy Policy</a>
      </span> -->
    </FormElement>

    <button class="btn btn-primary w-full">Register</button>
  </Form>
  <HR>or</HR>
  <!-- Sign in with Google or Discord -->
  <button class="btn btn-secondary w-full my-2">Sign in with Google</button>
  <button class="btn btn-secondary w-full my-2">Sign in with Discord</button>

  <!-- <CodeBlock code={JSON.stringify({ form, errors }, null, 2)} language="json" /> -->
</Container>

<style lang="postcss">
  a {
    @apply link link-info;
  }
</style>
