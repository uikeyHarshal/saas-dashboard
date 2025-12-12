
const autoprefixer = require('autoprefixer');

let tailwindPlugin = null;
try {
  tailwindPlugin = require('@tailwindcss/postcss');
  console.log('Using @tailwindcss/postcss as PostCSS plugin.');
} catch (e1) {
  try {
    tailwindPlugin = require('tailwindcss');
    console.log('Using tailwindcss as PostCSS plugin.');
  } catch (e2) {
    console.error('ERROR: No Tailwind PostCSS plugin found. Install @tailwindcss/postcss or tailwindcss.');
    throw e2;
  }
}

module.exports = {
  plugins: [
    tailwindPlugin,
    autoprefixer
  ]
};
