<script lang="ts">
	import { enhance } from '$app/forms';
	import { HR, Container } from '$lib/components';

	import type { SubmitFunction } from '@sveltejs/kit';

	const onFormSubmitHandler: SubmitFunction = () => {
		// return async ({ update }: { update: any }) => {
		// 	await update(/* { reset: false } */); // set `reset` false to persist existing fields
		// };
	};

	export let form;
</script>

<Container main card>
	<div class="text-center mb-10">
		<h2 class="h2">Login to your account</h2>
		<p class="text-sm my-2">
			Or <a href="/auth/register">register</a> if you don't have an account
		</p>
	</div>

	<form method="POST" action="?/login" use:enhance={onFormSubmitHandler} class="space-y-4">
		{#if form?.error}
			<div class="alert variant-filled-error">
				<p>Please check your email or password</p>
			</div>
		{/if}
		<label class="label">
			<span>Email</span>
			<input
				class="input"
				name="email"
				type="email"
				placeholder="Enter email address..."
				required
			/>
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
		</label>

		<div class="form-control flex flex-row justify-between">
			<label class="label cursor-pointer">
				<input type="checkbox" class="checkbox" />
				<span class="label-text">Remember this device</span>
			</label>
			<a href="/auth/forgot-password">Forgot Password</a>
		</div>
		<button class="btn variant-filled-primary w-full">Login</button>
	</form>

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
