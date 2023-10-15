import type { Config } from 'tailwindcss'

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
      fontFamily: {
        poppins: ['Poppins', 'sans'],
        mochiypopone: ['Mochiy Pop One', 'sans'],
      },
    },
    colors: {
      primary: '#C04C4B',
      secondary: '#F0DBA5',
      tertiary: '#464646',
      quaternary: '#E7E7E6',
      quinary: '#6EA4BB',
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
      current: 'currentColor',
    },
  },
  plugins: [],
}
export default config
