module.exports = {
  js2svg: {
    indent: 2, // string with spaces or number of spaces. 4 by default
    pretty: true, // boolean, false by default
  },
  plugins: [
    'removeHiddenElems',
    'removeStyleElement',
    {
      name: 'removeUnknownsAndDefaults',
      params: {
        keepDataAttrs: false
      }
    },
    'cleanupIDs',
    'cleanupAttrs',
    'collapseGroups',

    'convertPathData',
    'removeDesc',
    'removeUselessDefs',
    'removeTitle'
  ],
}