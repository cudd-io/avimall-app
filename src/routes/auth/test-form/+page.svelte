<script lang="ts">
  import { CodeBlock } from '@skeletonlabs/skeleton';
  import { enhance } from '$app/forms';
  import { Container, HR, Alert, Form, FormElement } from '$lib/components/';
  import { goto } from '$app/navigation';

  export let form;
</script>

<Container main card>
  <div class="text-center mb-10">
    <h2 class="h2">Test Form</h2>
    <p class="text-sm my-2">Just for testing</p>
  </div>

  <Form method="POST" action="?/register">
    <FormElement
      name="username"
      type="text"
      placeholder="Choose a username..."
      value={form?.body.username}
      required
    />
    <FormElement
      name="email"
      type="email"
      placeholder="Enter email address..."
      value={form?.body.email}
      required
    />

    <FormElement name="password" type="password" placeholder="Enter password..." />

    <FormElement
      name="passwordConfirm"
      label="Confirm Password"
      type="password"
      placeholder="Confirm password..."
    />

    <FormElement name="termsOfService" type="checkbox" class="checkbox mr-2" required>
      <span slot="trail">
        I agree to the <a href="/terms-of-service">Terms of Service</a> and
        <a href="/privacy-policy">Privacy Policy</a>
      </span>
    </FormElement>

    <button class="btn variant-filled-primary w-full">Register</button>
  </Form>

  <HR>or</HR>
  <!-- Sign in with Google or Discord -->
  <button class="btn variant-filled-surface w-full my-2">Sign in with Google</button>
  <button class="btn variant-filled-surface w-full my-2">Sign in with Discord</button>

  <CodeBlock code={JSON.stringify({ form }, null, 2)} language="json"></CodeBlock>
</Container>
