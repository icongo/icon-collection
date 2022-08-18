module.exports = {
  multipass: true,
  js2svg: {
    indent: 2, // string with spaces or number of spaces. 4 by default
    pretty: true, // boolean, false by default
  },
  plugins: [
    'removeXMLProcInst',
    'inlineStyles',
    'cleanupIDs',
    'cleanupAttrs',
    'removeEmptyAttrs',
    'removeMetadata',
    'removeTitle',
    'removeStyleElement',
    'removeHiddenElems',
    'removeUselessDefs',
    'removeComments',
    'removeDimensions',
    'removeEditorsNSData',
    'removeDesc',
    'mergePaths',
  ],
}