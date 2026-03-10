import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A1633',
        surface: '#F5F7FB',
        accent: '#F5C451'
      }
    }
  },
  plugins: []
};

export default config;
