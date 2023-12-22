import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import tailwindScrollbar from 'tailwind-scrollbar-daisyui';
import tailwindTextFillStroke from 'tailwindcss-text-fill-stroke';

const customThemes = {
  light: {
    primary: '#e65cdc',
    secondary: '#fcacf6',
    accent: '#be1eb3',
    neutral: '#4d0047',
    'base-100': '#ffd1fc',

    info: '#3889fd',
    success: '#00dd77',
    warning: '#e84b00',
    error: '#ff677e',
  },
  dark: {
    primary: '#a3199a',
    secondary: '#54034d',
    accent: '#e141d7',
    neutral: '#4d0047',
    'base-100': '#2e002b',

    info: '#3889fd',
    success: '#00dd77',
    warning: '#e84b00',
    error: '#ff677e',
  },
};

export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    'dark',
    // {
    //   pattern: /^bg-./,
    //   variants: ['hover', 'focus'],
    // },
    // {
    //   pattern: /^col-span-./,
    // },
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      dropShadow: {
        outline: [
          '0 0 0 2px var(--tw-shadow-color)',
          '0 0 0 4px var(--tw-ring-inset)',
          '0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
          '0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
        ],
      },
    },
  },
  plugins: [forms, typography, daisyui, tailwindScrollbar, tailwindTextFillStroke],
  daisyui: {
    darkTheme: 'cosmic-noir', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: 'html', // The element that receives theme color CSS variables
    // custom daisyUI themes
    themes: [{ ...customThemes }, 'synthwave', 'pastel', 'valentine'], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  },
} satisfies Config;
