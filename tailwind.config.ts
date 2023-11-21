import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    'dark',
    {
      pattern: /^bg-./,
      variants: ['hover', 'focus'],
    },
    {
      pattern: /^col-span-./,
      variants: ['hover', 'focus'],
    },
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {},
  },
  plugins: [forms, typography, daisyui],
} satisfies Config;
