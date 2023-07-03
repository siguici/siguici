/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,md,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/nesting'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
