<script lang="ts">
  import { LightSwitch } from '@skeletonlabs/skeleton';

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

<footer
  class="footer items-center p-4 text-neutral-content flex flex-row text-center justify-between"
>
  <LightSwitch />
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
