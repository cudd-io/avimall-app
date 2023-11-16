<script lang="ts">
  import { CodeBlock } from '@skeletonlabs/skeleton';
  import { enhance } from '$app/forms';
  import { Container, HR, Alert } from '$lib/components/';
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
    <h2 class="h2">Create an account</h2>
    <p class="text-sm my-2">Or <a href="/auth/login">login</a> if you already have an account</p>
  </div>

  <!-- Doc: https://kit.svelte.dev/docs/form-actions#progressive-enhancement-use-enhance -->
  <form method="POST" action="?/register" use:enhance class="space-y-4">
    <label class="label">
      <span>Username</span>
      <input
        class="input"
        name="username"
        type="text"
        placeholder="Choose a username..."
        required
      />
      <Alert variant="error" show={!!errors?.username} on:close={() => clearError('username')}>
        {errors?.username.message}
      </Alert>
    </label>

    <label class="label">
      <span>Email</span>
      <input
        class="input"
        name="email"
        type="email"
        placeholder="Enter email address..."
        required
      />
      <Alert variant="error" show={!!errors?.email} on:close={() => clearError('email')}>
        {errors?.email.message}
      </Alert>
    </label>

    <label class="label">
      <span>Password</span>
      <input
        class="input"
        name="password"
        type="password"
        placeholder="Enter password..."
        required
      />
      <Alert variant="error" show={!!errors?.password} on:close={() => clearError('password')}>
        {errors?.password.message}
      </Alert>
    </label>

    <label class="label">
      <span>Confirm Password</span>
      <input
        class="input"
        name="passwordConfirm"
        type="password"
        placeholder="Confirm password..."
        required
      />
      <Alert
        variant="error"
        show={!!errors?.passwordConfirm}
        on:close={() => clearError('passwordConfirm')}
      >
        {errors?.passwordConfirm.message}
      </Alert>
    </label>

    <!-- Terms of Service checkbox -->
    <label class="label">
      <input class="checkbox mr-2" name="termsOfService" type="checkbox" required />
      <span
        >I agree to the <a href="/terms-of-service">Terms of Service</a> and
        <a href="/privacy-policy">Privacy Policy</a></span
      >
    </label>
    <button class="btn variant-filled-primary w-full">Register</button>
  </form>
  <HR>or</HR>
  <!-- Sign in with Google or Discord -->
  <button class="btn variant-filled-surface w-full my-2">Sign in with Google</button>
  <button class="btn variant-filled-surface w-full my-2">Sign in with Discord</button>
  <!-- ></CodeBlock> -->
  <!-- <CodeBlock code={JSON.stringify({ form, errors: getAllErrors() }, null, 2)} language="json" -->
</Container>

<style lang="postcss">
  a {
    @apply anchor;
  }
</style>
