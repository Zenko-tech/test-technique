import type { Config } from 'tailwindcss'
const { addDynamicIconSelectors } = require('@iconify/tailwind');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'sidebarBtn': {
          0: '#1d193d',
          1: '#1b2255'
        },
        'btnBorder': '#6445E8',
        'yellow-button': '#cb8e37',
        'yellow-button-hover': '#b37c32',
        'green-button': '#c3dbce',
        'green-button-hover': '#b37c32',
      },
    },
  },
  plugins: [// Iconify plugin
    addDynamicIconSelectors(),
  ],
}
export default config
