import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Theme =
  | [themeName: string, lightOrDark: 'light' | 'dark']
  | [themeName: string, lightOrDark: 'light' | 'dark', defaultTheme: boolean];

const themeLSKey = 'saved-theme';

const themes: Theme[] = [
  ['light', 'light', true],
  ['dark', 'dark', true],
  ['valentine', 'light'],
  ['pastel', 'light'],
  ['synthwave', 'dark'],
];
const theme = writable<Theme | null>(null);

const saveTheme = (value: Theme | null) => {
  if (!browser) return;
  if (value === null) {
    localStorage.removeItem(themeLSKey);
  } else {
    localStorage.setItem(themeLSKey, JSON.stringify(value));
  }
  console.log('theme saved', value);
};

const loadTheme = () => {
  const value = localStorage.getItem(themeLSKey);
  if (value) {
    const savedTheme = JSON.parse(value);
    theme.set(savedTheme);
  } else {
    theme.set(null);
  }
  console.log('theme loaded', value);
};

export const getDefaultTheme = (): Theme => {
  const defaultDark = themes.find((t) => t[1] === 'dark' && t[2] === true);
  const defaultLight = themes.find((t) => t[1] === 'light' && t[2] === true);
  console.log('no theme saved');
  // Set to system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('setting to default dark mode');
    // Set default dark theme
    if (defaultDark) {
      return defaultDark;
    } else {
      return ['dark', 'dark'];
    }
  } else {
    console.log('setting to default light mode');
    // Set default light theme
    if (defaultLight) {
      return defaultLight;
    } else {
      return ['light', 'light'];
    }
  }
};

export const setDocumentTheme = (value: Theme, element: HTMLElement = document.documentElement) => {
  console.log('document theme set', value);
  const [themeName, lightOrDark] = value;
  document.documentElement.setAttribute('data-theme', themeName);

  // Set tailwind dark class if dark theme
  if (lightOrDark === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export default () => {
  /**
   * Initializes the theme. Should be called in the `onMount` lifecycle hook.
   */
  const initialize = (updateBody = false) => {
    if (updateBody && !browser) return;

    // Load theme
    loadTheme();
    theme.subscribe((value) => {
      console.log('Theme changed', value);
      // Unsaved temp value
      let tempValue: Theme = value ?? getDefaultTheme();

      // Set document theme
      if (updateBody) {
        setDocumentTheme(tempValue);
      }
      // Save theme
      saveTheme(value);
    });
  };

  return {
    theme,
    themes,
    initialize,
    setTheme: (value: string) => {
      const newTheme = themes.find((t) => t[0] === value);
      if (newTheme) {
        theme.set(newTheme);
      } else {
        theme.set(null);
      }
    },
    clearTheme: () => {
      theme.set(null);
    },
  };
};
