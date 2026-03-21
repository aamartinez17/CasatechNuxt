/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary-rgb) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary-rgb) / <alpha-value>)',
        cta: 'rgb(var(--color-cta-rgb) / <alpha-value>)',
        'cta-hover': 'var(--color-cta-hover)',
        'bg-light': 'var(--color-bg-light)',
        'bg-dark': 'var(--color-bg-dark)',
      },
      textColor: {
        body: 'var(--text-body)',
        muted: 'var(--text-muted)',
        interactive: 'var(--text-interactive)',
        'interactive-hover': 'var(--text-interactive-hover)',
        'on-dark': 'var(--text-on-dark)',
        'on-cta': 'var(--text-on-cta)',
        error: 'var(--text-error)',
        success: 'var(--text-success)',
        
        // Kept your original ones here so your Navbar doesn't break!
        main: 'var(--color-text-main)',
        heading: 'var(--text-heading)',
        light: 'var(--color-text-light)',
      },
      fontFamily: {
        body: ['var(--font-family-body)'],
        heading: ['var(--font-family-headings)'],
      },
      fontSize: {
        sm: 'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
      },
      transitionProperty: {
        'fast': '200ms',
      },
    },
  },
  safelist: [
    'bg-orange-500',
    'hover:bg-orange-600',
    'text-slate-300',
    'bg-slate-900',
    'bg-gray-50',
    'bg-blue-50/30',
    'border-gray-300',
    'p-4',
    'text-slate-900',
    'text-slate-700',
    'bg-orange-600',
  ],
  plugins: [],
}