import { type Theme, setDocumentTheme, getDefaultTheme } from '$lib/stores/theme';

export default (element: HTMLElement, theme: Theme | null) => {
  if (!theme) {
    theme = getDefaultTheme();
  }

  console.log('new theme', theme);
  setDocumentTheme(theme, element);

  return {
    update(newTheme: Theme | null) {
      if (!newTheme) {
        newTheme = getDefaultTheme();
      }
      console.log('new theme', newTheme);
      setDocumentTheme(newTheme, element);
    },
    destroy() {
      // element.removeAttribute('data-theme');
    },
  };
};
