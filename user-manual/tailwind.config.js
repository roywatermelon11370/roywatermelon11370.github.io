/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'template.html', 'getting_started.html', 'osd_setup.html', 'osd_menus.html', 'specifications.html', 'template.html', 'preset_display_modes.html'],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}

