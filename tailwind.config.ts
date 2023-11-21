import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

const customThemes = {
  'cosmic-noir': {
    primary: '#ff61e2',

    secondary: '#4c1d95',

    accent: '#4949a2',

    neutral: '#0f090b',

    'base-100': '#0A0D12',

    info: '#00f4ff',

    success: '#bfe740',

    warning: '#da8300',

    error: '#ff4778',
  },
};
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    'dark',
    {
      pattern: /^bg-./,
      variants: ['hover', 'focus'],
    },
    {
      pattern: /^col-span-./,
    },
    {
      pattern: /^w-./,
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
  daisyui: {
    darkTheme: 'cosmic-noir', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: 'html', // The element that receives theme color CSS variables
    themes: ['light', 'dark', 'cupcake', customThemes], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  },
} satisfies Config;
