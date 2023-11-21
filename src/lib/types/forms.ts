export type HTMLElements = keyof HTMLElementTagNameMap;

// Form element: Input
export const INPUT_TYPES = [
  'button',
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'text',
  'time',
  'url',
  'week',
  // 'radio',
] as const;

export type InputTypeAttribute = (typeof INPUT_TYPES)[number];

export function isInputType(s: string): s is InputTypeAttribute {
  if ((INPUT_TYPES as any as string[]).includes(s)) return true;
  return false;
}

// Form element: Button
export const BUTTON_TYPES = ['button', 'submit', 'reset'] as const;

export type ButtonTypeAttribute = (typeof BUTTON_TYPES)[number];

export function isButtonType(s: string): s is ButtonTypeAttribute {
  if ((BUTTON_TYPES as any as string[]).includes(s)) return true;
  return false;
}

export const VALID_FORM_ELEMENTS = ['input', 'textarea', 'button'] as const;

export type FormElementType = (typeof VALID_FORM_ELEMENTS)[number];

export function isFormElementType(s: string): s is FormElementType {
  if ((VALID_FORM_ELEMENTS as any as string[]).includes(s)) return true;
  return false;
}
