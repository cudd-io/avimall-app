<script lang="ts">
  import { Footer, Header } from '$lib/components/layout';
  import Shell from '$lib/components/layout/Shell.svelte';
  import ThemeManager from '$lib/components/layout/ThemeManager.svelte';

  import '../app.postcss';

  export let data;
</script>

<ThemeManager />
<Shell {data}>
  <slot />
</Shell>
