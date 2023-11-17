<script lang="ts">
  import { registerSidebar } from '$lib/stores/sidebar';
  import Sidebar from '$lib/layout/settings/Sidebar.svelte';

  const navLinks = [
    { name: 'General', href: '/my/settings', icon: 'raphael:hammerandscrewdriver' },
    { name: 'Profile', href: '/my/settings/profile', icon: 'raphael:user' },
    // { name: 'Account', href: '/my/settings/account', icon: 'material-symbols:account' },
    { name: 'Security', href: '/my/settings/security', icon: 'raphael:lock' },
    { name: 'Logout', href: '/auth/logout', icon: 'material-symbols:logout' },
  ];

  registerSidebar(Sidebar, { navLinks });
</script>

<slot />
