import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },

      gridTemplateRows: {
        app: 'min-content max-content',
      },
    },
  },
  plugins: [],
}
export default config
