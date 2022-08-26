module.exports = {
  js2svg: {
    indent: 2, // string with spaces or number of spaces. 4 by default
    pretty: true, // boolean, false by default
  },
  plugins: [
    'removeXMLProcInst',
    'removeDoctype',
    'cleanupIDs',
    'cleanupAttrs',
    'removeEmptyAttrs',
    'removeMetadata',
    'removeTitle',
    'removeDesc',
    'inlineStyles',
    'removeUselessDefs',
    'removeDimensions',
    'removeHiddenElems',
    'removeUnusedNS',
    'removeEmptyText',
    'removeEmptyContainers',
    'removeStyleElement',
    {
      name: 'removeUnknownsAndDefaults',
      params: {
        keepDataAttrs: false
      }
    },
    'collapseGroups',
    'convertPathData',
    {
      name: 'removeCommentsAll',
      type: 'visitor',
      active: true,
      fn() {
        return {
          comment: {
            enter: (node, parentNode) => {
              detachNodeFromParent(node, parentNode);
            },
          },
        }
      }
    }
  ],
}