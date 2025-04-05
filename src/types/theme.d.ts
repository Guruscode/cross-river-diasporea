import 'tailwindcss/tailwind.css';

declare module 'tailwindcss/colors' {
  export interface Colors {
    primary: {
      light: string;
      DEFAULT: string;
      dark: string;
    };
    secondary: {
      light: string;
      DEFAULT: string;
      dark: string;
    };
  }
}