<script lang="ts">
  import { GlobalSidebar } from '$lib/components';
  import RailSidebar from '$lib/components/RailSidebar.svelte';

  const navLinks = [
    { name: 'General', href: '/my/settings', icon: 'raphael:hammerandscrewdriver' },
    { name: 'Profile', href: '/my/settings/profile', icon: 'raphael:user' },
    { name: 'Security', href: '/my/settings/security', icon: 'raphael:lock' },
    { name: 'Logout', href: '/auth/logout', icon: 'material-symbols:logout' },
  ];
</script>

<GlobalSidebar rootPath="/my/settings">
  <RailSidebar {navLinks} />
</GlobalSidebar>
<slot />
