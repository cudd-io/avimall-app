<script>
  import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error?.message}</h1>

<p>Couldn't find what you were looking for</p>
