<script context="module" lang="ts">
  export type NavLink = {
    name: string;
    href: string;
  };
</script>

<script lang="ts">
  export let navLinks: NavLink[] = [];
</script>

<!-- Settings Sidebar -->

<nav
  class="
    list-nav
    px-4 py-4
    flex flex-col h-full w-40
    text-center
    text-lg

    rounded-tr-container-token
    rounded-br-container-token
  "
>
  <ul class="h-full flex flex-col">
    {#each navLinks as link}
      <li class="w-full">
        <a class="w-full text-center flex flex-row justify-center" href={link.href}>{link.name}</a>
      </li>
    {/each}
  </ul>
</nav>
