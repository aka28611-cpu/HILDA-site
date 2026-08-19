import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        h: {
          cream: '#FDF6F0',
          blush: '#E8B4B8',
          rose: '#C9787C',
          wine: '#8B2252',
          burgundy: '#6B1D3A',
          gold: '#D4A574',
          goldLight: '#E8C9A0',
          charcoal: '#1A1A1A',
          muted: '#8A8A8A',
          lavender: '#E6E0F0',
        },
      },
      fontFamily: {
        display: ['Cormorant', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
