const { detachNodeFromParent } = require('svgo/lib/xast.js');

module.exports = {
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
    {
      name: 'removeUnknownsAndDefaults',
      params: {
        keepDataAttrs: false
      }
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: 'path:fill'
      }
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: 'polygon:fill'
      }
    },
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