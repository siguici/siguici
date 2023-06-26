import tailwindPlugin from 'prettier-plugin-tailwindcss'

export default {
  plugins: [tailwindPlugin],
  tailwindConfig: './tailwind.config.js',
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  useTabs: false,
  quoteProps: 'consistent',
  bracketSpacing: true,
  arrowParens: 'always',
  printWidth: 100
}
