import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        h: {
          cream: '#FAF5F0',
          creamDark: '#F0EAE2',
          blush: '#E8B4B8',
          rose: '#C9787C',
          wine: '#8B2252',
          burgundy: '#6B1D3A',
          gold: '#D4A574',
          goldLight: '#E8C9A0',
          charcoal: '#1A1A1A',
          text: '#2D2D2D',
          textLight: '#6B6B6B',
          textMuted: '#999999',
          border: 'rgba(0,0,0,0.08)',
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
