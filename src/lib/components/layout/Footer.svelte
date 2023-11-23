<script lang="ts">
  import { onMount } from 'svelte';
  // import { themeChange } from 'theme-change';

  import useTheme from '$lib/stores/theme';
  import * as Select from '../ui/select';

  const { setTheme, themes, theme, clearTheme } = useTheme();
  // onMount(() => {
  //   // themeChange(false);
  //   initialize();
  // });

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
  $: currentTheme = $theme?.[0] || 'default';

  let selected = {
    value: currentTheme,
    label: currentTheme,
  };

  $: if (selected && selected.value && selected.value !== 'default') {
    console.log('SELECTED value', selected);
    setTheme(selected.value);
  } else if (selected.value === 'default') {
    console.log('SELECTED default', selected);
    clearTheme();
  }
</script>

<footer class="footer items-center p-4 text-base-content flex flex-row text-center justify-between">
  <!-- Theme Picker -->
  <Select.Root bind:selected>
    <Select.Trigger class="w-[180px]">
      <Select.Value placeholder="Choose Theme" />
    </Select.Trigger>
    <Select.Content>
      <Select.Item value="default">default</Select.Item>
      {#each themes as theme}
        <Select.Item value={theme[0]}>{theme[0]}</Select.Item>
      {/each}
    </Select.Content>
    <Select.Input name="theme-picker" class="select select-ghost select-md" />
    <!-- <option disabled selected>Choose Theme</option>
    <option value="default">OS Default</option>
    {#each themes as theme}
      <option value={theme[0]}>{theme[0]}</option>
    {/each} -->
  </Select.Root>

  {selected.label}
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
