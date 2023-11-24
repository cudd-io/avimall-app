<script lang="ts">
  import * as Select from '$lib/components/ui/select';
  import themeState from '$lib/stores/theme';
  const { setTheme, themes, theme, clearTheme } = themeState();

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
</Select.Root>
