/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import tailwindFormPlugin from '@tailwindcss/forms';

// Function to apply opacity to colors
function withOpacity(variableName: string, opacityValue?: string): string {
  if (opacityValue !== undefined) {
    return `rgba(var(${variableName}), ${opacityValue})`;
  }
  return `rgb(var(${variableName}))`;
}

const tailwindConfig: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          primary: withOpacity('--color-primary'),
          900: withOpacity('--color-primary-900'),
          850: withOpacity('--color-primary-850'),
          700: withOpacity('--color-primary-700'),
          600: withOpacity('--color-primary-600'),
          400: withOpacity('--color-primary-400'),
          300: withOpacity('--color-primary-300'),
          150: withOpacity('--color-primary-150'),
          50: withOpacity('--color-primary-50'),
        },
        secondary: {
          secondary: withOpacity('--color-secondary'),
          900: withOpacity('--color-secondary-900'),
          850: withOpacity('--color-secondary-850'),
          700: withOpacity('--color-secondary-700'),
          400: withOpacity('--color-secondary-400'),
          300: withOpacity('--color-secondary-300'),
          150: withOpacity('--color-secondary-150'),
          50: withOpacity('--color-secondary-50'),
          10: withOpacity('--color-secondary-10'),
          0: withOpacity('--color-secondary-0'),
        },
        gray: {
          700: withOpacity('--color-gray-700'),
          600: withOpacity('--color-gray-600'),
          500: withOpacity('--color-gray-500'),
          400: withOpacity('--color-gray-400'),
          300: withOpacity('--color-gray-300'),
          200: withOpacity('--color-gray-200'),
          100: withOpacity('--color-gray-100'),
          50: withOpacity('--color-gray-50'),
        },
        error: {
          10: withOpacity('--color-error-10'),
          20: withOpacity('--color-error-20'),
          30: withOpacity('--color-error-30'),
        },
        success: {
          10: withOpacity('--color-success-10'),
          20: withOpacity('--color-success-20'),
          30: withOpacity('--color-success-30'),
        },
        warning: {
          10: withOpacity('--color-warning-10'),
          20: withOpacity('--color-warning-20'),
          30: withOpacity('--color-warning-30'),
        },
        white: withOpacity('--color-white'),
        black: withOpacity('--color-black'),
        background: withOpacity('--background'),
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        sans: ['var(--font-vazir)', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/aspect-ratio'),
    tailwindFormPlugin({
      strategy: 'class',
    }),
  ],
};

export default tailwindConfig;
