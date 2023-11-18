<script lang="ts">
  import { RailSidebar, GlobalSidebar } from '$lib/components';
</script>

<GlobalSidebar>
  <RailSidebar
    navLinks={[
      { name: 'Avatars', href: '/mall/avatars', icon: 'raphael:woman' },
      { name: 'Clothing', href: '/mall/clothing', icon: 'raphael:tshirt' },
      { name: 'Accessories', href: '/mall/accessories', icon: 'raphael:crown' },
      { name: 'Misc', href: '/mall/misc', icon: 'raphael:fullcube' },
    ]}
  />
</GlobalSidebar>

<slot />
