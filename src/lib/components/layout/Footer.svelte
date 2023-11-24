<script lang="ts">
  import ThemeSelect from './mall/ThemeSelect.svelte';

  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/instantrahmen',
    },
    {
      name: 'Patreon',
      url: 'https://patreon.com/erikatho',
    },
    {
      name: 'PayPal',
      url: 'https://paypal.me/erikatho',
    },
  ];
</script>

<footer class="footer items-center p-4 text-base-content flex flex-row text-center justify-between">
  <!-- Theme Picker -->
  <ThemeSelect />

  <span>© {new Date().getFullYear()} Erika Tho</span>
  <ul class="links flex flex-row gap-2">
    {#each links as link}
      <li>
        <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
      </li>
    {/each}
  </ul>
</footer>

<style lang="postcss">
  :global(footer > *) {
    place-items: center;
  }
</style>
