<script lang="ts">
  import { registerSidebar } from '$lib/stores/sidebar';
  import Sidebar from '$lib/layout/settings/Sidebar.svelte';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  // setSidebar(Sidebar);

  // export let data;

  const navLinks = [
    { name: 'General', href: '/my/settings' },
    { name: 'Profile', href: '/my/settings/profile' },
    { name: 'Account', href: '/my/settings/account' },
    { name: 'Security', href: '/my/settings/security' },
    { name: 'Logout', href: '/auth/logout' },
  ];

  registerSidebar(Sidebar, { navLinks });
</script>

<slot />
