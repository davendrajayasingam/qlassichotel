import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './sanity/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './types/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-playfair-display)'],
        body: ['var(--font-poppins)']
      }
    }
  },
  plugins: []
}
export default config