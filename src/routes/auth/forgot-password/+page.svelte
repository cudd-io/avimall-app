<script lang="ts">
  import { enhance } from '$app/forms';
  import { Container, HR } from '$lib/components/';
  import type { SubmitFunction } from '@sveltejs/kit';

  // Doc: https://kit.svelte.dev/docs/types#public-types-submitfunction
  const onFormSubmitHandler: SubmitFunction = () => {};

  export let form;
</script>

<Container main card>
  <div class="text-center mb-10">
    <h2 class="h2">Reset your password</h2>
    <p class="text-sm my-2">
      Please enter your email and we'll send you a link to reset your password.
    </p>
  </div>

  <form method="POST" action="?/resetPassword" use:enhance={onFormSubmitHandler} class="space-y-4">
    {#if form?.success}
      <div class="alert variant-filled-success">
        <p>Password reset link sent. Please check your email.</p>
      </div>
    {/if}
    <label class="label">
      <span>Email</span>
      <input class="input" name="email" type="email" placeholder="Enter email..." required />
    </label>
    <!-- <div class="form-control flex flex-row justify-between">
    </div> -->
    <button class="btn variant-filled-primary w-full">Reset Password</button>
    <div class="flex flex-row justify-end gap-2">
      or
      <a href="/auth/login">Go back to login page</a>
    </div>
  </form>
</Container>

<style lang="postcss">
  a {
    @apply link link-info;
  }
</style>
