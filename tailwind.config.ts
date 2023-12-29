import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: 'var(--font-inter)',
    },
  },
  plugins: [],
}
export default config
