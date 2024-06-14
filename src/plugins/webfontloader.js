/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

// Imports
import WebFontLoader from 'webfontloader'

export function loadFonts () {
  WebFontLoader.load({
    google: {
      families: ['Poppins:300,400,500,600,700,900&display=swap'],
    },
  })
}
