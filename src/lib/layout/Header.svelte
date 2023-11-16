<script lang="ts">
  import {
    AppBar,
    CodeBlock,
    popup,
    SlideToggle,
    type PopupSettings,
  } from '@skeletonlabs/skeleton';
  import { Avatar } from '@skeletonlabs/skeleton';

  export let data: any;

  // User Popup Menu
  const userPopup: PopupSettings = {
    event: 'click',
    target: 'userPopup',
    placement: 'bottom',
  };

  let debug = false;

  const userMenu = [
    {
      name: 'Profile',
      href: '/my/profile',
    },
    {
      name: 'Settings',
      href: '/my/settings',
    },
    {
      name: 'Logout',
      href: '/auth/logout',
    },
  ];

  const loggedOutMenuBar = [
    {
      name: 'Login',
      href: '/auth/login',
      classes: 'variant-ghost-surface',
    },
    {
      name: 'Register',
      href: '/auth/register',
      classes: 'variant-filled',
    },
  ];

  const loggedInMenuBar = [
    // Login/Register buttons in here also temporarily for testing
    ...loggedOutMenuBar,
  ];
</script>

<AppBar>
  <svelte:fragment slot="lead">
    <a href="/" class="text-xl uppercase">Avatar Mall</a>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    {#if !data.user}
      {#each loggedOutMenuBar as link}
        <a href={link.href} class="btn btn-md {link.classes}">
          {link.name}
        </a>
      {/each}
    {:else}
      {#each loggedInMenuBar as link}
        <a href={link.href} class="btn btn-md {link.classes}">
          {link.name}
        </a>
      {/each}
      <button use:popup={userPopup} class="btn btn-md btn-icon variant-filled">
        <Avatar
          src="https://placewaifu.com/image/256"
          rounded="rounded-full"
          cursor="cursor-pointer"
        />
      </button>

      <div class="card p-4 w-72 shadow-xl" data-popup="userPopup">
        <div class="arrow bg-surface-100-800-token" />
        <ul class="p-2 list-nav">
          {#if !data.user.verified}
            <li>
              <span class="badge variant-filled-warning text-center w-full"
                >Please check email to verify account</span
              >
            </li>
          {/if}

          {#each userMenu as link}
            <li>
              <a href={link.href}>{link.name}</a>
            </li>
          {/each}

          <li class="w-full">
            <label class="m-4 w-full flex flex-row justify-between" for="debug">
              <span>Debug</span>
              <SlideToggle bind:checked={debug} name="debug" />
            </label>
          </li>
        </ul>

        {#if debug}
          <CodeBlock language="json" code={JSON.stringify(data, null, 2)}></CodeBlock>
        {/if}
      </div>
    {/if}
  </svelte:fragment>
</AppBar>
