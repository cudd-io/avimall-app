<script lang="ts">
	export let main: boolean = false;
	export let card: boolean = false;

	let className = '';
	export { className as class };
</script>

{#if !card}
	<svelte:element this={main ? 'main' : 'div'} class="max-w-[600px] mx-auto p-10 {className}">
		<slot />
	</svelte:element>
{:else}
	<div class="max-w-[600px] mx-auto p-10 {className}">
		<svelte:element this={main ? 'main' : 'div'} class="card p-6">
			<slot />
		</svelte:element>
	</div>
{/if}
