<script lang="ts">
  import Icon from '@iconify/svelte';
  import { GlobalSidebar, RailSidebar } from '$lib/components';

  const navLinks = [
    { name: 'General', href: '/my/settings', icon: 'raphael:hammerandscrewdriver' },
    { name: 'Profile', href: '/my/settings/profile', icon: 'raphael:user' },
    { name: 'Security', href: '/my/settings/security', icon: 'raphael:lock' },
  ];

  const navLinksTail = [
    { name: 'Logout', href: '/auth/logout', icon: 'mdi:logout', classes: 'text-red-500' },
  ];
</script>

<GlobalSidebar rootPath="/my/settings">
  <RailSidebar {navLinks} {navLinksTail}></RailSidebar>
</GlobalSidebar>
<slot />
