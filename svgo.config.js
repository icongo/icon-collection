module.exports = {
  multipass: true,
  js2svg: {
    indent: 2, // string with spaces or number of spaces. 4 by default
    pretty: true, // boolean, false by default
  },
  plugins: [
    'removeXMLProcInst',
    'cleanupIDs',
    'cleanupAttrs',
    'removeEmptyAttrs',
    'removeMetadata',
    'removeTitle',
    'inlineStyles',
    'removeUselessDefs',
    'removeComments',
    'removeDimensions',
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: ['height="1em"', 'width="1em"']
      }
    },
  ]
}