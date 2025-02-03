const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Inter', 'ui-serif', 'Georgia'],
      },
      fontSize: {
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      colors: {
        primary: {
          DEFAULT: '#1E40AF', // Deep Blue
          light: '#3B82F6', // Lighter Blue
          dark: '#1E3A8A', // Darker Blue
        },
        secondary: '#F6F6F6',
        accent: '#EAB308', // Gold/Yellow for CTAs
        neutral: '#E8E8E8',
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
    },
  },
  daisyui: {
    themes: [
      {
        ecommerce: {
          primary: '#1E40AF',
          'primary-content': '#ffffff',
          secondary: '#F6F6F6',
          accent: '#EAB308',
          neutral: '#E8E8E8',
          'base-100': '#ffffff',
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root',
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'), // For styling form elements
    require('@tailwindcss/aspect-ratio'), // For maintaining aspect ratios
    require('@tailwindcss/line-clamp'), // For truncating text
    require('daisyui'),
  ],
};
