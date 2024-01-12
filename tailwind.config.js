/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.vue'
  ],
  theme: {
    extend: {

      colors: {
        primary: 'var(--q-primary)',
        accent: 'var(--q-accent)',
        secondary: 'var(--q-secondary)',
        tertiary: 'var(--q-tertiary)'
      }

    }
  },
  plugins: []
}
