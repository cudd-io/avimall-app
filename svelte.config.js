import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte'],
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess()],

  vitePlugin: {
    // inspector: {
    //   toggleKeyCombo: 'meta-shift',
    //   showToggleButton: 'always',
    //   toggleButtonPos: 'bottom-right',
    // },
  },
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },
  onwarn: (warning, handler) => {
    const { code, frame } = warning;
    if (code === 'css-unused-selector') return;

    handler(warning);
  },
};
export default config;
