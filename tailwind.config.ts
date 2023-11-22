import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

const customThemes = {
  // light: {
  //   primary: '#9e0081',
  //   secondary: '#fdbff2',
  //   accent: '#e907bf',
  //   neutral: '#f6e0f1',
  //   'base-100': '#fee7f9',
  //   info: '#3889fd',
  //   success: '#00dd77',
  //   warning: '#e84b00',
  //   error: '#ff677e',
  // },
  // dark: {
  //   primary: '#ff61e2',
  //   secondary: '#400235',
  //   accent: '#f816cf',
  //   neutral: '#1f091a',
  //   'base-100': '#180113',
  // },
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
    // {
    //   pattern: /^w-./,
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
    themes: [{ ...customThemes }], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  },
} satisfies Config;
