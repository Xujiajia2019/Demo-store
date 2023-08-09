/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    spacing: {
      '1': '4px',
      '2': '8px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
      '7': '64px',
      '8': '96px'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      margin: {
        'auto': 'auto'
      }
    },
  },
  daisyui: {
    themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.5xl'), fontWeight: theme('fontWeight.bold') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    },
    require('daisyui')
  ]
}
