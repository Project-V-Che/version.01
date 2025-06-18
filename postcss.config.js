// Optimized PostCSS configuration with security and performance in mind
module.exports = {
  plugins: {
    // Add support for CSS @import rules
    'postcss-import': {},
    
    // Enable CSS nesting
    'tailwindcss/nesting': {},
    
    // Tailwind CSS
    tailwindcss: {},
    
    // Autoprefixer with modern browser support
    autoprefixer: {
      flexbox: 'no-2009',
      grid: 'autoplace',
      overrideBrowserslist: [
        '>0.2%',
        'not dead',
        'not op_mini all',
        'not ie 11'
      ]
    },
    
    // Fix known flexbox issues
    'postcss-flexbugs-fixes': {},
    
    // Modern CSS features with PostCSS Preset Env
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'color-mod-function': true,
        'custom-media-queries': true,
        'media-query-ranges': true,
        'custom-selectors': true
      },
      preserve: false
    },
    
    // Minification in production
    ...(process.env.NODE_ENV === 'production' 
      ? { cssnano: { preset: ['default', { discardComments: { removeAll: true } }] } }
      : {})
  }
}
