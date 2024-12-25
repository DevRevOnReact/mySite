
/** @type {import("prettier").Config} */
export const semi = true;
export const trailingComma = 'es5';
export const tabWidth = 2;
export const useTabs = true;
export const singleQuote = true;
export const printWidth = 80;
export const endOfLine = 'lf';
export const overrides = [
  {
    files: ['*.yaml', '*.yml'],
    options: {
      singleQuote: false,
      useTabs: false,
    },
  },
];
