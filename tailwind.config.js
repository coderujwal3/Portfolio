/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: '#253044',
        muted: '#68758a',
        accent: '#5268d9',
        mint: '#36a895',
      },
      boxShadow: {
        neo: '9px 9px 18px #c8ced8, -9px -9px 18px #ffffff',
        'neo-sm': '5px 5px 10px #c8ced8, -5px -5px 10px #ffffff',
        'neo-inset': 'inset 5px 5px 10px #c8ced8, inset -5px -5px 10px #ffffff',
        'neo-dark': '8px 8px 18px #151a21, -8px -8px 18px #28303b',
      },
    },
  },
  plugins: [],
};
