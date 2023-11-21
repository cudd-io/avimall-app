<script lang="ts">
  import { onMount } from 'svelte';

  import { themeChange } from 'theme-change';
  // // themeChange()

  onMount(() => {
    themeChange(false);
  });

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
  <select data-choose-theme class="select select-ghost select-md">
    <option disabled selected>Choose Theme</option>
    <option value="OS">OS Default</option>
    <option value="cosmic-noir">Dark</option>
    <option value="light">Light</option>
  </select>

  <span>Copyright © {new Date().getFullYear()} Erika Tho - All right reserved</span>
  <!-- <span><a href="https://github.com/erikatho" target="_blank" rel="noreferrer">GitHub</a></span> -->
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
