// ui components

// Shadcn components are named in lowercase by default and nothing good ever comes from changing the casing of a file in git.
// For consistency, all UI new components should be named in lowercase. Existing UI components will eventually be renamed as well, and other components will stay capitalized.
export { default as Container } from './ui/Container.svelte';
export { default as Portal } from './ui/Portal.svelte';
export { default as Alert } from './ui/Alert.svelte';
export { default as HR } from './ui/HR.svelte';
export * as Button from './ui/button';
export * as Form from './ui/form';
export * as Label from './ui/label';
export * as RadioGroup from './ui/radio-group';
export * as Select from './ui/select';
export * as Switch from './ui/switch';
export * as Textarea from './ui/textarea';

// Sidebar components
export { default as GlobalSidebar } from './sidebars/GlobalSidebar.svelte';
export { default as RailSidebar } from './sidebars/RailSidebar.svelte';
