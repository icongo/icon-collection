const { detachNodeFromParent } = require('svgo/lib/xast.js');

module.exports = {
  multipass: true,
  js2svg: {
    indent: 2, // string with spaces or number of spaces. 4 by default
    pretty: true, // boolean, false by default
  },
  plugins: [
    'removeDoctype',
    'removeXMLProcInst',
    'removeMetadata',
    'removeEditorsNSData',
    'cleanupAttrs',
    'mergeStyles',
    'inlineStyles',
    'minifyStyles',
    'cleanupIDs',
    'removeUselessDefs',
    'cleanupNumericValues',
    'convertColors',
    'removeNonInheritableGroupAttrs',
    'cleanupEnableBackground',
    'removeHiddenElems',
    'removeEmptyText',
    'convertShapeToPath',
    'convertEllipseToCircle',
    'moveGroupAttrsToElems',
    'convertPathData',
    'convertTransform',
    'removeEmptyAttrs',
    'removeEmptyContainers',
    'mergePaths',
    'removeUnusedNS',
    'sortDefsChildren',
    'removeTitle',
    'removeDesc',
    'removeDimensions',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['svg:(?!(width|height|xmlns))'],
      },
    },
    {
      name: 'addAttributesToElement',
      type: 'visitor',
      fn: (ast, params, info) => {
        const attributes = params.attributes;
        return {
          element: {
            enter: (node, parentNode) => {
              if (/^(svg|g|circle)/i.test(node.name)) {
                if (node.attributes.fill && node.attributes.fill !== 'none') node.attributes.fill = 'currentColor';
                if (node.attributes.stroke && node.attributes.stroke !== 'none') node.attributes.stroke = 'currentColor';
              }
              if (/(svg)/i.test(node.name)) {
                if (!node.attributes.height) node.attributes.height = '1em';
                if (!node.attributes.width) node.attributes.width = '1em';
              }
            }
          }
        }
      },
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
  ]
}